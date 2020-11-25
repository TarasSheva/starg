import React, {Fragment} from 'react'
import {NavLink} from "react-router-dom";
import './home.css'

const Home = () => {
    return (
        <Fragment>
            <div className="home_container">
                <h1>Welcome to Game</h1>
                <p>Please press Get Started to select a game</p>
                <NavLink to='/games' className='btn_start'>
                    GET STARTED
                </NavLink>
            </div>
        </Fragment>
    )
}

export default Home;