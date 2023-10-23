// import React from 'react';
// import { createContext, useEffect, useState } from 'react';
import { useContext, useState } from 'react';
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

    const [search, setSearch] = useState('');
    const { rocketData, filterDataBySearch, currentPage, paginate } = useContext(AllData);
    
    // const searchText = value => {
        // setFilter(e.target.value)

        // const res = values.filter(filterData => filterData.rocket.rocket_name.toLowerCase().includes(value))
        // setFilter(res)

    // }

    const searchText = (value) => {
        setSearch(value);
        filterDataBySearch(value);
    };

    return (
        <div className="w-10/12 mx-auto my-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-semibold">Spaceflight Details</h2>

                <p className="text-gray-600 leading-10">Find out the elaborate features of all the past big spaceflights.</p>
            </div>

            
                <div>
                    <div className='flex items-center relative'>
                        <input type="text" value={search} onChange={e=> searchText(e.target.value)} placeholder="Search..." className='w-3/12 px-3 py-1 focus:outline-none border rounded-l' />

                        <div className='absolute top-0 left-[280px] rounded-r bg-blue-600 w-10 h-[33px] flex justify-center items-center text-white'>
                        <FaSearch></FaSearch>
                        </div>
                    </div>
                </div>

                <ShowData></ShowData>

        </div>
    );
};

export default Home;