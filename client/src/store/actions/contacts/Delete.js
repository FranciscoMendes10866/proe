import axios from 'axios'

const Delete = (id) => (dispatch, getState) => {
    const stateToken = getState().auth.token
    const baseURL = `http://localhost:3275/api/v1/contacts/${id}`
    axios.delete(baseURL, {
        headers: {
            'Authorization': `Bearer ${stateToken}`
        }
    })
        .then(({ data }) => {
            if (data) {
                dispatch({
                    type: 'DELETE_CONTACT',
                    payload: id,
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export default Delete
