import timemap from '../../data/timemap'

const lookup = new Map()
timemap.months.forEach(month => {
  lookup.set(month.monthName, JSON.stringify(month))
})

export function get (req, res, next) {
  // the `monthName` parameter is available because
  // this file is called [monthName].json.js
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
