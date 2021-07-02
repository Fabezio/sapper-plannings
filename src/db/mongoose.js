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
  .catch(err => console.error(err.stack))
const sch = new Schema({
  firstname: String,
  lastname: String
})
const Employee = model('Employee', sch)

const employees = Employee.find({})
export default employees
