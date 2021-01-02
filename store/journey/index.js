import { apiGetAllMyJourneys ,apiGetJourneyData, apiPostJourneyData, apiPostNote } from '@/api'
import Cookie from 'js-cookie'
export const state = () =>{
  return{
    isCreateJourneyShow: false,
    journeyStep: 'destination',
    attractionSearchInput: '',
    journeyInfo:{},
    allJourneys: [],
    showCalculator: false
  }
}



export const mutations = {
  toggleCreateJourney(state){
    console.log('toggle')
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
  },
  setAllJourneys(state,payload){
    state.allJourneys = payload
  },
  toggleCalculator(state){
    state.showCalculator = !state.showCalculator
  },
  postNote(){
    console.log('hi')
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
  },
  async getAllJourneys({commit}){
    const { data} = await apiGetAllMyJourneys()
    console.log(data)
    commit('setAllJourneys',data.journeys)
  },
  async getJourneyData(id){
    const { data } = await apiGetJourneyData(id)
    console.log(data)
  },
  async postNote({commit},payload){
    const { id ,data} = payload
    await apiPostNote(id,data)
    commit('postNote')
   console.log('posted note')
  },
  toggleCalculator({commit}){
    commit('toggleCalculator')
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
  },
  allJourneys(state){
    return state.allJourneys
  },
  showCalculator(state){
    return state.showCalculator
  }
}