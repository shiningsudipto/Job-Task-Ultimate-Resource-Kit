import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

const Strategy = () => {
    const [rangeValue, setRangeValue] = useState(50); // Initial range value is set to 50

    const handleRangeChange = (event) => {
        setRangeValue(event.target.value);
    };

    const handleButtonClick = () => {
        // Increment the range value by a step (e.g., 10)
        const newRangeValue = rangeValue + 10;
        setRangeValue(Math.min(newRangeValue, 100)); // Ensure the range value does not exceed 100 (max value)
    };

    return (
        <div className="">
            <div className="bg-bgGray p-6 space-y-4">
                <h3 className="text-xl font-bold">Retirement Strategy</h3>
                <div>
                    <p className="font-semibold">Employee Contribution</p>
                    <div className="flex items-center">
                        <div className="w-9/12">
                            <input
                                type="range"
                                id="rangeSlider"
                                className="block w-full h-1 appearance-none bg-blue-300 rounded-lg overflow-hidden focus:outline-none"
                                style={{ background: `linear-gradient(to right, #88B1FF ${rangeValue}%, #bdbdbd ${rangeValue}%)` }}
                                value={rangeValue}
                                onChange={handleRangeChange}
                            />
                            <div className="flex justify-between mt-[-13px] relative ">
                                <div
                                    className="w-6 h-6 bg-white rounded-full absolute top-0 transform -translate-x-1/2 cursor-pointer shadow-xl"
                                    style={{ left: `calc(${rangeValue}% - 3px)` }} // Move the button based on range value
                                    onClick={handleButtonClick} // Add the onClick event handler to slide the button
                                ></div>
                            </div>
                        </div>
                        <p className="mt-2 ms-4 bg-white p-1 font-semibold">{Math.floor(rangeValue)}%</p>
                    </div>
                </div>
                <div>
                    <p className="font-semibold">Retirement Age</p>
                    <div className="flex items-center">
                        <div className="w-9/12">
                            <input
                                type="range"
                                id="rangeSlider"
                                className="block w-full h-1 appearance-none bg-blue-300 rounded-lg overflow-hidden focus:outline-none"
                                style={{ background: `linear-gradient(to right, #88B1FF ${rangeValue}%, #bdbdbd ${rangeValue}%)` }}
                                value={rangeValue}
                                onChange={handleRangeChange}
                            />
                            <div className="flex justify-between mt-[-13px] relative">
                                <div
                                    className="w-6 h-6 bg-white rounded-full absolute top-0 transform -translate-x-1/2 cursor-pointer shadow-xl"
                                    style={{ left: `calc(${rangeValue}% - 3px)` }} // Move the button based on range value
                                    onClick={handleButtonClick} // Add the onClick event handler to slide the button
                                ></div>
                            </div>
                        </div>
                        <p className="mt-2 ms-4 bg-white p-1 font-semibold">{Math.floor(rangeValue)}%</p>
                    </div>
                </div>
                <div className="divider"></div>
                <div className="font-semibold">
                    <div className="flex justify-between">
                        <p>Employer Contribution</p>
                        <p>8.4%</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Interest Rate</p>
                        <p>5%</p>
                    </div>
                </div>
                <button className="w-full p-3 bg-mainColor text-white font-semibold rounded-md">Update</button>
                <p className="flex items-center font-semibold text-mainColor justify-center">View Help Docs <FaChevronRight /> </p>
            </div>
            <div className="border-s-2 mt-8 border-mainColor">
                <div className="space-y-2 ms-4">
                    <p>Are you contributing a</p>
                    <p><b>Housing Advance?</b></p>
                    <p>Limited time reduced interest</p>
                    <a href="#" className="flex items-center text-mainColor">Learn More <FaChevronRight /> </a>
                </div>
            </div>
        </div>

    );
};

export default Strategy;