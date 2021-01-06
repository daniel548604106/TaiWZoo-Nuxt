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

export const postNote = async(id, data, note) =>{
  return await axios.post(`/api/v1/journey/${id}/note`, {data, note})
}

export const postExpense = async(id) =>{
  return await axios.post(`/api/v1/journey/${id}/expense`)
}


export const patchExpense = async(id, expense_id) =>{
  return await axios.patch(`/api/v1/journey/${id}/expense`, expense_id)
}




