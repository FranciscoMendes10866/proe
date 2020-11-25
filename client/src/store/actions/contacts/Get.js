import axios from 'axios'

const Get = () => (dispatch, getState) => {
    const stateToken = getState().auth.token
    const baseURL = 'http://localhost:3275/api/v1/contacts'
    axios.get(baseURL, {
        headers: {
            'Authorization': `Bearer ${stateToken}`
        }
      })
        .then(({ data }) => {
            if (data.length >= 1) {
                dispatch({
                    type: 'GET_CONTACTS',
                    payload: data,
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export default Get
