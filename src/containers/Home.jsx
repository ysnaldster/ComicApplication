import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Container, Row, Col, Button } from 'react-bootstrap'
import styled from 'styled-components'

// Styles
const StyledImgContainer = styled(Row)`
    display: flex; 
    justify-content: center;
    margin: 0px;
    margin-top: 5px;
`
const StyledImgResponsive = styled.img`
    height: 250px;
    width: 250px;
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
const StyledStarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 15px;
`


const StarSVG = (props) => {
    const { fill = 'none' } = props;
    return (
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill={fill} viewBox="0 0 24 24" stroke="currentColor" style={{ width: '40px', height: '40px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
        </div>
    )
}

const Rate = (props) => {
    const {
        index,
        rate,
        hoverRate,
        onMouseEnter,
        onMouseLeave,
        onSaveRate,
    } = props;

    const rateStar = React.useMemo(() => {
        if (hoverRate >= index) {
            return '#000000';
        } else if (!hoverRate && rate >= index) {
            return '#000000';
        }
        return 'none';
    }, [rate, hoverRate, index]);
    return (
        <div onMouseEnter={() => onMouseEnter(index)} onMouseLeave={() => onMouseLeave()} onClick={() => onSaveRate(index)} className='cursor-pointer'>
            <StarSVG fill={rateStar} />
        </div>
    )
}

const Home = () => {

    // Hooks para render de información del API

    function randomNumber(min, max) {
        return Math.floor((Math.random() * (max - min)) + min);
    }
    // Hooks para cambio de estado 
    const [title, setTitle] = useState('')
    const [img, setImg] = useState('')
    const [alt, setAlt] = useState('')
    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    // Estado de Estrellas
    const [rate, setRate] = useState(0);
    const [hoverRate, setHoverRate] = useState(0);
    const onMouseEnter = (index) => {
        setHoverRate(index);
    }
    // Funciones para el cambio de estado de las estrellas
    const onMouseLeave = () => {
        setHoverRate(0);
    }
    const onSaveRate = (index) => {
        setRate(index)
    }
    const quantity = [1, 2, 3, 4, 5];

    // Petición Aleatoria
    useEffect(() => {
        const random = randomNumber(1, 700)
        axios.get(`https://afternoon-springs-24137.herokuapp.com/http://xkcd.com/${random}/info.0.json`)
            .then(response => {
                setTitle(response.data.title);
                setImg(response.data.img);
                setAlt(response.data.alt);
                setDay(response.data.day);
                setMonth(response.data.month);
                setYear(response.data.year);
            })
            .catch((error) => {
                console.log('Error', error);
            })
    }, [])
    // Funcion de Petición Aleatoria al API
    const changeComic = () => {
        const random = randomNumber(1, 700)
        axios.get(`https://afternoon-springs-24137.herokuapp.com/http://xkcd.com/${random}/info.0.json`)
            .then(response => {
                setTitle(response.data.title);
                setImg(response.data.img);
                setAlt(response.data.alt);
                setDay(response.data.day);
                setMonth(response.data.month);
                setYear(response.data.year);
                setRate(0);
                setHoverRate(0);
            })
            .catch((error) => {
                console.log('Error', error);
            })
    }
    return (
        <div className='main-container'>
            <Header />
            {/* Mobile/Tablet */}
            <Container fluid className='d-lg-none'>
                <Row>
                    <Col xs={12} className='title-container'>
                        <h1 className='comic-title'>{title}</h1>
                    </Col>
                </Row>
                <Row>
                    <StyledImgContainer>
                        <StyledImgResponsive src={img} />
                    </StyledImgContainer>
                    <Row>
                        <Col xs={12} className='description-container'>
                            <p style={{ fontWeight: '600', marginRight: '10px' }}>Published:</p>
                            <p>{day}/</p>
                            <p>{month}/</p>
                            <p>{year}</p>
                        </Col>
                    </Row>
                </Row>
                <Row>
                    <p className='comic-description'>{alt.substring(0, 120)}</p>
                </Row>
                <Row>
                    <StyledStarContainer style={{ display: 'flex' }}>
                        {quantity.map((index) => {
                            return (
                                <Rate index={index} rate={rate} hoverRate={hoverRate} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onSaveRate={onSaveRate} key = {index}/>
                            )
                        })}
                    </StyledStarContainer>
                </Row>
                <Row className='button-container'>
                    <Button onClick={changeComic} className='button-info'>Random</Button>
                </Row>
            </Container>
            {/* Desktop */}
            <StyledContainerDesktop fluid className='d-none d-lg-flex' >
                <Row>
                    <StyledImgContainer>
                        <StyledImgResponsive src={img} />
                    </StyledImgContainer>
                    <Row>
                        <Col xs={12} className='description-container'>
                            <p style={{ fontWeight: '600', marginRight: '10px' }}>Published:</p>
                            <p>{day}/</p>
                            <p>{month}/</p>
                            <p>{year}</p>
                        </Col>
                    </Row>
                </Row>
                <div style={{ marginLeft: '20px' }}>
                    <Row>
                        <Col xs={12} className='title-container'>
                            <h1 className='comic-title'>{title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <p className='comic-description'>{alt.substring(0, 100)}</p>
                    </Row>
                    <Row>
                        <StyledStarContainer>
                            {quantity.map((index) => {
                                return (
                                    <Rate index={index} rate={rate} hoverRate={hoverRate} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onSaveRate={onSaveRate} key = {index}/>
                                )
                            })}
                        </StyledStarContainer>
                    </Row>
                    <Row className='button-container'>
                        <Button onClick={changeComic} className='button-info'>Random</Button>
                    </Row>
                </div>
            </StyledContainerDesktop>
            <Footer />
        </div>
    )
}

export default Home
