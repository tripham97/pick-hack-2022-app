import React from 'react'
import { Carousel } from "react-bootstrap"

const Home = () => {
    return (
        <div className="navbar">
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