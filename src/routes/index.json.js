// const mongoose = require('mongoose')
import mongoose from 'mongoose'

const { model, Schema } = mongoose

const uri = 'mongodb://localhost/planning'
const dbname = 'planning'

mongoose
  .connect(uri, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(() => console.log(`${dbname} connected`))
//   .catch(err => console.error(err.stack))
const sch = new Schema({
  firstname: String,
  lastname: String
})
const Employee = model('Employee', sch)

export function get (_, res) {
  Employee.find({}, (err, found) => {
    if (err) {
      res.status(500).send(err.stack())
    } else {
      const employees = found
      console.log(employees)
      res.status(200).send(employees)
    }
  })
}

// const contents = employees.map(employee => {
//     return {
//         fname: employee.firstname,
//         lname: employee.lastname
//     }
// })
// console.log(contents)

// export function get (_, res) {

//     Employee.find({}).then(res => {
//         console.log(res.data)
//         // res.send
//     })
//     export default employees
//   res.writeHead(200, {
//     'Content-Type': 'application/json'
//   })

//   res.end(contents)
// }
