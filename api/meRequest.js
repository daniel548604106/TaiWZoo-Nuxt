import axios from '@/plugins/axios'

export const getMyData = async() => {
  return await axios.get('/api/v1/users/profile')
}
