export const state = () =>({
  mobileSideMenuShow: false
})

export const mutations ={
  toggleMobileSideMenu(state){
    console.log('changed')
    state.mobileSideMenuShow = !state.mobileSideMenuShow
    console.log(state.mobileSideMenuShow)
  }
}



export const actions ={
  toggleMobileSideMenu({commit}){
    commit('toggleMobileSideMenu')
  }
}

export const getters ={
  mobileSideMenuShow(state){
    return state.mobileSideMenuShow
  }
}