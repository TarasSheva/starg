import React from 'react'
import {NavLink} from "react-router-dom";
import './modal.css'

const Modal = (props) => {
    return (
        <div className='modal'>
            <h1>GAME OVER</h1>
            <p>Score:</p>
            <h2>{props.score}</h2>
            <NavLink to={props.back} className='to_back'>
                <button>BACK</button>
            </NavLink>
        </div>
    )
}
export default Modal;