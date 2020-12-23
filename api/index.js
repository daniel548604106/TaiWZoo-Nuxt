import { getMyData } from './meRequest'
import {getTransportData} from './transportRequest'
import { userSignup,userLogin } from './userRequest'


// meRequest
export const apiGetMyData = getMyData

// transportRequest
export const apiGetTransportData = getTransportData

// userRequest
export const apiUserSignup = userSignup
export const apiUserLogin = userLogin

