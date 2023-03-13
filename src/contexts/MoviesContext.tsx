import axios from 'axios';
import React, { createContext, useCallback, useState } from 'react';

const MoviesContext = createContext({});

export const MoviesContextProvider: React.FC<any> = ({ children }) => {
    const [movies, setMovies] = useState<[]>([]);
    const [movieDetails, setMovieDetails] = useState<[]>([]);

    const getMovies = useCallback(async () => {
        const { data } = await axios.get(
            'https://api.themoviedb.org/3/movie/popular?api_key=16e5f62cf801b1d8b2bda7b0c2a81953&language=en-US&page=1'
        );
        setMovies(data.results);
    }, []);

    const getMovieDetails = useCallback(async (movie_id: number) => {
        const { data } = await axios.get(
            `https://api.themoviedb.org/3/movie/${movie_id}?api_key=16e5f62cf801b1d8b2bda7b0c2a81953&language=en-US&page=1`
        );
        setMovieDetails(data);
        console.log(data);
    }, []);
    return (
        <MoviesContext.Provider
            value={{ getMovies, getMovieDetails, movies, movieDetails }}
        >
            {children}
        </MoviesContext.Provider>
    );
};

// 16e5f62cf801b1d8b2bda7b0c2a81953
export default MoviesContext;
