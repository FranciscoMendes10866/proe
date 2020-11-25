import axios from 'axios'

const SignIn = (form, history) => (dispatch) => {
    const baseURL = 'http://localhost:3275/api/v1/auth/sign_in'
    axios.post(baseURL, form)
        .then(({ data }) => {
            if (data.token) {
                dispatch({
                    type: 'SIGN_IN',
                    payload: data,
                })
                history.push('/dashboard')
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

export default SignIn
