import {apiUserSignup , apiUserLogin, apiPostOAuthLogin} from '@/api'

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
      const {token, ...userInfo} = user.data
      console.log('token',token)
      console.log(user)
      Cookie.set('auth', token)
      console.log('auth',Cookie.get('auth'))
      Cookie.set('userInfo', JSON.stringify(userInfo))
      commit('toggleAuthOpen')
      commit('setUserLogin')
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
  async oAuthLogin({commit},payload){
    const {data} = await apiPostOAuthLogin(payload)
    console.log(data)
    let provider = Cookie.get('OAuthProvider')
    console.log(data.user[provider].token)
    Cookie.set('auth', data.user[provider].token)
    console.log('auth', Cookie.get('auth'))
    Cookie.set('userInfo', JSON.stringify(data.account))
    console.log('oauth',data)
    commit('setUserLogin')

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