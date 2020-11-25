import React from 'react';
import Back from "../back";
import './bounce.css'

const Bounce = () => {
    const back = '/games'

    return (
        <div className='bounce_container'>
            <Back back={back} />
            <h1>Sorry, this game is in development</h1>
        </div>
    )
}

export default Bounce;