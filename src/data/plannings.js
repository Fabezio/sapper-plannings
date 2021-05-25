// import * from './users'
import { litteralFormatter } from '../services/dateTimeFormatter'
import workers from './workers.js'

const plannings = {
  mai: {
    month: 'mai',
    days: '31',
    ADS: [
      {
        jour: 1,
        ferie: true,
        chefJour: workers.coulibaly,
        chefNuit: workers.riquet,
        agentJour: workers.disci,
        agentNuit: workers.kuhosa
      },
      {
        jour: 2,
        chefJour: workers.coulibaly,
        chefNuit: workers.dossou,
        agentJour: workers.disci,
        agentNuit: workers.kuhosa
      },
      {
        jour: 3,
        chefJour: workers.renaud,
        chefNuit: workers.perm,
        agentJour: workers.kone,
        agentNuit: workers.jean
      },
      {
        jour: 4,
        chefJour: workers.lhomme,
        chefNuit: workers.perm,
        agentJour: workers.lukombo,
        agentNuit: workers.jean
      },
      {
        jour: 5,
        chefJour: workers.lhomme,
        chefNuit: workers.riquet,
        agentJour: workers.kone,
        agentNuit: workers.kuhosa
      },
      {
        jour: 6,
        chefJour: workers.kone,
        chefNuit: workers.riquet,
        agentJour: workers.lukombo,
        agentNuit: workers.kuhosa
      },
      {
        jour: 7,
        chefJour: workers.renaud,
        chefNuit: workers.bocum,
        agentJour: workers.kone,
        agentNuit: workers.koite
      },
      {
        jour: 8,
        ferie: true,
        chefJour: workers.bonnet,
        chefNuit: workers.jean,
        agentJour: workers.ketir,
        agentNuit: workers.koite
      },
      {
        jour: 9,
        chefJour: workers.lhomme,
        chefNuit: workers.riquet,
        agentJour: workers.boussetta,
        agentNuit: workers.jean
      },
      {
        jour: 10,
        chefJour: workers.lhomme,
        chefNuit: workers.riquet,
        agentJour: workers.disci,
        agentNuit: workers.jean
      },
      {
        jour: 11,
        chefJour: workers.lhomme,
        chefNuit: workers.riquet,
        agentJour: workers.disci,
        agentNuit: workers.kuhosa
      },
      {
        jour: 12,
        chefJour: workers.lhomme,
        chefNuit: workers.bocum,
        agentJour: workers.frahi,
        agentNuit: workers.kuhosa
      },
      {
        jour: 13,
        ferie: true,
        chefJour: workers.renaud,
        chefNuit: workers.bocum,
        agentJour: workers.frahi,
        agentNuit: workers.jean
      },
      {
        jour: 14,
        chefJour: workers.renaud,
        chefNuit: workers.bocum,
        agentJour: workers.frahi,
        agentNuit: workers.jean
      },
      {
        jour: 15,
        chefJour: workers.chaouti,
        chefNuit: workers.riquet,
        agentJour: workers.disci,
        agentNuit: workers.koite
      },
      {
        jour: 16,
        chefJour: workers.chaouti,
        chefNuit: workers.riquet,
        agentJour: workers.disci,
        agentNuit: workers.koite
      },
      {
        jour: 17,
        chefJour: workers.coulibaly,
        chefNuit: workers.bocum,
        agentJour: workers.ketir,
        agentNuit: workers.jean
      },
      {
        jour: 18,
        chefJour: workers.coulibaly,
        chefNuit: workers.bocum,
        agentJour: workers.ketir,
        agentNuit: workers.jean
      },
      {
        jour: 19,
        chefJour: workers.chaouti,
        chefNuit: workers.bocum,
        agentJour: workers.frahi,
        agentNuit: workers.khan
      },
      {
        jour: 20,
        chefJour: workers.chaouti,
        chefNuit: workers.riquet,
        agentJour: workers.frahi,
        agentNuit: workers.koite
      },
      {
        jour: 21,
        chefJour: workers.chaouti,
        chefNuit: workers.riquet,
        agentJour: workers.frahi,
        agentNuit: workers.koite
      },
      {
        jour: 22,
        chefJour: workers.coulibaly,
        chefNuit: workers.kalle,
        agentJour: workers.bonnet,
        agentNuit: workers.jean
      },
      {
        jour: 23,
        chefJour: workers.coulibaly,
        chefNuit: workers.kalle,
        agentJour: workers.bonnet,
        agentNuit: workers.jean
      },
      {
        jour: 24,
        ferie: true,
        chefJour: workers.chaouti,
        chefNuit: workers.kalle,
        agentJour: workers.disci,
        agentNuit: workers.koite
      },
      {
        jour: 25,
        chefJour: workers.chaouti,
        chefNuit: workers.riquet,
        agentJour: workers.disci,
        agentNuit: workers.koite
      },
      {
        jour: 26,
        chefJour: workers.lhomme,
        chefNuit: workers.riquet,
        agentJour: workers.disci,
        agentNuit: workers.jean
      },
      {
        jour: 27,
        chefJour: workers.lhomme,
        chefNuit: workers.kalle,
        agentJour: workers.ketir,
        agentNuit: workers.jean
      },
      {
        jour: 28,
        chefJour: workers.lhomme,
        chefNuit: workers.kalle,
        agentJour: workers.ketir,
        agentNuit: workers.jean
      },
      {
        jour: 29,
        chefJour: workers.chaouti,
        chefNuit: workers.riquet,
        agentJour: workers.frahi,
        agentNuit: workers.koite
      },
      {
        jour: 30,
        chefJour: workers.chaouti,
        chefNuit: workers.riquet,
        agentJour: workers.frahi,
        agentNuit: workers.koite
      },
      {
        jour: 31,
        chefJour: workers.vincent,
        chefNuit: workers.kalle,
        agentJour: workers.ketir,
        agentNuit: workers.jean
      }
    ]
  }
}

plannings.mai.ADS.map(el => {
  const thisDay = new Date().setFullYear(2021, 4, el.jour)
  const date = litteralFormatter.format(thisDay)
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
export default plannings
