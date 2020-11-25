import React, {Fragment} from 'react';
import {NavLink} from "react-router-dom";
import './back.css'

const Back = (props) => {
    return (
        <Fragment>
            <NavLink to={`${props.back}`} className='btn_back'><i className="fas fa-arrow-left"></i></NavLink>
        </Fragment>
    )
}
export default Back;