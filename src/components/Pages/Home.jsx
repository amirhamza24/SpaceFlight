import { useContext, useState } from 'react';
import { AllData } from './Context';
import ShowData from './ShowData';

const Home = () => {
    const { filterDataBySearch, filterDataByStatus, filterDataByDate, currentPage, paginate, totalPages, selectedStatus, selectedDate } = useContext(AllData);
    const [search, setSearch] = useState('');

    // for searching method
    const searchText = (value) => {
        setSearch(value);
        filterDataBySearch(value);
    };

    // filter by Failure, Success
    const handleStatusFilter = (status) => {
        filterDataByStatus(status);
    };

    // filter by date
    const handleDateFilter = (date) => {
        filterDataByDate(date);
    };

    return (
        <div className="w-11/12 md:w-10/12 mx-auto my-16">
            <div className="text-left md:text-center mb-16">
                <h2 className="text-4xl font-semibold">Spaceflight Details</h2>
                <p className="text-gray-600 leading-10">Find out the elaborate features of all the past big spaceflights.</p>
            </div>
            
            <div className='flex flex-col md:flex-row gap-2 justify-between items-center'>
                <div className="flex items-center relative w-full md:w-3/12">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => searchText(e.target.value)}
                        placeholder="Search..."
                        className="w-full px-3 py-1 focus:outline-none border rounded-l"
                    />
                </div>

                <div className='flex flex-col md:flex-row gap:7 md:gap-4 lg:gap-7'>
                    <div className="mt-4 flex items-center space-x-4 md:space-x-2 lg:space-x-4">
                        <label className="text-gray-600">By Launch Status:</label>
                            <select
                                value={selectedStatus}
                                onChange={(e) => handleStatusFilter(e.target.value)}
                                className="w-36 py-1 bg-white text-gray-700  focus:outline-none border rounded"
                            >
                                <option value="All">All</option>
                                <option value="Success">Success</option>
                                <option value="Failure">Failure</option>
                            </select>
                    </div>

                    <div className="mt-4 flex items-center space-x-4">
                        <label className="text-gray-600">By Launch Date:</label>
                            <select
                                value={selectedDate}
                                onChange={(e) => handleDateFilter(e.target.value)}
                                className="w-36 py-1 bg-white text-gray-700 focus:outline-none border rounded"
                            >
                                <option value="All">All</option>
                                <option value="LastWeek">Last Week</option>
                                <option value="LastMonth">Last Month</option>
                                <option value="LastYear">Last Year</option>
                            </select>
                    </div>
                </div>
            </div>

            <ShowData />

            {/* pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-4">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            className={`px-4 py-2 ${
                                currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                                onClick={() => paginate(i + 1)}
                            >
                            {i + 1}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
