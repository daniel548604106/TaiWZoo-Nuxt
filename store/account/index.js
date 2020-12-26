import {apiGetMyData, apiPatchMyData} from '@/api'
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

  },
  async patchMeData({commit},payload){
    console.log('vuex',payload)
    const {data} = await apiPatchMyData(payload)
    console.log(data.user)
    commit('setMeData', data.user)
  }

}

export const getters ={
  meData(state){
    return state.meData
  }
}