import React, { useState } from 'react'
import { Link } from 'react-router'
import logo from "../../assets/logo-image.png"
import "./header.css"

const Header = () => {
    const [query,setQuery]=useState("");
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="please wait" loading='lazy'/>
                </div>
                <div className="search">
                    <input type="text" name="search" id="searchInput" placeholder='search by name or id'
                    onChange={(e)=> {
                        setQuery(e.target.value);
                    }}
                    />
                    <Link to={`${query}`} ><button className='btn'>search</button></Link>
                </div>
            </div>
        </header>
    )
}

export default Header
