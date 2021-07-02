import React from 'react'
import {Carousel } from 'react-bootstrap'
import styled from 'styled-components'

// Styles with Styled-components
const StyledTitleCarousel = styled.div`
    position: absolute;
    top: 1px;
    color: #ffffff;
    margin-top: 8px;
    margin-left: 20px;
    font-size: 26px;
    font-weight: 700; 
    @media (min-width: 768px){
        font-size: 40px;
        margin-top: 20px;
        margin-left: 30px;
    }
    @media (min-width: 1200px){
        font-size: 60px;
        margin-top: 40px; 
        margin-left: 60px;
    }
    @media (min-width: 1400px){
        font-size: 80px;
        margin-top: 0px; 
        margin-left: 60px;
    }
`


const Header = () => {
    return (
        <div>
            {/* Carousel Mobile */}
            <Carousel className = 'carousel-primary-container d-lg-none'>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/XXCP8Kz/slider-3.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000}>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/LPFvgsM/slider-2.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            {/* Carousel Desktop */}
            <Carousel className = 'carousel-primary-container d-lg-block d-none'>
                <Carousel.Item interval={2000} >
                    <img
                        className="d-block w-100 h-25"
                        src="https://i.ibb.co/XXCP8Kz/slider-3.png"
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={2000} >
                    <img
                        className="d-block w-100 h-25"
                        src="https://i.ibb.co/LPFvgsM/slider-2.png"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
            <StyledTitleCarousel>
                Welcome to <br/>
                ComicApp</StyledTitleCarousel>
        </div>
    )
}

export default Header
