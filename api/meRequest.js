import axios from '@/plugins/axios'

export const getMyData = async() => {
  return await axios.get('/api/v1/users/profile')
}
export const patchMyData = async(payload) => {
  return await axios.patch('/api/v1/users/profile',payload)
}
