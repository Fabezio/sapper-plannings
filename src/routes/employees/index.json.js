import connectDB from '@lib/mongoose'
import { employSch, Employee } from './employees'
connectDB()
const contents = Employee.find({}, (err, data) => {
  if (err) return err
  return data
})

export function get (req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  })

  res.end(contents)
}
