import React, { useState, useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';

function Timer() {
    // const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    // let interval = useRef();
    // const startTimer = ({ countdownTimestamp }) => {
    //     interval.current = setInterval(() => {
    //         const countDownDate = new Date(countdownTimestamp).getTime();

    //         const now = new Date().getTime();
    //         const distance = countDownDate - now;

    //         const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //         const hours = Math.fllor(
    //             (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    //         );
    //         const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //         const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    //         if (distance < 0) {
    //             clearInterval(interval.current);
    //             setDays(0);
    //             setHours(0);
    //             setMinutes(0);
    //             setSeconds(0);
    //         }
    //         else {
    //             setDays(days);
    //             setHours(hours);
    //             setMinutes(minutes);
    //             setSeconds(seconds);
    //         }
    //     }, 1000);
    // };
    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(seconds + 1);
            if (seconds === 59) {
                setMinutes(minutes + 1);
                setSeconds(0);

            }
        }, 1000)
        return () => clearInterval(timer);
    });
    const restart = () => {
        setSeconds(0);
        setMinutes(0);
    }

    const stop = () => {
        clearInterval(timer);
    }
    return (
        <>
            <div>Timer</div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Minutes</th>
                        <th>Seconds</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <td>{days}</td> */}
                        {/* <td>{hours}</td> */}
                        <td>
                            {minutes < 10 ? "0" + minutes : minutes}:
                        </td>
                        {/* <td>{seconds}</td> */}
                        <td>
                            {seconds < 10 ? "0" + seconds : seconds}
                        </td>
                        <button className='restart' onClick={restart}>Restart</button>
                        <button className='stop' onClick={stop}>Stop</button>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default Timer