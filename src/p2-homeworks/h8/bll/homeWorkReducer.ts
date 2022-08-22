import {UserType} from "../HW8";
export type ActionType = {
    type: string
    payload: string | number
}
export const homeWorkReducer = (state: Array<UserType>, action: ActionType): Array<UserType> => { // need to fix any
    switch (action.type) {
        case 'sort up': {
            // need to fix
            return [...state].sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1)
        }
        case 'sort down': {
            // need to fix
            return [...state].sort((a, b) => b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1)
        }
        case 'check': {
            // need to fix
            return state.filter((st ) => st.age >= action.payload )
        }
        default: return state
    }
}