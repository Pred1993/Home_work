import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

const correctDate = (value: number) => {
if (value < 10) {
    return `${0}${value}`
} else return value
}

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }
    const dateHours = correctDate(date.getHours())
    const dateMinutes = correctDate(date.getMinutes())
    const dateSeconds = correctDate(date.getSeconds())
    const stringTime = `${dateHours}:${dateMinutes}:${dateSeconds}` // fix with date

    const dateNumber = correctDate(date.getDate())
    const dateMonth = correctDate(date.getMonth())
    const dateYear = date.getFullYear()
    const stringDate = `${dateNumber}.${dateMonth}.${dateYear}`  // fix with date

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                {stringTime}
            </div>

            {show ? (
                <div>
                    {stringDate}
                </div>
            )
            : (<br/>)}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
