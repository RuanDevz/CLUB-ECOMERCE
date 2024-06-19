const express  = require('express')
const router = express.Router()
const {User} = require('../models')
const bcrypt = require('bcrypt')



router.get('/', async (req,res) =>{
    const getallusers = await User.findAll()
    res.status(200).json(getallusers)
})
router.post('/register', async (req,res) =>{
    const {password,email, ...users} = req.body

    const hashpassword = await bcrypt.hash(password, 10)

    const existingemail = await User.findOne({where: {email}})

    if(existingemail){
        return res.status(409).json({error: 'Email já cadastrado!'})
    }

    const createnewuser = await User.create({
        ...users,
        email,
        password: hashpassword
    })

    res.status(201).json(createnewuser)
})




module.exports = router