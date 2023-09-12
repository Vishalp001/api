const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000
const cors = require('cors')
const userRoute = require('./routes/users')
app.use(cors())
app.use(express.static(__dirname))
dotenv.config()
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,
  })
  .then(console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))


  app.use('/api/user', userRoute)


  app.get('/', (req, res) => {
   res.send('Hello to Garbha API')
 })
 
 app.listen(PORT, () => {
   console.log('Backend is running.')
 })

 app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})