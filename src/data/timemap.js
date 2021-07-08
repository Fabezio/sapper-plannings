import employees from './employees'
import status from './status'
import periods from './periods'
import employments from './employments'
import { litteralFormatter } from '../services/dateTimeFormatter'

const { day, night } = periods
const { s2, s1 } = employments
const { granted, denied, progress, query, replace } = status

const timemap = {
  site: 'Arcs de Seine',
  months: [
    {
      monthName: 'janvier'
    },
    {
      monthName: 'février'
    },
    {
      monthName: 'mars'
    },
    {
      monthName: 'avril'
    },
    {
      monthName: 'mai',
      days: [
        {
          dayNb: 1,

          ferie: true,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.coulibaly
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.disci
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 2,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.coulibaly
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.disci
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 3,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.renaud
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.kone
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.perm2
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 4,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.lukombo
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.perm2
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 5,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.kone
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 6,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.kone
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.lukombo
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 7,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.renaud
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.kone
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 8,
          ferie: true,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.bonnet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.jean
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 9,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.boussetta
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 10,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.disci
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 11,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.disci
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 12,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 13,
          ferie: true,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.renaud
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 14,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.renaud
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 15,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.disci
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 16,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.disci
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 17,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.coulibaly
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 18,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.coulibaly
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 19,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.khan
            }
          ]
        },
        {
          dayNb: 20,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 21,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 22,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.coulibaly
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bonnet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.kalle
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 23,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.coulibaly
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bonnet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.kalle
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 24,
          ferie: true,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi,
              status: 'remplacement'
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.kalle
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 25,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employee: employees.frahi,
              status: 'remplacement'
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 26,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employee: employees.frahi,
              status: 'remplacement'
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 27,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.kalle
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 28,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.kalle
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 29,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 30,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 31,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.vincent
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.kalle
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        }
      ]
    },
    {
      monthName: 'juin',
      days: [
        {
          dayNb: 1,

          ferie: false,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 2,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean,
              status: granted
            }
          ]
        },
        {
          dayNb: 3,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.boussetta
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,

              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 4,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.boussetta
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 5,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.bonnet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              status: granted,
              // hasChanged: false,
              // toChange: true,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 6,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.bonnet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.kone
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 7,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.kone
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 8,
          ferie: false,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.boussetta
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 9,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.bonnet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 10,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.bonnet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 11,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.bonnet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 12,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.disci
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 13,
          ferie: false,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.disci
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou,
              status: granted
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 14,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.bonnet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.boussetta
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 15,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.bonnet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.boussetta
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 16,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.disci
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 17,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.disci
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 18,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.disci
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 19,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.bonnet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 20,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.bonnet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 21,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.tachfine
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 22,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.tachfine
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou,
              status: granted
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 23,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.bonnet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet,
              status: granted
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          ferie: false,
          dayNb: 24,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.renaud
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 25,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.renaud
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bayou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet,
              status: granted
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 26,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.kone
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou,
              status: granted
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 27,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.kone
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou,
              status: granted
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 28,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.bonnet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bayou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 29,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.bonnet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet,
              status: granted
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 30,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.bonnet
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bayou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet,
              status: granted
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        }
      ]
    },

    {
      monthName: 'juillet',
      days: [
        {
          dayNb: 1,

          ferie: false,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.kone
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 2,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.kone
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 3,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.verdon
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.larbi
            }
          ]
        },
        {
          dayNb: 4,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.verdon
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.larbi
            }
          ]
        },
        {
          dayNb: 5,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.coulibaly
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.assemien,
              status: replace
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 6,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.coulibaly
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.assemien,
              status: replace
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 7,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti,
              status: granted
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.verdon
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.larbi
            }
          ]
        },
        {
          dayNb: 8,
          ferie: false,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.coulibaly
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.verdon
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.larbi
            }
          ]
        },
        {
          dayNb: 9,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.coulibaly,
              status: granted
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.verdon
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.larbi
            }
          ]
        },
        {
          dayNb: 10,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.renaud
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.assemien,
              status: replace
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 11,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.renaud
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.assemien,
              status: replace
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 12,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.larbi
            }
          ]
        },
        {
          dayNb: 13,
          ferie: false,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.larbi
            }
          ]
        },
        {
          dayNb: 14,
          ferie: true,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bonnet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 15,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bayou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 16,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bayou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.larbi
            }
          ]
        },
        {
          dayNb: 17,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.larbi
            }
          ]
        },
        {
          dayNb: 18,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.frahi
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.dossou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 19,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 20,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum,
              status: query
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 21,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bayou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.unknown
            }
          ]
        },
        {
          dayNb: 22,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bayou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.unknown
            }
          ]
        },
        {
          dayNb: 23,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bayou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet,
              status: query
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.unknown
            }
          ]
        },
        {
          ferie: false,
          dayNb: 24,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 25,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 26,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bayou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.soumare
            }
          ]
        },
        {
          dayNb: 27,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bayou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.soumare
            }
          ]
        },
        {
          dayNb: 28,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bayou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 29,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.lhomme
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.riquet
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 30,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.ketir
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.unknown
            }
          ]
        },
        {
          dayNb: 31,
          employees: [
            {
              period: day,
              service: 'sécurité',
              employment: s2,
              employee: employees.chaouti
            },
            {
              period: day,
              service: 'sécurité',
              employment: s1,
              employee: employees.bayou
            },
            {
              period: night,
              service: 'sécurité',
              employment: s2,
              employee: employees.bocum
            },
            {
              period: night,
              service: 'sécurité',
              employment: s1,
              employee: employees.unknown
            }
          ]
        }
      ]
    },
    {
      monthName: 'aout'
    },
    {
      monthName: 'septembre'
    },
    {
      monthName: 'octobre'
    },
    {
      monthName: 'novembre'
    },
    {
      monthName: 'décembre'
    }
  ]
}
timemap.months.map(({ days, monthName }, index) => {
  if (!days) return null
  // console.log(typeof days)
  days.map((day, j) => {
    const thatDay = new Date().setFullYear(2021, index, j + 1)
    const date = litteralFormatter.format(thatDay)
    day.weekday = date.split(' ')[0]
    // console.log(day.weekday, j + 1, month)
    return day
  })
  return timemap
})
// console.log(timemap)

export default timemap
