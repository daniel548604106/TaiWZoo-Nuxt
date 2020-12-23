import axios from '@/plugins/axios'

export const getMyData = async (payload) => {
  return await axios.post('/api/v1/users/signup', payload)
}
