import axios from 'axios'

const axiosInstance = () => (getState) => {
    const apiURL = 'http://localhost:3275/api/v1'
    const headers = {}
    const stateToken = getState().auth.token
    if (stateToken !== null) {
        headers.Authorization = `Bearer ${stateToken}`
    }
    return axios.create({
        baseURL: apiURL,
        timeout: 6000,
        headers,
    })
}

export default axiosInstance
