import axios from 'axios'

const SignUp = (form, history) => (dispatch) => {
    const baseURL = 'http://localhost:3275/api/v1/auth/sign_up'
    axios.post(baseURL, form)
        .then(({ data }) => {
            if (data.token) {
                dispatch({
                    type: 'SIGN_UP',
                    payload: data,
                })
                history.push('/dashboard')
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export default SignUp
