import timemap from '../../data/timemap'

const contents = JSON.stringify(
  timemap.months.map(({ monthName, days }) => {
    return { monthName, days }
  })
)
// console.log(contents)

export function get (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  res.end(contents)
}
