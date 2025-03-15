import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router'
import LoadingPage from '../LoadingPage';
import Error from '../errorPage/Error';
import "./searchAboutPoke.css"
import Stats from '../Stats';

const SearchAboutPoke = () => {
    let [selectedPokemon,setselectedPokemon]=useState([]);
    let {pokeName}=useParams();
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(false);
    const [stats,setStats]=useState({
        height: 0,
        weight: 0,
        exp: 0,
        hp: 0,
        attack: 0,
        defence: 0,
        splAttack: 0,
        splDefence: 0,
        speed: 0,
    });

    const colors = {
        normal: "#A8A77A",
        fire: "#EE8130",
        water: "#6390F0",
        electric: "#F7D02C",
        grass: "#7AC74C",
        ice: "#96D9D6",
        fighting: "#C22E28",
        poison: "#A33EA1",
        ground: "#E2BF65",
        flying: "#A98FF3",
        psychic: "#F95587",
        bug: "#A6B91A",
        rock: "#B6A136",
        ghost: "#735797",
        dragon: "#6F35FC",
        dark: "#705746",
        steel: "#B7B7CE",
        fairy: "#D685AD",
    };

    useEffect(()=> {
        const lnk=`https://pokeapi.co/api/v2/pokemon/${pokeName}`;
        async function fetchPokemon () {
            setLoading(true);
            try {
                let res= await fetch(lnk);
                if(!res.ok) throw new Error("Error occured");
                let data= await res.json();
                setselectedPokemon(data);
                setStats({
                    height: (data.height / 3.048).toFixed(1),
                    weight: (data.weight / 10).toFixed(1),
                    exp: data.base_experience,
                    hp: data.stats[0].base_stat,
                    attack: data.stats[1].base_stat,
                    defence: data.stats[2].base_stat,
                    splAttack: data.stats[3].base_stat,
                    splDefence: data.stats[4].base_stat,
                    speed: data.stats[5].base_stat,
                })
                
                setTimeout(() => {
                    setLoading(false);
                });
    
            } catch (error) {
                setLoading(false);
                setError(true);
            }
        }


        fetchPokemon();
    },[pokeName])

    if(loading)
        return <LoadingPage/>

    if(error)
        return <Error/>


    return (
        <div className="container">
            <div className="backBtn">
                <Link to="/" className='btn back'>back</Link>
            </div>
            <div className="selectedPokmon">
                {/* info */}
                <div className="info">
                    <h3>{selectedPokemon.name}</h3>
                    <div className="types">
                        {selectedPokemon.types.map((e,i)=> {
                            return <span key={i} style={{
                                backgroundColor : colors[e.type.name]
                            }}>{e.type.name}</span>
                        })}
                    </div>
                    <Stats stats={stats}/>
                </div>
                {/* image */}
                <div className="image">
                    <img src={selectedPokemon.sprites.other.home.front_default} alt="please wait" loading='lazy' />
                </div>
            </div>
        </div>
    )
}

export default SearchAboutPoke
