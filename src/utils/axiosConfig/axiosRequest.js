import axios from 'axios'

// axios.defaults.baseURL = ''


// axiosRequest(url, data, token = null, method = 'post') //
export const axiosRequest = async (url, data, token = null, method = 'post') => {
  try {
    const config = {
      method,
    }
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`
      }
    }
    if(data) {
      config.data = data
    }
    const response = await axios(url, config);
    return response
  } catch (error) {
    console.error(error) // show error by console //
    throw error
  }
}