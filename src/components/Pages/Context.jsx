import { createContext, useEffect, useState } from 'react';

export const AllData = createContext();

const Context = ({ children }) => {
    const [rocketData, setRocketData] = useState([]);
    const [filterData, setFilterData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [selectedDate, setSelectedDate] = useState('All');

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then((res) => res.json())
            .then((data) => {
                setRocketData(data);
                setFilterData(data);
            });
    }, []);

    const filterDataBySearch = (searchText) => {
        const filtered = rocketData.filter((rocket) =>
            rocket.rocket.rocket_name.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilterData(filtered);
        paginate(1);
    };

    const filterDataByStatus = (status) => {
        setSelectedStatus(status);
        if (status === 'All') {
            setFilterData(rocketData);
        } else {
            const filtered = rocketData.filter((rocket) => rocket.launch_success === (status === 'Success'));
            setFilterData(filtered);
        }
        paginate(1);
    };

    const filterDataByDate = (date) => {
        setSelectedDate(date);
        const today = new Date();
        let cutoffDate = new Date();

        if (date === 'LastWeek') {
            cutoffDate.setDate(today.getDate() - 7);
        } 
        else if (date === 'LastMonth') {
            cutoffDate.setMonth(today.getMonth() - 1);
        } 
        else if (date === 'LastYear') {
            cutoffDate.setFullYear(today.getFullYear() - 1);
        } 
        else {
            cutoffDate = null;
        }

        const filtered = rocketData.filter((rocket) => {
            if (cutoffDate) {
                const launchDate = new Date(rocket.launch_date_utc);
                return launchDate >= cutoffDate;
            }
            return true;
        });
        setFilterData(filtered);
        paginate(1);
    };

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const getPaginatedData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const currentItems = filterData.slice(startIndex, endIndex);
        return currentItems;
    };

    const totalPages = Math.ceil(filterData.length / itemsPerPage);

    return (
        <AllData.Provider
            value={{
                rocketData: getPaginatedData(),
                filterDataBySearch,
                filterDataByStatus,
                filterDataByDate,
                currentPage,
                paginate,
                totalPages,
                selectedStatus,
                selectedDate,
            }}
        >
            {children}
        </AllData.Provider>
    );
};

export default Context;
