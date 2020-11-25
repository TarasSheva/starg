import React, {Fragment} from 'react'
import {NavLink} from "react-router-dom";
import './games.css'
import Back from "./back";

const Games = () => {
    const back = '/';
    return (
        <Fragment>
            <Back back={back}/>
            <nav className='nav'>
                <h2>Choice Game</h2>
                <ul>
                    <li className="nav_item">
                        <NavLink to='/snake' className='nav_link'>Snake</NavLink>
                    </li>
                    <li className="nav_item">
                        <NavLink to='/bounce' className='nav_link'>Bounce</NavLink>
                    </li>
                    <li className="nav_item">
                        <NavLink to='/speed' className='nav_link'>Speed</NavLink>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Games;