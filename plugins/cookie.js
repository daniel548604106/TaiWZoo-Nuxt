
import Cookie from 'js-cookie'
export default({app},inject) =>{
  inject('cookies',{
    set: (name, value = {},expires = {expires: 365})=>{
      Cookie.set(name,value,expires)
    },
    get: (name =>{
      const val = Cookie.get(name)
      try{
        return JSON.parse(val)
      }catch(err){
        return undefined
      }
    }),
    remove:name =>{
      Cookie.remove(name)
    },
    removeAll:() =>{
      const nodeList = Obj.keys(Cookie.get())
      nodeList.forEach(el => Cookie.remove(el))
      window.location.replace('/')
    }
  })
}