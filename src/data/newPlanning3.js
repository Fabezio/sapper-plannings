import workers from './workers'
import { litteralFormatter } from '../services/dateTimeFormatter'

const planning = {
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
              employee: workers.coulibaly
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kuhosa
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
              employee: workers.coulibaly
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kuhosa
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
              employee: workers.renaud
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kone
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.perm2
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.lukombo
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.perm2
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kone
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kuhosa
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
              employee: workers.kone
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.lukombo
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kuhosa
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
              employee: workers.renaud
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kone
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.jean
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.boussetta
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kuhosa
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
              employee: workers.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kuhosa
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
              employee: workers.renaud
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.renaud
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.coulibaly
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.coulibaly
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.khan
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.coulibaly
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.bonnet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.kalle
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.coulibaly
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.bonnet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.kalle
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.kalle
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.kalle
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.lhomme
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.kalle
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.vincent
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.kalle
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.boussetta
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.boussetta
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kone
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kone
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.boussetta
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.bocum
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.boussetta
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kuhosa
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
              employee: workers.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.boussetta
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kuhosa
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.disci
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kuhosa
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
              employee: workers.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kuhosa
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.tachfine
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.tachfine
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.renaud
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.ketir
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.renaud
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.bayou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kone
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.chaouti
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.kone
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.riquet
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.bayou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.frahi
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.koite
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
              employee: workers.bonnet
            },
            {
              period: '07h-19h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.bayou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 2',
              employee: workers.dossou
            },
            {
              period: '19h-07h',
              service: 'sécurité',
              employment: 'SSIAP 1',
              employee: workers.jean
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
planning.months.map(({ days, monthName }, index) => {
  if (!days) return null
  // console.log(typeof days)
  days.map((day, j) => {
    const thatDay = new Date().setFullYear(2021, index, j + 1)
    const date = litteralFormatter.format(thatDay)
    day.weekday = date.split(' ')[0]
    // console.log(day.weekday, j + 1, month)
    return day
  })
  return planning
})
// console.log(planning)

export default planning
