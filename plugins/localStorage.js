export default({app},inject) =>{
  inject('localStorage',{
    set(key = '', value = {}){
      localStorage.setItem(key, JSON.stringify(value))
    },
    get(key = ''){
      const obj = JSON.parse(localStorage.getItem(key))
      if(!obj) return {}
      return obj
    },
    remove(key = ''){
      localStorage.removeItem(key)
    },
    removeAll(){
      localStorage.clear()
    }
  })
}