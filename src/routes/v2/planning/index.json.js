import planning from '../../../data/newPlanning3'

const contents = JSON.stringify(
  planning.months.map(({ monthName, days }) => {
    return { monthName, days }
  })
)
console.log(contents)

export function get (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  res.end(contents)
}
