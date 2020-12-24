import {apiUserSignup , apiUserLogin} from '@/api'
import Cookie from 'js-cookie'
export const state = () =>({
  isUserLoggedIn: false,
  authType: 'login',
  
})

export const mutations ={
  userLogin(state){
    console.log('hi')
  },
  toggleAuthType(state, payload){
    state.authType = payload
  }

}



export const actions ={
  async userLogin({commit},payload){
    try{
      const user = await apiUserLogin(payload)
      console.log(user)
    }catch(error){
      console.log(error)
    }
  },
  toggleAuthType({commit},payload){
    commit('toggleAuthType',payload)
  }
}

export const getters ={
  authType(state){
    return state.authType
  }
}