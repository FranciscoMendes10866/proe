import authInitialState from '../../initialStates/auth'
import contactsInitialState from '../../initialStates/contacts'

const LogOut = (history) => (dispatch, getState) => {
    const stateToken = getState().auth.token
    if (stateToken !== null) {
        dispatch({
            type: 'LOG_OUT',
            payload: authInitialState,
        })
        dispatch({
            type: 'CLEAN_CONTACTS',
            payload: contactsInitialState,
        })
        history.push('/sign-in')
    }
}

export default LogOut
