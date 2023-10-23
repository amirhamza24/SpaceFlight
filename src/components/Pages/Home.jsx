// import React from 'react';
// import { createContext, useEffect, useState } from 'react';
import { useContext } from 'react';
import { FaSearch } from 'react-icons/fa';
import { AllData } from './Context';
import ShowData from './ShowData';

// export const AllData = createContext();

const Home = () => {

    // const [rocketData, setRocketData] = useState([]);

    // useEffect( () => {
    //     fetch('data.json')
    //     .then(res => res.json())
    //     .then(data => setRocketData(data))
    // }, [])

    const values = useContext(AllData);


    return (
        <div className="w-10/12 mx-auto my-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-semibold">Spaceflight Details</h2>

                <p className="text-gray-600 leading-10">Find out the elaborate features of all the past big spaceflights.</p>
            </div>

            
                <div>
                    <div className='flex items-center relative'>
                        <input type="text" placeholder="Search..." className='w-4/12 px-3 py-1 focus:outline-none border rounded' />

                        <div className='absolute top-1 left-[335px] rounded-r bg-blue-600 w-10 h-7 flex justify-center items-center text-white'>
                        <FaSearch></FaSearch>
                        </div>
                    </div>
                </div>

                <div>
                    <h2>My name is: {values.length}</h2>
                </div>

                <ShowData></ShowData>
            {/* <AllData.Provider value={rocketData}>
                {children}
            </AllData.Provider> */}
            
        </div>
    );
};

export default Home;