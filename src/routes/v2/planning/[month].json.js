// import planning from '../../../data/newPlanning2'

// const lookup = new Map()
// planning.mois.forEach(month => {
//   lookup.set(month.jours, JSON.stringify(jour))
// })

// export function get (req, res, next) {
//   // the `slug` parameter is available because
//   // this file is called [slug].json.js
//   const { jour } = req.params

//   if (lookup.has(jour)) {
//     res.writeHead(200, {
//       'Content-Type': 'application/json'
//     })

//     res.end(lookup.get(jour))
//   } else {
//     res.writeHead(404, {
//       'Content-Type': 'application/json'
//     })

//     res.end(JSON.stringify({
//       message: 'Not found'
//     }))
//   }
// }
