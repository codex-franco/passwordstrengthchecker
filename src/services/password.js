import axios from 'axios'
const url = 'https://o9etf82346.execute-api.us-east-1.amazonaws.com/staging/password/strength'

const create = async newPassword => {
    const response = await axios.post(url, {
        password: newPassword
    })
    return response.data
}
// eslint-disable-next-line
export default {create}