import { useContext, useEffect } from 'react';
import TvShowsContext from '../../contexts/TvShowsContext';
export default function TvShows({ home = false }: { home?: boolean }) {
    const { getTvShows, tvShows }: any = useContext(TvShowsContext);

    useEffect(() => {
        getTvShows();
    }, [getTvShows]);

    let tvClone = [...tvShows];

    if (home) tvClone = tvClone?.slice(0, 12);

    const renderedItems = tvClone?.map((tvShow: any) => (
        <div className="col-2" key={tvShow.id}>
            <div className="movie">
                <div className="movie__img">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${tvShow.poster_path}`}
                        alt="movie"
                    />

                    <div className="movie__imgOverlay">
                        <p>
                            {tvShow.overview.split(' ').slice(0, 15).join(' ')}
                            ...
                        </p>
                    </div>
                </div>
                <h3 className="movie__heading">{tvShow.name}</h3>
                <span className="movie__rating">{tvShow.vote_average} </span>
            </div>
        </div>
    ));

    return (
        <>
            <h2 className="heading">Tv Shows</h2>
            <div className="row">{renderedItems}</div>
        </>
    );
}
