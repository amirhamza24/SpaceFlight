// import React from 'react';

import { useContext } from "react";
import { AllData } from "./Context";
// import { AllData } from "./Home";

const ShowData = () => {

    const rockets = useContext(AllData)

    return (
        <div className="grid grid-cols-3">
            {
                rockets.map(rocket => <div key={rocket.flight_number}>

                    <p>Name: {rocket.mission_name}</p>
                    
                </div>)
            }
        </div>
    );
};

export default ShowData;