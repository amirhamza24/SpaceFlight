import { useContext, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { AllData } from './Context';
import ShowData from './ShowData';

const Home = () => {
    const { filterDataBySearch, filterDataByStatus, filterDataByDate, currentPage, paginate, totalPages, selectedStatus, selectedDate } = useContext(AllData);
    const [search, setSearch] = useState('');

    const searchText = (value) => {
        setSearch(value);
        filterDataBySearch(value);
    };

    const handleStatusFilter = (status) => {
        filterDataByStatus(status);
    };

    const handleDateFilter = (date) => {
        filterDataByDate(date);
    };

    return (
        <div className="w-10/12 mx-auto my-16">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-semibold">Spaceflight Details</h2>
                <p className="text-gray-600 leading-10">Find out the elaborate features of all the past big spaceflights.</p>
            </div>
            <div>
                <div className="flex items-center relative">
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => searchText(e.target.value)}
                        placeholder="Search..."
                        className="w-3/12 px-3 py-1 focus:outline-none border rounded-l"
                    />
                    <div className="absolute top-0 left-[280px] rounded-r bg-blue-600 w-10 h-[33px] flex justify-center items-center text-white">
                        <FaSearch />
                    </div>
                </div>
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <label className="text-gray-600">Filter by Launch Status:</label>
                <select
                    value={selectedStatus}
                    onChange={(e) => handleStatusFilter(e.target.value)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
                >
                    <option value="All">All</option>
                    <option value="Success">Success</option>
                    <option value="Failure">Failure</option>
                </select>
            </div>
            <div className="mt-4 flex items-center space-x-4">
                <label className="text-gray-600">Filter by Launch Date:</label>
                <select
                    value={selectedDate}
                    onChange={(e) => handleDateFilter(e.target.value)}
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded"
                >
                    <option value="All">All</option>
                    <option value="LastWeek">Last Week</option>
                    <option value="LastMonth">Last Month</option>
                    <option value="LastYear">Last Year</option>
                </select>
            </div>
            <ShowData />
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
