import { Link } from 'react-router-dom';

export default function MovieItem({ movie }: any) {
    return (
        <Link to={`/movies/${movie.id}`}>
            <div className="movie">
                <div className="movie__img">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt="movie"
                    />

                    <div className="movie__imgOverlay">
                        <p>
                            {movie.overview.split(' ').slice(0, 15).join(' ')}
                            ...
                        </p>
                    </div>
                </div>
                <h3 className="movie__heading">{movie.title}</h3>
                <span className="movie__rating">{movie.vote_average} </span>
            </div>
        </Link>
    );
}
