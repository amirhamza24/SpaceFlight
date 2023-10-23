// import React from 'react';
import { createContext, useEffect, useState } from 'react';

export const AllData = createContext();

const Context = ({ children }) => {

    const [rocketData, setRocketData] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setRocketData(data))
    }, [])

    return (
        <AllData.Provider value={rocketData}>
            {children}
        </AllData.Provider>
    );
};

export default Context;