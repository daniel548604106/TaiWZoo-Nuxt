const totalDay = (endDate,startDate) =>{
  return( new Date(endDate).getTime() - new Date(startDate).getTime()) / 3600*1000*24 +1
}


export { totalDay }