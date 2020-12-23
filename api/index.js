import { getMyData } from './meRequest'
import {getTransportData} from './transportRequest'
import { userSignup,userLogin } from './userRequest'
import { getAllUsers } from './adminRequest'

// meRequest
export const apiGetMyData = getMyData

// transportRequest
export const apiGetTransportData = getTransportData

// userRequest
export const apiUserSignup = userSignup
export const apiUserLogin = userLogin

// adminRequest
export const apiGetAllUsers = getAllUsers