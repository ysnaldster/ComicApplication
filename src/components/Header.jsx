import React from 'react'
import { Container, Navbar, Carousel } from 'react-bootstrap'
import styled from 'styled-components'

// Aplicación de Estilos utilizando Styled-components
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
        font-size: 80px;
        margin-top: 40px; 
        margin-left: 60px;
    }
    @media (min-width: 1400px){
        font-size: 100px;
        margin-top: 60px; 
        margin-left: 60px;
    }
`


const Header = () => {
    return (
        <div>
            <Carousel className = 'carrusel-container'>
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
            <StyledTitleCarousel>
                Bienvenidos a <br/>
                ComicApp</StyledTitleCarousel>
        </div>
    )
}

export default Header
