import React from 'react'
import { Carousel, Form, Button } from "react-bootstrap"
import "../../css/Home.css"
import Timer from './Timer'

const Home = () => {
    return (
        <>
            {/* <Form.Select className="dropdown" id="dropdown" label="Select a page">
                <option>Choose Your Timer</option>
                <option>5'</option>
                <option>30'</option>
                <option>45'</option>
            </Form.Select> */}

            <div id="hero">
                <div className='texture'></div>
                <video width="100%"
                    muted
                    autoPlay={"autoplay"}
                    preLoad="auto"
                    loop  >
                    <source
                        src="./videos/video_1.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className='caption'>
                    <h1>Welcome to the Zen Mode</h1>
                    <h2>A place to relax and meditate</h2>
                    < Timer />
                </div>
            </div>

        </>
    )
}

export default Home;