export const state = () =>({
  idx: 0
})

export const mutations ={
  addCount(state){
    state.idx += 1
  }
}



export const actions ={
  addCount({commit}){
    commit('addCount')
  }
}

export const getters ={

}