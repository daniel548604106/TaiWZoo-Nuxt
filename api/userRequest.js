import axios from '@/plugins/axios'

export const signup = async (payload) => {
  return await axios.post('/api/v1/users/signup', payload)
}
