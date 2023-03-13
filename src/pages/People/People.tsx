import { useContext, useEffect } from 'react';
import PeopleContext from '../../contexts/PeopleContext';

export default function People({ home = false }) {
    const { getPeople, people }: any = useContext(PeopleContext);

    useEffect(() => {
        getPeople();
    }, [getPeople]);

    let peopleClone = [...people];
    if (home) peopleClone = peopleClone?.slice(0, 12);

    const renderedItems = peopleClone?.map((person: any) => (
        <div className="col-2" key={person.id}>
            <div className="movie">
                <div className="movie__img">
                    <img
                        src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                        alt="movie"
                    />
                </div>
                <h3 className="movie__heading">{person.name}</h3>
                <span className="movie__rating">{person.popularity} </span>
            </div>
        </div>
    ));

    return (
        <>
            <h2 className="heading">People</h2>

            <div className="row">{renderedItems}</div>
        </>
    );
}
