const router = require('express').Router()
const User = require('../models/User')

router.post('/', async (req, res) => {
 const newUser = new User(req.body)
 try {
   const savedUser = await newUser.save()
   res.status(200).json(savedUser)
 } catch (err) {
   res.status(500).json(err)
 }
})

//DELETE User
router.delete('/:id', async (req, res) => {
 try {
   const user = await User.findById(req.params.id)
     try {
       await user.delete()
       res.status(200).json('User has been deleted...')
     } catch (err) {
       res.status(500).json(err)
     }
 } catch (err) {
   res.status(500).json(err)
 }
})

//GET Single Users
router.get('/:id', async (req, res) => {
  try {
      blogs = await User.findById(req.params.id)
    res.status(200).json(blogs)
  } catch (err) {
    res.status(500).json(err)
  }
 })

//GET ALL Users
router.get('/', async (req, res) => {
 try {
     blogs = await User.find().sort({ _id: -1 })
   res.status(200).json(blogs)
 } catch (err) {
   res.status(500).json(err)
 }
})

module.exports = router