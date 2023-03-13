import { useContext, useEffect } from 'react';

import MoviesContext from '../../contexts/MoviesContext';
import MovieItem from './components/MovieItem';

export default function Movies({ home = false }: { home?: boolean }) {
    const { getMovies, movies }: any = useContext(MoviesContext);

    useEffect(() => {
        getMovies();
    }, [getMovies]);

    let moviesItems = [...movies];

    if (home) moviesItems = moviesItems?.slice(0, 12);

    const renderedMovies = moviesItems?.map((movie: any) => (
        <div className="col-2" key={movie.id}>
            <MovieItem movie={movie} />
        </div>
    ));

    return (
        <>
            <h2 className="heading">Movies</h2>

            <section className="row">{renderedMovies}</section>
        </>
    );
}
