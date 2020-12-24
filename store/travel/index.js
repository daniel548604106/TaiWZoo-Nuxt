export const state = () =>{
  return{
    isCreateJourneyShow: false,
    journeyStep: 'destination'
  }
}



export const mutations = {
  toggleCreateJourney(state){
    state.isCreateJourneyShow = !state.isCreateJourneyShow
  },
  proceedTo(state,payload){
    state.journeyStep = payload
  }
}
export const actions = {
  toggleCreateJourney({commit}){
    commit('toggleCreateJourney')
    console.log('change')
  },
  proceedTo({commit},payload){
    commit('proceedTo',payload)
  }
}
export const getters = {
  isCreateJourneyShow(state){
    return state.isCreateJourneyShow
  },
  journeyStep(state){
    return state.journeyStep
  }
}