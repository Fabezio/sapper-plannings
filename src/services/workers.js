import plannings from '../data/plannings'

const { mai } = plannings
const { ADS } = mai
const formatter = Intl.DateTimeFormat('fr', {
  weekday: 'short'
  /* day: "numeric",
        month: "short",
        year: "numeric", */
})
ADS.map(el => {
  const thisDay = new Date().setFullYear(2021, 5, el.jour)
  let weekDay = formatter.format(thisDay)
  // weekDay.length = 3;
  // weekDay.length = 3;
  el.weekday = weekDay
  // el.weekday = weekDay.slice(0, 3)
  console.log(el.weekday)
  return el
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
