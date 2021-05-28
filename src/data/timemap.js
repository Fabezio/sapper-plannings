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
          dayName: 1,

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
          dayName: 2,
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
          dayName: 3,
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
          dayName: 4,
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
          dayName: 5,
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
          dayName: 6,
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
          dayName: 7,
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
          dayName: 8,
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
          dayName: 9,
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
          dayName: 10,
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
          dayName: 11,
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
          dayName: 12,
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
          dayName: 13,
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
          dayName: 14,
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
          dayName: 15,
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
          dayName: 16,
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
          dayName: 17,
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
          dayName: 18,
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
          dayName: 19,
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
          dayName: 20,
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
          dayName: 21,
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
          dayName: 22,
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
          dayName: 23,
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
          dayName: 24,
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
              employee: employees.disci
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
          dayName: 25,
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
          dayName: 26,
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
          dayName: 27,
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
          dayName: 28,
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
          dayName: 29,
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
          dayName: 30,
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
          dayName: 31,
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
          dayName: 1,

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
          dayName: 2,
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
              employee: employees.koite
            }
          ]
        },
        {
          dayName: 3,
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
          dayName: 4,
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
          dayName: 5,
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
          dayName: 6,
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
          dayName: 7,
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
          dayName: 8,
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
          dayName: 9,
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
          dayName: 10,
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
          dayName: 11,
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
          dayName: 12,
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
          dayName: 13,
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
          dayName: 14,
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
          dayName: 15,
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
          dayName: 16,
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
          dayName: 17,
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
          dayName: 18,
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
          dayName: 19,
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
          dayName: 20,
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
          dayName: 21,
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
          dayName: 22,
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
          dayName: 23,
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
              employee: employees.jean
            }
          ]
        },
        {
          ferie: false,
          dayName: 24,
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
          dayName: 25,
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
          dayName: 26,
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
          dayName: 27,
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
          dayName: 28,
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
          dayName: 29,
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
              employee: employees.koite
            }
          ]
        },
        {
          dayName: 30,
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
