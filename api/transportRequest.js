import axios from 'axios'
import jsSHA from "jssha";

const getAuthorizationHeader = function() {
	const AppID = process.env.TRANSPORTATION_ID
	const AppKey = process.env.TRANSPORTATION_KEY

	const GMTString = new Date().toGMTString();
	let ShaObj = new jsSHA('SHA-1', 'TEXT');
	ShaObj.setHMACKey(AppKey, 'TEXT');
	ShaObj.update('x-date: ' + GMTString);
	var HMAC = ShaObj.getHMAC('B64');
	var Authorization = 'hmac username=\"' + AppID + '\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"' + HMAC + '\"';

	return { 'Authorization': Authorization, 'X-Date': GMTString};
}

const request = axios.create({
  baseURL: 'https://ptx.transportdata.tw/MOTC',
  headers: getAuthorizationHeader()
})

export const getTransportData = (city) =>{
  return request.get(`/v2/Bus/RealTimeByFrequency/Streaming/City/${city}`)
}