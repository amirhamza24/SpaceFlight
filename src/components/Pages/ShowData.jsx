// import React from 'react';

import { useContext } from "react";
import { AllData } from "./Context";
// import { AllData } from "./Home";

const ShowData = () => {

    const rockets = useContext(AllData)

    return (
        <div className="grid grid-cols-3 gap-8 mt-10">
            {
                rockets.map(rocket => <div key={rocket.flight_number} className="border flex items-center justify-center p-10">
                    <div className="text-center space-y-3">
                        <img className="w-32 h-32" src={rocket.links.mission_patch_small} alt="" />
                        <p className="text-gray-700">Lunch Year: {rocket.launch_year}</p>

                        <div>
                            <h2 className="font-semibold text-2xl">{rocket.mission_name}</h2>

                            <p className="text-gray-700">{rocket.rocket.rocket_name}</p>
                        </div>

                        <div>
                            <p className="text-gray-700">Launch Status:</p>
                            {
                                rocket.launch_success === true ? (
                                    <button className="bg-green-600 px-2 py-1 rounded text-sm">Success</button>
                                ) : (
                                    <button className="bg-red-600 px-2 py-1 rounded text-sm">Failed</button>
                                )
                            }
                        </div>
                    </div>
                    
                </div>)
            }
        </div>
    );
};

export default ShowData;