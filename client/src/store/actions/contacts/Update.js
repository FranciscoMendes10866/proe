import axios from 'axios'

const Update = (formData) => (dispatch, getState) => {
    const form = {
        name: formData.name,
        picture: formData.picture,
        device: formData.device,
        number: formData.number,
    }
    const stateToken = getState().auth.token
    const baseURL = `http://localhost:3275/api/v1/contacts/${formData.id}`
    axios.put(baseURL, form, {
        headers: {
            'Authorization': `Bearer ${stateToken}`
        }
      })
        .then(({ data }) => {
            if (Object.entries(data).length >= 1) {
                dispatch({
                    type: 'UPDATE_CONTACT',
                    payload: data,
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export default Update
