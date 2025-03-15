import React from 'react'
import "./error.css"
import { Link } from 'react-router'

const Error = () => {
    return (
        <div className='error'>
            <div className="container">
                <div className="backBtn">
                    <Link to="/" className='btn back'>back</Link>
                </div>
                <div className="message">something wrong please try again</div>
            </div>
        </div>
    )
}

export default Error
