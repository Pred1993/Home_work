import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

function Header() {
    const classActive = ({isActive}: any) => isActive ? `${s.active}` : s.item
    return (
        <div className={s.container}>
            {/*// add NavLinks*/}
            <NavLink className={classActive} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink className={classActive} to={PATH.Junior}>Junior</NavLink>
            <NavLink className={classActive} to={PATH.Junior_Plus}>Junior Plus</NavLink>
        </div>
    )
}

export default Header
