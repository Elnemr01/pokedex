import React from 'react'
import Stat from './Stat'
const Stats = ({stats}) => {
    return (
        <div className='stats'>
            <Stat parameter={"Height"} value={stats.height} unites={"ft"}/>
            <Stat parameter={"Weight"} value={stats.weight} unites={"kg"}/>
            <Stat parameter={"Base Exp"} value={stats.exp} unites={""}/>
            <Stat parameter={"HP"} value={stats.hp} unites={""}/>
            <Stat parameter={"Attact"} value={stats.attack} unites={""}/>
            <Stat parameter={"Defence"} value={stats.defence} unites={""}/>
            <Stat parameter={"spl Attact"} value={stats.splAttack} unites={""}/>
            <Stat parameter={"spl Defence"} value={stats.splDefence} unites={""}/>
            <Stat parameter={"speed"} value={stats.speed} unites={""}/>
        </div>
    )
}

export default Stats
