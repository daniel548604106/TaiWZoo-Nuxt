import {apiUserSignup , apiUserLogin} from '@/api'
import Cookie from 'js-cookie'
import { userSignup } from '~/api/userRequest'
export const state = () =>({
  authType: 'login',
  isAuthOpen: false,
  isUserLoggedIn: false,
  
})

export const mutations ={
  userLogin(state){
    console.log('hi')
  },
  setUserLogin(state){
    state.isUserLoggedIn = true
  },
  toggleAuthType(state, payload){
    state.authType = payload
  },
  toggleAuthOpen(state){
    state.isAuthOpen = !state.isAuthOpen
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
  async userSignup({commit},payload){
    const {name, email, password} = payload
    try{
      const newUser = await apiUserSignup({name, email, password})
      const {token, ...userInfo} =  newUser.data 
      Cookie.set('auth', token)
      Cookie.set('userInfo', JSON.stringify(userInfo))
      commit('toggleAuthOpen')
      commit('setUserLogin')
      console.log(newUser)
    }catch(error){
      console.log(error)
    }
  },
  toggleAuthType({commit},payload){
    commit('toggleAuthType',payload)
  },
  toggleAuthOpen({commit},payload){
    commit('toggleAuthOpen')
    if(payload){
     commit('toggleAuthType',payload)
    }
  }
}

export const getters ={
  authType(state){
    return state.authType
  },
  isAuthOpen(state){
    return state.isAuthOpen
  },
  isUserLoggedIn(state){
    return state.isUserLoggedIn
  }

}