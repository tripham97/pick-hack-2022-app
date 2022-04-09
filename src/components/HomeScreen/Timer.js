import React, { useState, useEffect, useRef } from 'react';
import { Table } from 'react-bootstrap';
import ReactAudioPlayer from 'react-audio-player';
import "../../css/Home.css"

function Timer() {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
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
            <ReactAudioPlayer
                src="./music/music-player_music_summer.mp3"
                autoPlay={"autoplay"}
                preLoad="auto"
                controls
                loop
            />
            <div>Timer</div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Minutes</th>
                            <th>Seconds</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {minutes < 10 ? "0" + minutes : minutes}
                            </td>
                            <td>
                                {seconds < 10 ? "0" + seconds : seconds}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button className='restart' onClick={restart}>Restart</button>
                            </td>
                            <td>
                                <button className='stop' onClick={stop}>Stop</button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    );
}

export default Timer