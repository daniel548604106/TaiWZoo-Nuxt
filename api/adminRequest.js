import axios from '@/plugins/axios'

export const getAllUsers = async() =>{
  return await axios.get('/api/v1/admin/users')
}