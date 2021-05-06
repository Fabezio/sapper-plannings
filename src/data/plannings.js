// import * from './users'

const chaouti = { nom: 'Chaouti', prenom: 'Brahim' }
const coulibaly = { nom: 'Coulibaly', prenom: 'Oumar' }
const dossou = { nom: 'Dossou', prenom: 'Victorin' }
const kalle = { nom: 'Kalle', prenom: 'Oumar' }
const lhomme = { nom: 'Lhomme', prenom: 'Pascal' }
const renaud = { nom: 'Renaud', prenom: 'Cyril' }
const riquet = { nom: 'Riquet', prenom: 'Fabrice' }
const bonnet = { nom: 'Bonnet', prenom: 'Sébastien' }
const disci = { nom: 'Disci', prenom: 'Alex' }
const frahi = { nom: 'Frahi', prenom: 'Djamal' }
const jean = { nom: 'Jean', prenom: 'Willy' }
const ketir = { nom: 'Ketir', prenom: 'Djamel' }
const khan = { nom: 'Khan', prenom: 'Usman' }
const koite = { nom: 'Koite', prenom: 'Cheikh Makhfou' }
const kone = { nom: 'Kone', prenom: 'Oumar' }
const kuhosa = { nom: 'Kuhosa Gigi', prenom: 'Germain' }
const vincent = { nom: 'Vincent', prenom: 'Olivier' }
const bocum = { nom: 'Bocum', prenom: 'Hamidou' }
const perm = { nom: 'permanence', prenom: '' }
const lukombo = { nom: 'Lukombo', prenom: 'Miguel' }
const boussetta = { nom: 'Boussetta', prenom: 'Sami' }

const plannings = {
  mai: {
    days: '31',
    ADS: [
      {
        jour: 1,
        chefJour: coulibaly,
        chefNuit: riquet,
        agentJour: disci,
        agentNuit: kuhosa
      },
      {
        jour: 2,
        chefJour: coulibaly,
        chefNuit: dossou,
        agentJour: disci,
        agentNuit: kuhosa
      },
      {
        jour: 3,
        chefJour: renaud,
        chefNuit: perm,
        agentJour: kone,
        agentNuit: jean
      },
      {
        jour: 4,
        chefJour: lhomme,
        chefNuit: perm,
        agentJour: lukombo,
        agentNuit: jean
      },
      {
        jour: 5,
        chefJour: lhomme,
        chefNuit: riquet,
        agentJour: kone,
        agentNuit: kuhosa
      },
      {
        jour: 6,
        chefJour: kone,
        chefNuit: riquet,
        agentJour: lukombo,
        agentNuit: kuhosa
      },
      {
        jour: 7,
        chefJour: renaud,
        chefNuit: bocum,
        agentJour: kone,
        agentNuit: koite
      },
      {
        jour: 8,
        chefJour: bonnet,
        chefNuit: jean,
        agentJour: ketir,
        agentNuit: koite
      },
      {
        jour: 9,
        chefJour: lhomme,
        chefNuit: riquet,
        agentJour: boussetta,
        agentNuit: jean
      },
      {
        jour: 10,
        chefJour: lhomme,
        chefNuit: riquet,
        agentJour: disci,
        agentNuit: jean
      },
      {
        jour: 11,
        chefJour: lhomme,
        chefNuit: riquet,
        agentJour: disci,
        agentNuit: kuhosa
      },
      {
        jour: 12,
        chefJour: lhomme,
        chefNuit: bocum,
        agentJour: frahi,
        agentNuit: kuhosa
      },
      {
        jour: 13,
        chefJour: renaud,
        chefNuit: bocum,
        agentJour: frahi,
        agentNuit: jean
      },
      {
        jour: 14,
        chefJour: renaud,
        chefNuit: bocum,
        agentJour: frahi,
        agentNuit: jean
      },
      {
        jour: 15,
        chefJour: chaouti,
        chefNuit: riquet,
        agentJour: disci,
        agentNuit: koite
      },
      {
        jour: 16,
        chefJour: chaouti,
        chefNuit: riquet,
        agentJour: disci,
        agentNuit: koite
      },
      {
        jour: 17,
        chefJour: coulibaly,
        chefNuit: bocum,
        agentJour: ketir,
        agentNuit: jean
      },
      {
        jour: 18,
        chefJour: coulibaly,
        chefNuit: bocum,
        agentJour: ketir,
        agentNuit: jean
      },
      {
        jour: 19,
        chefJour: chaouti,
        chefNuit: bocum,
        agentJour: frahi,
        agentNuit: khan
      },
      {
        jour: 20,
        chefJour: chaouti,
        chefNuit: riquet,
        agentJour: frahi,
        agentNuit: koite
      },
      {
        jour: 21,
        chefJour: chaouti,
        chefNuit: riquet,
        agentJour: frahi,
        agentNuit: koite
      },
      {
        jour: 22,
        chefJour: coulibaly,
        chefNuit: kalle,
        agentJour: bonnet,
        agentNuit: jean
      },
      {
        jour: 23,
        chefJour: coulibaly,
        chefNuit: kalle,
        agentJour: bonnet,
        agentNuit: jean
      },
      {
        jour: 24,
        chefJour: chaouti,
        chefNuit: kalle,
        agentJour: disci,
        agentNuit: koite
      },
      {
        jour: 25,
        chefJour: chaouti,
        chefNuit: riquet,
        agentJour: disci,
        agentNuit: koite
      },
      {
        jour: 26,
        chefJour: lhomme,
        chefNuit: riquet,
        agentJour: disci,
        agentNuit: jean
      },
      {
        jour: 27,
        chefJour: lhomme,
        chefNuit: kalle,
        agentJour: ketir,
        agentNuit: jean
      },
      {
        jour: 28,
        chefJour: lhomme,
        chefNuit: kalle,
        agentJour: ketir,
        agentNuit: jean
      },
      {
        jour: 29,
        chefJour: chaouti,
        chefNuit: riquet,
        agentJour: frahi,
        agentNuit: koite
      },
      {
        jour: 30,
        chefJour: chaouti,
        chefNuit: riquet,
        agentJour: frahi,
        agentNuit: koite
      },
      {
        jour: 31,
        chefJour: vincent,
        chefNuit: kalle,
        agentJour: ketir,
        agentNuit: jean
      }
    ]
  }
}

export default plannings
