import React, { useEffect, useRef, useState } from 'react';

function StopWatch() {
    const [seconds, setseconds] = useState(0);
    const [isrunning, setIsRunning] = useState(false);
    const intervalref = useRef(null);

    useEffect(() => {
        if (isrunning) {
            intervalref.current = setInterval(() => {
                setseconds(prev => {
                    return prev + 1;
                });
            }, 100);
        }

        return () => {
            clearInterval(intervalref.current);
        };
    }, [isrunning]);

    function startTimer() {
        console.log('Start button clicked');
        setIsRunning(true);
    }

    function stopTimer() {
        console.log('Stop button clicked');
        setIsRunning(false);
    }

    function resetTimer() {
        console.log('Reset button clicked');
        setseconds(0);
    }

    return (
        <div>
            <div>This is the StopWatch</div>
            <div>{seconds}</div>

            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
}

export default StopWatch;
