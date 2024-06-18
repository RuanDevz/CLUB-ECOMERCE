const express = require('express')
const {Categories} = require('../models')

const router = express.Router()



router.get('/', async (req,res) =>{
    const getallcategories = await Categories.findAll()
    res.json(getallcategories)
})

router.post('/', async (req, res) =>{
    const mycategories = req.body
    const createcategories = await Categories.create(mycategories)
    res.status(201).json(createcategories)
})





module.exports = router