import React from 'react'
import s from './Message.module.css'
export type MessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: MessagePropsType) {
    return (
        <div className={s.messageMain}>
            <div><img className={s.img} src={props.avatar}/></div>
            <div className={s.messageColumn}>
                <div className={s.message}>
                    <div className={s.nameUser}>{props.name}</div>
                    <div className={s.messageUser}>{props.message}</div>
                    <div className={s.timeUser}>{props.time}</div>
                </div>
            </div>
        </div>
    )
}

export default Message

