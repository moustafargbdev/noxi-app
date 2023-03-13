import axios from 'axios';
import React, { createContext, useCallback, useState } from 'react';

const PeopleContext = createContext({});

export const PeopleContextProvider: React.FC<any> = ({ children }) => {
    const [people, setPeople] = useState<[]>([]);

    const getPeople = useCallback(async () => {
        const { data } = await axios.get(
            'https://api.themoviedb.org/3/person/popular?api_key=16e5f62cf801b1d8b2bda7b0c2a81953&language=en-US&page=1'
        );
        setPeople(data.results);
    }, []);
    return (
        <PeopleContext.Provider value={{ getPeople, people }}>
            {children}
        </PeopleContext.Provider>
    );
};

// 16e5f62cf801b1d8b2bda7b0c2a81953
export default PeopleContext;
