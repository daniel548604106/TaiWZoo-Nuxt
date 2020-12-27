import { getMyData,patchMyData } from './meRequest'
import {getTransportationData} from './transportRequest'
import { userSignup,userLogin } from './userRequest'
import { getAllUsers } from './adminRequest'

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