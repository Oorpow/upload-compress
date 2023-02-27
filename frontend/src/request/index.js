import axios from 'axios'

const MyReq = axios.create({
    baseURL: '/api'
})

export default MyReq