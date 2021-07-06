import mongoose from 'mongoose'

const { model, Schema } = mongoose

const employSch = new Schema({
  lastname: String,
  firstname: String
})

const Employee = model('Employee', employSch)

export { employSch, Employee }
