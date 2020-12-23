export const state = () =>({
  idx: 0,
  name: 'Daniel'
})

export const mutations ={
  addCount(state){
    state.idx += 1
  }
}



export const actions ={
  addCount({commit}){
    commit('addCount')
    console.log('added')
  }
}

export const getters ={

}