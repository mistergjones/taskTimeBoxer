import React, { useState } from "react";

function Timer() {
    const [decrement, setDecrement] = useState(30);

    const now = new Date().toLocaleTimeString();
    const [fTime, setFutureTime] = useState(now);
    const [countDownTime, setCountDownTime] = useState(30);

    function getTime() {
        var currentTime = new Date();
        console.log(currentTime);

        // now add 30 minutes to the time.
        var futureTime = new Date();
        futureTime.setMinutes(futureTime.getMinutes() + 30);
        console.log(futureTime);

        // convert to localeTimeString to only obtain the hours, minutes, seconds etc
        // currentTime = currentTime.toLocaleTimeString();
        currentTime = currentTime.toLocaleTimeString();
        futureTime = futureTime.toLocaleTimeString();

        setFutureTime(futureTime);
    }

    const deadline = "June 30 2020 23:50:59";

    function getTimeRemaining(endtime) {
        // convert both times to millisenconds and subract the difference
        const total = Date.parse(endtime) - Date.parse(new Date());
        // dividle millseconds by a 1000 to convert to seconds
        // then divide by 60 to grab the remainder seconds.
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds,
        };
    }

    // obtains the amount of time remaining
    var result = getTimeRemaining(deadline);
    console.log(result);

    // destrcutre each component of the time remaining
    var { total, days, hours, minutes, seconds } = result;

    console.log(total);
    console.log(days);
    console.log(`Hours: ${hours * 60}`);
    console.log(`Minutes: ${minutes}`);
    console.log(minutes + hours * 60);
    var counter = minutes + hours * 60;

    // var newYearCountdown = setInterval(function () {
    //     console.log(counter);
    //     counter--;
    //     if (counter === 0) {
    //         console.log("HAPPY NEW YEAR!!");
    //         clearInterval(newYearCountdown);
    //     }
    // }, 1000);

    // console.log(newYearCountdown);
    function decrementCounter() {
        setDecrement(decrement - 1);
    }

    return (
        <div>
            <button onClick={getTime}>Start Timer:</button>
            <h3>Start time from: {new Date().toLocaleTimeString()}</h3>
            <h3>Expected Finish Time:{fTime}</h3>
            <h3>Timer value is: </h3>
            <button onClick={decrementCounter}>Decrement</button>
            <h3>{decrement}</h3>
        </div>
    );
}

export default Timer;
