const qs = require('query-string')


const facebookAuth = async(req,res,next) => {
  try{
    const  {code, provider}  = req.body
    const config = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
    const params = qs.stringify({ client_id: process.env.FACEBOOK_AUTH_CLIENT_ID, redirect_uri : 'https://localhost:3000/', client_secret : process.env.FACEBOOK_AUTH_CLIENT_SECRET, code})
    const url = `https://graph.facebook.com/v9.0/oauth/access_token?client_id=${process.env.FACEBOOK_AUTH_CLIENT_ID}&redirect_uri=https://localhost:3000/&client_secret=${process.env.FACEBOOK_AUTH_CLIENT_SECRET}&code=${code}`
    const { data } = await axios.get(facebook_url)
    console.log(data)
  }catch(error){
    console.log(error)
  }
} 


const googleAuth = async(req,res,next) => {
  try{  
    console.log(req.body)
  }catch(error){
    console.log(error)
  }
}







module.exports = {facebookAuth , googleAuth}