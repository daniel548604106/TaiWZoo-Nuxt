import axios from '@/plugins/axios'

export const userSignup = async (payload) => {
  const {name,email,password} = payload
  return await axios.post('/api/v1/users/signup', {name,email,password})
}


export const userLogin = async (payload) =>{
  const { email,password} = payload
  console.log('payload', email,password)
  return await axios.post('/api/v1/users/login',{email,password})
}