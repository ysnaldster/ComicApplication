import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap'
import styled from 'styled-components'

// Estilos 
const StyledImgContainer = styled(Row)`
    display: flex; 
    justify-content: center;
    margin: 0px;
    margin-top: 5px;
`
const StyledImgResponsive = styled.img`
    height: 300px;
    width: 300px;
    @media (min-width: 768px){
        height: 450px;
        width: 450px;
    }
    @media (min-width: 1400px){
        width: 350px;
        height: 350px;
    }
    @media (min-width: 1700px){
        width: 500px;
        height: 500px;
    }
    
`
const StyledContainerDesktop = styled(Container)`
    justify-content: center;
    margin-top: 5%;
    padding: 0 10%;
    @media (min-width: 1400px){
        margin-top: 2%;
    }
    @media (min-width: 1700px){
        margin-top: 4%;
    }
`


const Home = () => {

    // Hooks para render de información de la api 

    function numeroAleatorio(min, max) {
        return Math.floor((Math.random() * (max - min)) + min);
    }
    // Hooks para cambio de estado 
    const [titulo, setTitulo] = useState('')
    const [imagen, setImagen] = useState('')
    const [alt, setAlt] = useState('')
    const [dia, setDia] = useState('')
    const [mes, setMes] = useState('')
    const [anio, setAnio] = useState('')

    // Petición Aleatoria
    const aleatorio = numeroAleatorio(1, 700)
    useEffect(() => {
        axios.get(`https://afternoon-springs-24137.herokuapp.com/http://xkcd.com/${aleatorio}/info.0.json`)
            .then(response => {
                setTitulo(response.data.title);
                setImagen(response.data.img);
                setAlt(response.data.alt);
                setDia(response.data.day);
                setMes(response.data.month);
                setAnio(response.data.year);
            })
            .catch((error) => {
                console.log('No se pudo hacer la peticion', error);
            })
    }, [])
    // Funcion de Petición Aleatoria a la Api 
    const cambiarComic = () => {
        const aleatorio = numeroAleatorio(1, 700)
        axios.get(`https://afternoon-springs-24137.herokuapp.com/http://xkcd.com/${aleatorio}/info.0.json`)
            .then(response => {
                setTitulo(response.data.title);
                setImagen(response.data.img);
                setAlt(response.data.alt);
                setDia(response.data.day);
                setMes(response.data.month);
                setAnio(response.data.year);
            })
            .catch((error) => {
                console.log('No se pudo hacer la peticion', error);
            })
    }
    return (
        <div className='main-container'>
            <Header />
            {/* Mobile/Tablet */}
            <Container fluid className='d-lg-none'>
                <Row>
                    <Col xs={12} className='title-container'>
                        <h1 className='comic-title'>{titulo}</h1>
                    </Col>
                </Row>
                <Row>
                    <StyledImgContainer>
                        <StyledImgResponsive src={imagen} />
                    </StyledImgContainer>
                    <Row>
                        <Col xs={12} className='description-container'>
                            <p style={{ fontWeight: '600', marginRight: '10px' }}>Published:</p>
                            <p>{dia}/</p>
                            <p>{mes}/</p>
                            <p>{anio}</p>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <p className='comic-description'>{alt}</p>
                </Row>
                <Row>
                    <div>Contenedor para Estrellas</div>
                </Row>
                <Row className='button-container'>
                    <Button onClick={cambiarComic} className='button-info'>Scan</Button>
                </Row>
            </Container>
            {/* Desktop */}
            <StyledContainerDesktop fluid className='d-none d-lg-flex' >
                <Row>
                    <StyledImgContainer>
                        <StyledImgResponsive src={imagen} />
                    </StyledImgContainer>
                    <Row>
                        <Col xs={12} className='description-container'>
                            <p style={{ fontWeight: '600', marginRight: '10px' }}>Published:</p>
                            <p>{dia}/</p>
                            <p>{mes}/</p>
                            <p>{anio}</p>
                        </Col>
                    </Row>
                </Row>
                <div style = {{marginLeft: '20px'}}>
                    <Row>
                        <Col xs={12} className='title-container'>
                            <h1 className='comic-title'>{titulo}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <p className='comic-description'>{alt}</p>
                    </Row>
                    <Row>
                        <div>Contenedor para Estrellas</div>
                    </Row>
                    <Row className='button-container'>
                        <Button onClick={cambiarComic} className='button-info'>Scan</Button>
                    </Row>
                </div>
            </StyledContainerDesktop>
            <Footer />
        </div>
    )
}

export default Home
