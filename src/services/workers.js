import plannings from '../data/plannings'

const { mai } = plannings
const { ADS } = mai

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
