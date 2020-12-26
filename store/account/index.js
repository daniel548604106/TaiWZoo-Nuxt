import {apiGetMyData} from '@/api'
export const state = () =>({
  meData: {}
})

export const mutations ={
  setMeData(state,payload){
    state.meData = payload
  }
}



export const actions ={
  async getMeData({commit}){
    const {data} = await apiGetMyData()
    commit('setMeData',data.user)

  }

}

export const getters ={
  meData(state){
    return state.meData
  }
}