import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string | null // need to fix any
    totalUsers: number // need to fix any
    onKeyPressHandler: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, onKeyPressHandler} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : ''// need to fix with (?:)
    // const errorText = error && <div className={s.errorMessage}>{error}</div>
    return (
        <div className={s.container}>
            <SuperInputText value={name} onChange={setNameCallback} className={inputClass}
             onKeyPress={onKeyPressHandler}
             error={error}
            />
            <SuperButton
                onClick={addUser}>add
            </SuperButton>
            <span>{totalUsers}</span>
            {/*{errorText}*/}
        </div>
    )
}

export default Greeting
