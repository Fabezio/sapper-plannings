const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
})
module.exports = connection()
