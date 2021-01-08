import axios from '@/plugins/axios'
export const postOAuthLogin = async(payload) => {
  return await axios.post(`api/v1/users/oauth/login`, payload)
}