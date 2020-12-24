export const state = () =>{
  return{
    isCreateJourneyShow: false
  }
}



export const mutations = {
  toggleCreateJourney(state){
    state.isCreateJourneyShow = !state.isCreateJourneyShow
  }
}
export const actions = {
  toggleCreateJourney({commit}){
    commit('toggleCreateJourney')
  }
}
export const getters = {
  isCreateJourneyShow(state){
    return state.isCreateJourneyShow
  }
}