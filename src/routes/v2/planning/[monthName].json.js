import planning from '../../../data/newPlanning3'

const lookup = new Map()
planning.months.forEach(month => {
  lookup.set(month.monthName, JSON.stringify(month))
  console.log(month)
})

export function get (req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { monthName } = req.params

  if (lookup.has(monthName)) {
    res.writeHead(200, {
      'Content-Type': 'application/json'
    })

    res.end(lookup.get(monthName))
  } else {
    res.writeHead(404, {
      'Content-Type': 'application/json'
    })

    res.end(
      JSON.stringify({
        message: 'Not found'
      })
    )
  }
}
