import { getMyData,patchMyData } from './meRequest'
import {getTransportationData} from './transportRequest'
import { userSignup,userLogin } from './userRequest'
import { getAllUsers } from './adminRequest'
import {getJourneyData, postJourneyData, getAllMyJourneys ,postNote , postExpense , patchExpense}  from './journeyRequest'
// meRequest
export const apiGetMyData = getMyData
export const apiPatchMyData = patchMyData
// transportRequest
export const apiGetTransportationData = getTransportationData

// userRequest
export const apiUserSignup = userSignup
export const apiUserLogin = userLogin

// adminRequest
export const apiGetAllUsers = getAllUsers


// journeyRequest

export const apiPostJourneyData = postJourneyData
export const apiGetJourneyData = getJourneyData
export const apiGetAllMyJourneys = getAllMyJourneys
export const apiPostNote = postNote
export const apiPostExpense = postExpense
export const apiPatchExpense = patchExpense