import React from 'react';
import Back from "../back";
import './speed.css'

const Speed = () => {
    const back = '/games'

    return (
        <div className='speed_container'>
            <Back back={back} />
            <h1>Sorry, this game is in development</h1>
        </div>
    )
}

export default Speed;