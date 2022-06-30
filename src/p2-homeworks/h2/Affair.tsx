import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import s from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div>
            <li className={s.container}>
                <span className={s.item1}>{props.affair.name} </span>
                <span className={s.item2}>{props.affair.priority} </span>
                <span className={s.item3}>
                    <SuperButton className={s.delete}
                                 red
                                 onClick={deleteCallback}>X
                </SuperButton>
                </span>
            </li>
        </div>
    )
}

export default Affair
