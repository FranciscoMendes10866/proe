const LogOut = (history) => (dispatch, getState) => {
    const stateToken = getState().auth.token
    const data = { token: null, username: null }
    if (stateToken !== null) {
        dispatch({
            type: 'LOG_OUT',
            payload: data,
        })
        history.push('/sign-in')
    }
}

export default LogOut
