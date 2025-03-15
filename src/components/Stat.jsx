import React from 'react'

const Stat = ({parameter , value ,unites}) => {
    return (
        <div className='stat'>
            <div className="parameter">{parameter}</div>
            <div className="value">
                {value}
                <span>{unites}</span>
            </div>
        </div>
    )
}

export default Stat
