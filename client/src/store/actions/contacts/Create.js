import axios from 'axios'

const Create = (form) => (dispatch, getState) => {
    const stateToken = getState().auth.token
    const baseURL = 'http://localhost:3275/api/v1/contacts'
    axios.post(baseURL, form, {
        headers: {
            'Authorization': `Bearer ${stateToken}`
        }
      })
        .then(({ data }) => {
            if (Object.entries(data).length >= 1) {
                dispatch({
                    type: 'ADD_CONTACT',
                    payload: data,
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export default Create
