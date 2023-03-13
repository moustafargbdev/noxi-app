import axios from 'axios';
import React, { createContext, useCallback, useState } from 'react';

const TvShowsContext = createContext({});

export const TvShowsContextProvider: React.FC<any> = ({ children }) => {
    const [tvShows, setTvShows] = useState<[]>([]);

    const getTvShows = useCallback(async () => {
        const { data } = await axios.get(
            'https://api.themoviedb.org/3/tv/popular?api_key=16e5f62cf801b1d8b2bda7b0c2a81953&language=en-US&page=1'
        );
        setTvShows(data.results);
    }, []);
    return (
        <TvShowsContext.Provider value={{ getTvShows, tvShows }}>
            {children}
        </TvShowsContext.Provider>
    );
};

// 16e5f62cf801b1d8b2bda7b0c2a81953
export default TvShowsContext;
