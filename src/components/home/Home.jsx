import React, { useEffect, useState } from 'react'
import "./home.css"
import Header from "./../header/Header"
import FeedContainer from '../feedContainer/FeedContainer'
import { useDispatch, useSelector } from 'react-redux'
import { addOffset,decreaseOffset } from '../../reduxToolkit/offsetSlice'
import LoadingPage from '../LoadingPage'


const Home = () => {
    const [pokemons,setPokemons]=useState([]);
    const [loading,setLoading]=useState(false);
    const [offset,setOffset]=useState(()=> {
        let item =sessionStorage.getItem("offset");
        return item ? 0 : item;
    })
    

    // function of fetching api
    async function fetchPokemon () {
        let apiUrl=`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`;
        let response= await fetch(apiUrl);
        let data=await response.json();
        setPokemons(data.results);
    }

    // handle next button 
    function handleNextButton () {
        let newOffset =offset+50;
        sessionStorage.setItem("offset",newOffset.toString());
        setOffset(newOffset);
    }

    // handle previous button 
    function handlePreviousButton () {
        let newOffset = offset<=50 ? 0 : offset-50;
        sessionStorage.setItem("offset",newOffset.toString());
        setOffset(newOffset);
    }

    useEffect(()=> {
        setLoading(true);
        fetchPokemon();
        setTimeout(()=> {
            setLoading(false);
        },800);
    },[offset]);

    return (
        <div className='home'>
            {loading && <LoadingPage/>}
            {!loading &&
            <>
                <Header/>
                <FeedContainer data={pokemons}/>
                <footer>
                    <button className='btn' onClick={()=> handlePreviousButton()}>previous</button>
                    <button className='btn' onClick={()=> handleNextButton()}>next</button>
                </footer>
            </>
            }
        </div>
    )
}

export default Home
