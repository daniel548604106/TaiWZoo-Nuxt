export const state = () =>({
  mobileSideMenuShow: false,
  pageShow: false,
  activePage: ''
})

export const mutations ={
  toggleMobileSideMenu(state){
    console.log('changed')
    state.mobileSideMenuShow = !state.mobileSideMenuShow
    console.log(state.mobileSideMenuShow)
  },
  togglePage(state){
    state.pageShow = !state.pageShow
    console.log('clicked from vuex')
  },
  switchActivePage(state,payload){
    state.activePage = payload
  }
}



export const actions ={
  toggleMobileSideMenu({commit}){
    commit('toggleMobileSideMenu')
  },
  togglePage({commit}){
    commit('togglePage')
  },
  switchActivePage({commit},payload){
    commit('switchActivePage',payload)
  } 
}

export const getters ={
  mobileSideMenuShow(state){
    return state.mobileSideMenuShow
  },
  pageShow(state){
    return state.pageShow
  },
  activePage(state){
    return state.activePage
  }
}