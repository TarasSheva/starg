import React from 'react';
import Back from "../back";
import './snake.css'

const Snake = () => {
    const back = '/games'

    return (
        <div className='snake_container'>
            <Back back={back} />
            <h1>Sorry, this game is in development</h1>
        </div>
    )
}

export default Snake;