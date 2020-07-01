import React, { useState, useEffect } from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import Reset from "@material-ui/icons/RotateLeft";

const Timer = () => {
    // minutes will store the value of our timer
    // isActive will store the timer’s state for whether it is currently timing or paused.
    const [minutes, setMinutes] = useState(60);
    const [isActive, setIsActive] = useState(false);

    // toggle function will change the value of isActive to be the opposite of what it currently is.
    function toggle() {
        setIsActive(!isActive);
    }

    // function to reset back to default of 30 mins
    function reset() {
        setMinutes(60);
        setIsActive(false);
    }
    //use the useEffect React Hook to detect when isActive is true and start the timer inside of that function
    useEffect(() => {
        // Firstly, initialize a new variable interval to null.
        let interval = null;
        // detect if isActive is true. If it is, we assign the previously created interval variable to a new interval that triggers every 1,000 milliminutes.
        if (isActive) {
            interval = setInterval(() => {
                //increment the minutes value by one.
                setMinutes((minutes) => minutes - 1);
            }, 60000);
        } else if (!isActive && minutes !== 0) {
            clearInterval(interval);
        }
        // The below return is the equivalent of calling componentWillUnmount in a React Class component.
        return () => clearInterval(interval);
    }, [isActive, minutes]);

    return (
        <div className="app">
            <div className="time">{minutes} min(s)</div>
            <div className="row">
                <button
                    style={{ color: "black", backgroundColor: "white" }}
                    className={`button button-primary button-primary-${
                        isActive ? "active" : "inactive"
                    }`}
                    onClick={toggle}
                >
                    {isActive ? <PauseIcon /> : <PlayArrowIcon />}
                </button>
                <button
                    style={{ color: "black", backgroundColor: "white" }}
                    className="button"
                    onClick={reset}
                >
                    <Reset />
                </button>
            </div>
        </div>
    );
};

export default Timer;
