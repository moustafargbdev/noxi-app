import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MoviesContext from '../../../contexts/MoviesContext';
import './MovieDetails.scss';
export default function MovieDetails() {
    const { movieId } = useParams();
    const { getMovieDetails, movieDetails }: any = useContext(MoviesContext);
    useEffect(() => {
        getMovieDetails(movieId);
    }, [getMovieDetails, movieId]);

    return (
        <div className="row">
            <div className="col-6">
                <div className="movie__image">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
                        alt=""
                    />
                </div>
            </div>
            <div className="col-6">
                <div className="movie__content">
                    <h3 className="movie__title">{movieDetails.title}</h3>

                    <h4>Overview :</h4>
                    <p className="movie__desc">{movieDetails.overview}</p>

                    <h4>genres :</h4>
                    {movieDetails.genres?.map((genre: any) => (
                        <span className="movie__genre">{genre.name}</span>
                    ))}
                    <p>release date : {movieDetails.release_date}</p>
                </div>
            </div>
        </div>
    );
}
