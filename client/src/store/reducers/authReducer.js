import authInitialState from '../initialStates/auth'

const authReducer = (state = authInitialState, { payload, type }) => {
    switch (type) {
        case 'SIGN_IN':
        case 'SIGN_UP':
        case 'LOG_OUT':
            return {
                ...state,
                token: payload.token,
                username: payload.username
            }
        default:
            return state
    }
}


export default authReducer