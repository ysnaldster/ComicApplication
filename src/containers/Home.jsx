import React,{useState, useEffect} from 'react'
import axios from 'axios';
import Header from '../components/Header';




const Home = () => {
    
    // Hooks para render de información de la api 

    function numeroAleatorio(min,max){
        return Math.floor((Math.random() * (max-min)) +min);
    }
    const [titulo, setTitulo] = useState('')

    // Petición Aleatoria
    const aleatorio = numeroAleatorio(1,700)
    useEffect(() => {
        axios.get(`https://afternoon-springs-24137.herokuapp.com/http://xkcd.com/${aleatorio}/info.0.json`)
        .then(response => {
            setTitulo(response.data.title)
        })
        .catch((error) => {
            console.log('No se pudo hacer la peticion', error);
        })
    }, [])
    // Funcion de Petición Aleatoria a la Api 
    const realizarPeticion = () => {
        const aleatorio = numeroAleatorio(1,700)
        axios.get(`https://afternoon-springs-24137.herokuapp.com/http://xkcd.com/${aleatorio}/info.0.json`)
        .then(response => {
            setTitulo(response.data.title)
        })
        .catch((error) => {
            console.log('No se pudo hacer la peticion', error);
        })
    } 
    return (
        <div>
            <Header/>
            <h1>Prueba del componente Home </h1>
            <p>{titulo}</p>
            <button onClick = {realizarPeticion}>Traer Info</button>
        </div>
    )
}

export default Home
