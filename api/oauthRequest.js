import axios from '@/plugins/axios'
export const postOAuthLogin = async(provider) => {
  return await axios.post(`api/v1/users/oauth/login`, {provider})
}