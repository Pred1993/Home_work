import React from 'react'
import {NavLink} from "react-router-dom";
import {PATH} from "./Pages";
import s from './Header.module.css'

function Header() {
    const classActive = ({isActive}: any) => isActive ? s.active : '';
    return (
        <div className={s.container}>
            {/*// add NavLinks*/}
            <NavLink className={`${classActive} ${s.item1}`} to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            <NavLink className={`${classActive} ${s.item2}`} to={PATH.Junior}>Junior</NavLink>
            <NavLink className={`${classActive} ${s.item3}`} to={PATH.Junior_Plus}>Junior Plus</NavLink>
        </div>
    )
}

export default Header
