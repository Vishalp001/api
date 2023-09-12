const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    desc: {
      type: String,
    },
    address: {
      type: String,
    },
    phNumber: {
      type: String,
    },
    email: {
      type: String,
    },
    std: {
      type: String,
    },
    gender: {
      type: String,
    },
    age: {
      type: String,
    },
    dob: {
      type: String,
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
