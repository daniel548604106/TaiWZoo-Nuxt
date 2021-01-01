import { apiGetJourneyData, apiPostJourneyData } from '@/api'
import Cookie from 'js-cookie'
export const state = () =>{
  return{
    isCreateJourneyShow: false,
    journeyStep: 'destination',
    attractionSearchInput: '',
    journeyInfo:{}
  }
}



export const mutations = {
  toggleCreateJourney(state){
    state.isCreateJourneyShow = !state.isCreateJourneyShow
  },
  proceedTo(state,payload){
    state.journeyStep = payload
  },
  addAttractionSearch(state,payload){
    state.attractionSearchInput = payload
    console.log('check')
  },
  setDate(state,payload){
    const {totalDays, startDate, endDate} = payload
    state.journeyInfo.totalDays = totalDays
    state.journeyInfo.startDate = startDate
    state.journeyInfo.endDate = endDate
    console.log('setDate')
  },
  setName(state,payload){
    state.journeyInfo.name = payload
  },
  clearData(state){
    state.journeyInfo = {}
  }
}
export const actions = {
  toggleCreateJourney({commit}){
    commit('toggleCreateJourney')
    console.log('change')
  },
  proceedTo({commit},payload){
    commit('proceedTo',payload)
  },
  addAttractionSearch({commit},payload){
    commit('addAttractionSearch',payload)
  },
  setDate({commit},payload){
    commit('setDate',payload)
  },
  setName({commit},payload){
    commit('setName',payload)
  },
  async postJourneyData({commit,state}){
    const id = JSON.parse(Cookie.get('userInfo')).user._id
    console.log('id',id)
    state.journeyInfo.createdBy = id
    console.log(state.journeyInfo)
    const {data} = await apiPostJourneyData(state.journeyInfo)
    commit('clearData')
    commit('toggleCreateJourney')
  },
  async getJourneyData(id){
    const { data } = await apiGetJourneyData(id)
    console.log(data)
  }
}
export const getters = {
  isCreateJourneyShow(state){
    return state.isCreateJourneyShow
  },
  journeyStep(state){
    return state.journeyStep
  },
  attractionSearchInput(state){
    return state.attractionSearchInput
  },
  journeyInfo(state){
    return state.journeyInfo
  }
}