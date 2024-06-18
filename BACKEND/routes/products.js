const express = require('express');
const { Product } = require('../models');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const getAllProducts = await Product.findAll();
        res.json(getAllProducts);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
});

router.get('/jackets', async (req, res) => {
    try {
        const jackets = await Product.findAll({ where: { category: 'jackets' } });
        res.status(200).json(jackets);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching jackets' });
    }
});

router.post('/jackets', async (req, res) => {
    try {
        const myJacket = { ...req.body, category: 'jackets' };
        const createJacket = await Product.create(myJacket);
        res.status(201).json(createJacket);
    } catch (error) {
        res.status(500).json({ error: 'Error creating jacket' });
    }
});


router.get('/sneakers', async (req, res) => {
    try {
        const sneakers = await Product.findAll({ where: { category: 'sneakers' } });
        res.status(200).json(sneakers);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching sneakers' });
    }
});

// Create a new pair of sneakers
router.post('/sneakers', async (req, res) => {
    try {
        const mySneakers = { ...req.body, category: 'sneakers' };
        const createSneakers = await Product.create(mySneakers);
        res.status(201).json(createSneakers);
    } catch (error) {
        res.status(500).json({ error: 'Error creating sneakers' });
    }
});

// Get all male products
router.get('/male', async (req, res) => {
    try {
        const maleProducts = await Product.findAll({ where: { category: 'male' } });
        res.status(200).json(maleProducts);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching male products' });
    }
});


router.post('/male', async (req, res) => {
    try {
        const newMaleProduct = { ...req.body, category: 'male' };
        const createdMaleProduct = await Product.create(newMaleProduct);
        res.status(201).json(createdMaleProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error creating male product' });
    }
});

router.get('/female', async (req, res) => {
    try {
        const femaleProducts = await Product.findAll({ where: { category: 'female' } });
        res.status(200).json(femaleProducts);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching female products' });
    }
});


router.post('/female', async (req, res) => {
    try {
        const newFemaleProduct = { ...req.body, category: 'female' };
        const createdFemaleProduct = await Product.create(newFemaleProduct);
        res.status(201).json(createdFemaleProduct);
    } catch (error) {
        res.status(500).json({ error: 'Error creating female product' });
    }
});


router.get('/hats', async (req, res) => {
    try {
        const hats = await Product.findAll({ where: { category: 'hats' } });
        res.status(200).json(hats);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching hats' });
    }
});


router.post('/hats', async (req, res) => {
    try {
        const newHat = { ...req.body, category: 'hats' };
        const createdHat = await Product.create(newHat);
        res.status(201).json(createdHat);
    } catch (error) {
        res.status(500).json({ error: 'Error creating hat' });
    }
});


module.exports = router;
