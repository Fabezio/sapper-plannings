import employees from './employees'
import { litteralFormatter } from '../services/dateTimeFormatter'

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
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.coulibaly
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 2,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.coulibaly
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 3,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.renaud
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kone
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.perm2
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 4,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.lukombo
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.perm2
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 5,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kone
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 6,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.kone
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.lukombo
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 7,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.renaud
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kone
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 8,
          ferie: true,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.jean
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 9,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.boussetta
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 10,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 11,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 12,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 13,
          ferie: true,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.renaud
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 14,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.renaud
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 15,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 16,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 17,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.coulibaly
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 18,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.coulibaly
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 19,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.khan
            }
          ]
        },
        {
          dayNb: 20,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 21,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 22,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.coulibaly
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.bonnet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.kalle
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 23,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.coulibaly
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.bonnet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.kalle
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 24,
          ferie: true,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi,
              status: 'remplacement'
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.kalle
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 25,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employee: employees.frahi,
              status: 'remplacement'
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 26,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employee: employees.frahi,
              status: 'remplacement'
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 27,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.kalle
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 28,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.kalle
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 29,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 30,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 31,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.vincent
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.kalle
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
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
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 2,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean,
              status: 'permutation accordée',
            }
          ]
        },
        {
          dayNb: 3,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.boussetta
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              

              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 4,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.boussetta
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 5,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              status: 'permutation accordée',
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
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kone
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 7,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kone
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 8,
          ferie: false,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.boussetta
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 9,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 10,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 11,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 12,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 13,
          ferie: false,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.dossou,
              status: 'permutation accordée'
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 14,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.boussetta
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 15,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.boussetta
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 16,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 17,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 18,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 19,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 20,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kuhosa
            }
          ]
        },
        {
          dayNb: 21,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.tachfine
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 22,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.tachfine
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.dossou,
              status: 'permutation accordée'
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 23,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
                employee: employees.riquet,
                status: 'permutation accordée'
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          ferie: false,
          dayNb: 24,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.renaud
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 25,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.renaud
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.bayou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet,
              status: 'permutation accordée'
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        },
        {
          dayNb: 26,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kone
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.dossou,
              status: 'permutation accordée'
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 27,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.kone
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.dossou,
              status: 'permutation accordée'
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 28,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.bayou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 29,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet,
              status: 'permutation accordée'
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.koite
            }
          ]
        },
        {
          dayNb: 30,
          employees: [
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.bayou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: employees.riquet,
              status: 'permutation accordée'
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: employees.jean
            }
          ]
        }
      ]
    },

    {
      monthName: 'juillet'
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
