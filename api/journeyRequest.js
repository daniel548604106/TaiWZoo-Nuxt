import axios from '@/plugins/axios'

export const postJourneyData = async(payload) => {
  return await axios.post('/api/v1/journey',payload)
}
export const getJourneyData = async(id) => {
  return await axios.get(`/api/v1/journey/${id}`)
}


export const getAllMyJourneys = async() => {
  return await axios.get(`/api/v1/journey/`)
}

export const postNote = async(id, payload) =>{
  return await axios.post(`/api/v1/journey/${id}/note`, payload)
}




