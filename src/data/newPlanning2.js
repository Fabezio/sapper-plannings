import workers from './workers'

const planning = {
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
          weekday: 'sam.',
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
          weekday: 'dim.',
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
          weekday: 'lun.',
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
          weekday: 'mar.',
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
          weekday: 'mer.',
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
          weekday: 'jeu.',
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
          weekday: 'ven.',
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
          weekday: 'sam.',
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
          weekday: 'dim.',
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
          weekday: 'lun.',
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
          weekday: 'mar.',
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
          weekday: 'mer.',
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
          weekday: 'jeu.',
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
          weekday: 'ven.',
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
          weekday: 'sam.',
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
          weekday: 'dim.',
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
          weekday: 'lun.',
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
          weekday: 'mar.',
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
          weekday: 'mer.',
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
          weekday: 'jeu.',
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
          weekday: 'ven.',
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
          weekday: 'sam.',
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
          weekday: 'dim.',
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
          weekday: 'lun.',
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
          weekday: 'mar.',
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
          weekday: 'mer.',
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
          weekday: 'jeu.',
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
          weekday: 'ven.',
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
          weekday: 'sam.',
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
          weekday: 'dim.',
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
          weekday: 'lun.',
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
          weekday: 'sam.',
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
          weekday: 'dim.',
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
          weekday: 'lun.',
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
          weekday: 'mar.',
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
          weekday: 'mer.',
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
          weekday: 'jeu.',
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
          weekday: 'ven.',
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
          weekday: 'sam.',
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
          weekday: 'dim.',
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
          weekday: 'lun.',
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
          weekday: 'mar.',
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
          weekday: 'mer.',
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
          weekday: 'jeu.',
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
          weekday: 'ven.',
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
          weekday: 'sam.',
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
          weekday: 'dim.',
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
          weekday: 'lun.',
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
          weekday: 'mar.',
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
          weekday: 'mer.',
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
          weekday: 'jeu.',
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
          weekday: 'ven.',
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
          weekday: 'sam.',
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
          weekday: 'dim.',
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
          weekday: 'lun.',
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
          weekday: 'mar.',
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
          weekday: 'mer.',
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
          weekday: 'jeu.',
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
          weekday: 'ven.',
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
          weekday: 'sam.',
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
          weekday: 'dim.',
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
  ]
}
export default planning
