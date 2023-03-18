// import axios from "axios";
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import MovieList from '../MovieList/MovieList';
import { useState , useEffect } from "react";

function Home() {

    const [movieArr, setMovieArr] = useState([]);

    const sendReq = async () => {
        const serverURL = `https://movies-library-production-a000.up.railway.app/trending`;
        const response = await fetch(serverURL);
        const data = await response.json(); 


        console.log(data);
        setMovieArr(data);

       
    }

    useEffect(()=>{
        sendReq();
    }, [])

    return (
        <>
          
            <MovieList newArr={movieArr}></MovieList>
        </>
    )
}

export default Home;