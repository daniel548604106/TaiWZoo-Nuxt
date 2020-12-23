import axios from '@/plugins/axios'

export const signup = async (payload) => {
  const {name,email,password} = payload
  return await axios.post('/api/v1/users/signup', {name,email,password})
}
