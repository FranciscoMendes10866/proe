import axios from 'axios'

const SignUp = ({ username, email, password }) => (dispatch) => {
    const formData = { username, email, password }
    const baseURL = 'http://localhost:3275/api/v1/auth/sign_up'
    axios.post(baseURL, formData)
        .then(({ data }) => {
            console.log(data)
            dispatch({
                type: 'SIGN_UP',
                payload: data,
            })
        })
        .catch((err) => {
            console.log(err)
        })
}

export default SignUp
