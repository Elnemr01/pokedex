import React from 'react'
import Feed from '../feed/Feed'
import "./feedContainer.css"
import { Link } from 'react-router'

const FeedContainer = ({data}) => {
    return (
        <section className='feedContainer'>
            <div className="container">
                {data.map((e,index)=> {
                    return <Link to={`/${e.name}`} key={e.name}><Feed key={index} element={e}/></Link>
                })}
            </div>
        </section>
    )
}

export default FeedContainer
