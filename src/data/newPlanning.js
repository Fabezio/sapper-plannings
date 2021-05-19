import plannings from './plannings'

const { ADS } = plannings.mai
const newPlanning = {
  site: 'Arcs de Seine',
  mois: [
    { nom: 'janvier' },
    { nom: 'février' },
    { nom: 'mars' },
    { nom: 'avril' },
    { nom: 'mai', jours: [] },
    { nom: 'juin' },
    { nom: 'juillet' },
    { nom: 'aout' },
    { nom: 'septembre' },
    { nom: 'octobre' },
    { nom: 'novembre' },
    { nom: 'décembre' }
  ]
}
ADS.map(
  ({ jour, agentJour, agentNuit, chefJour, chefNuit, weekday }, index) => {
    const newDay = {
      jour,
      weekday,
      employees: [
        {
          period: '07h-19h',
          service: 'sécurité',
          employment: 'SSIAP 2',
          employee: chefJour
        },
        {
          period: '07h-19h',
          service: 'sécurité',
          employment: 'SSIAP 1',
          employee: agentJour
        },
        {
          period: '19h-07h',
          service: 'sécurité',
          employment: 'SSIAP 2',
          employee: chefNuit
        },
        {
          period: '19h-07h',
          service: 'sécurité',
          employment: 'SSIAP 1',
          employee: agentNuit
        }
      ]
    }
    newPlanning.mois[4].jours = [...newPlanning.mois[4].jours, newDay]
  }
)
// console.log(JSON.stringify(newPlanning))
// newPlanning.mois[4]
// newPlanning.mois[4].jours.map(jour => console.log(jour.jour))
// newPlanning = JSON.stringify(plannings)

// console.log(typeof newPlanning)
// console.log(newPlanning.mois[4])

export default newPlanning
