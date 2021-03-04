const superbowlWin = record => {
  const found = record.find(rec => rec.result === 'W')
  return found ? found.year : undefined; 
}