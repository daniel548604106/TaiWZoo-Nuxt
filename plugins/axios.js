import axios from 'axios'
import Cookie from 'js-cookie'
export default axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${Cookie.get('auth')}`,
  },
})

