export const state = () =>{
  return{
    isCreateJourneyShow: false,
    journeyStep: 'destination',
    attractionSearchInput: ''
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
  }
}