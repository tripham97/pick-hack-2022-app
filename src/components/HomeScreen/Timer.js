import React, { useState, useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';

function Timer() {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
    let interval = useRef();
    const startTimer = () => {
        interval.current = setInterval(() => {
            const countDownDate = new Date("May 17, 2022 00:00:00").getTime();

            const now = new Date().getTime();
            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.fllor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            if (distance < 0) {
                clearInterval(interval.current);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }
            else {
                setDays(days);
                setHours(hours);
                setMinutes(minutes);
                setSeconds(seconds);
            }
        }, 1000);
    };

    useEffect(() => {
        startTimer();
        return () => {
            clearInterval(interval.current);
        }
    }, []);

    return (
        <>
            <div>Timer</div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Days</th>
                        <th>Hours</th>
                        <th>Minutes</th>
                        <th>Seconds</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{days}</td>
                        <td>{hours}</td>
                        <td>{minutes}</td>
                        <td>{seconds}</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default Timer