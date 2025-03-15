import React from 'react'
import "./feed.css"
const Feed = ({element}) => {

    // for images to id
    let urlParts=element.url.split("/");
    let id=urlParts[urlParts.length-2];
    let imgUrl=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${id}.png`
    // console.log(id);

    return (
        <div className='feed'>
            <div className="image">
                <img src={imgUrl} alt="pokemon" loading='lazy'/>
            </div>
            <div className="text">
                <span className="id">{id}.</span>
                <span className="name">{element.name}</span>
            </div>
        </div>
    )
}

export default Feed
