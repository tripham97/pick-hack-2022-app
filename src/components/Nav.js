import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import '../css/Nav.css'
import { FaFacebookSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const NavBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const handleonClick = (page) => () => {
        navigate(`/${page}`);
    }
    return (
        <Container className='nav-container'>
            <Row style={{
                display: "flex"
                , justifyContent: "space-around"
            }}>
                <Col className='nav-left'>
                    {/* <img src='./images/logo.png' alt='logo' onClick={handleonClick("")} /> */}
                    <h1>ZEN MODE</h1>
                </Col>
                <Col className='nav-middle'>
                    Hello World!
                </Col>
                <Col className='nav-right'>
                    {/* <button onClick={handleonClick("")}> Home </button>
                    <button onClick={handleonClick("about")}> About Us </button>
                    <button onClick={handleonClick("contact")}> Contact Us </button> */}
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                </Col>
            </Row>
        </Container>
    )
}

export default NavBar;