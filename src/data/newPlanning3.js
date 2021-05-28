import workers from './workers'
import { litteralFormatter } from '../services/dateTimeFormatter'

const planning = [{
  site: 'Arcs de Seine',
  mois: [
    {
      nom: 'janvier'
    },
    {
      nom: 'février'
    },
    {
      nom: 'mars'
    },
    {
      nom: 'avril'
    },
    {
      nom: 'mai',
      jours: [
        {
          jour: 1,

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
          jour: 2,
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
          jour: 3,
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
          jour: 4,
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
          jour: 5,
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
          jour: 6,
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
          jour: 7,
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
          jour: 8,
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
          jour: 9,
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
          jour: 10,
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
          jour: 11,
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
          jour: 12,
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
          jour: 13,
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
          jour: 14,
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
          jour: 15,
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
          jour: 16,
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
          jour: 17,
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
          jour: 18,
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
          jour: 19,
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
          jour: 20,
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
          jour: 21,
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
          jour: 22,
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
          jour: 23,
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
          jour: 24,
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
          jour: 25,
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
          jour: 26,
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
          jour: 27,
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
          jour: 28,
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
          jour: 29,
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
          jour: 30,
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
          jour: 31,
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
      nom: 'juin',
      jours: [
        {
          jour: 1,

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
          jour: 2,
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
          jour: 3,
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
          jour: 4,
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
          jour: 5,
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
          jour: 6,
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
          jour: 7,
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
          jour: 8,
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
          jour: 9,
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
          jour: 10,
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
          jour: 11,
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
          jour: 12,
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
          jour: 13,
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
          jour: 14,
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
          jour: 15,
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
          jour: 16,
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
          jour: 17,
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
          jour: 18,
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
          jour: 19,
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
          jour: 20,
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
          jour: 21,
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
          jour: 22,
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
          jour: 23,
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
          jour: 24,
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
          jour: 25,
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
          jour: 26,
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
          jour: 27,
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
          jour: 28,
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
          jour: 29,
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
          jour: 30,
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
      nom: 'juillet'
    },
    {
      nom: 'aout'
    },
    {
      nom: 'septembre'
    },
    {
      nom: 'octobre'
    },
    {
      nom: 'novembre'
    },
    {
      nom: 'décembre'
    }
  ]}
]
planning.mois.map(({ jours, nom }, index) => {
  if (!jours) return null
  // console.log(typeof jours)
  jours.map((jour, j) => {
    const thatDay = new Date().setFullYear(2021, index, j + 1)
    const date = litteralFormatter.format(thatDay)
    jour.weekday = date.split(' ')[0]
    // console.log(jour.weekday, j + 1, nom)
    return jour
  })
  return planning
})
// console.log(planning)

export default planning
