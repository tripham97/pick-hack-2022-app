import React from 'react'
import { Carousel, Form, Button } from "react-bootstrap"
import Timer from './Timer'

const Home = () => {
    return (
        <div className="navbar">
            {/* <Form.Select className="dropdown" id="dropdown" label="Select a page">
                <option>Choose Your Timer</option>
                <option>5'</option>
                <option>30'</option>
                <option>45'</option>
            </Form.Select> */}
            <Timer />
            <div>
                <Button>
                    Let's Go!
                </Button>
            </div>
            <Carousel>
                <Carousel.Item>
                    <video loop autoPlay width="100%" controls>
                        <source
                            src="https://www.youtube.com/watch?v=5qap5aO4i9A"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </Carousel.Item>
                <Carousel.Item>
                    <video loop autoPlay width="100%" controls>
                        <source
                            src="https://www.youtube.com/watch?v=5qap5aO4i9A"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                </Carousel.Item>
            </Carousel>
        </div >
    )
}

export default Home;