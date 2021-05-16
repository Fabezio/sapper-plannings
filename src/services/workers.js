import plannings from '../data/plannings'

const { mai } = plannings
const { ADS } = mai
const formatter = Intl.DateTimeFormat('fr', {
  weekday: 'short',
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})
ADS.map(el => {
  const thisDay = new Date().setFullYear(2021, 4, el.jour)
  let date = formatter.format(thisDay)
  const ele = date.split(' ')
  const weekDay = ele[0]
  const mois = ele[2]
  // weekDay.length = 3;
  // weekDay.length = 3;
  // console.log(ele)
  // console.log(el.weekday)
  el.weekday = weekDay
  return el
  // el.weekday = weekDay.slice(0, 3)
  // return el
})

const namesList = []
function isInList (obj) {
  if (!namesList.includes(obj.nom.toUpperCase()))
    return namesList.push(obj.nom.toUpperCase())
}
ADS.map(({ agentJour, agentNuit, chefJour, chefNuit }) => {
  isInList(agentJour)
  isInList(agentNuit)
  isInList(chefJour)
  isInList(chefNuit)
})
namesList.sort()

export { mai, ADS, namesList }
