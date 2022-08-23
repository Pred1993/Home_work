export type inetStateType = {
    loading: boolean
}

const initState: inetStateType = {
    loading: false
}

type actionType = ReturnType<typeof loadingAC>
export const loadingReducer = (state = initState, action: actionType): inetStateType => { // fix any
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {...state, loading: action.loading}
        }
        default: return state
    }
}

export const loadingAC = (loading: boolean) => {
    return {
        type: 'CHANGE-LOADING' as const,
        loading: loading
    }
} // fix any