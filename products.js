const express = require('express');
const router = express.Router();
const Product = require('../models/Product');


// GET /api/products
router.get('/', async (req, res) => {
const { q, category, sort, min, max } = req.query;
const filter = {};
if (q) filter.name = { $regex: q, $options: 'i' };
if (category) filter.category = category;
if (min || max) filter.price = {};
if (min) filter.price.$gte = Number(min);
if (max) filter.price.$lte = Number(max);
let query = Product.find(filter);
if (sort === 'price_asc') query = query.sort({ price: 1 });
else if (sort === 'price_desc') query = query.sort({ price: -1 });


const products = await query.exec();
res.json(products);
});


// GET /api/products/:id
router.get('/:id', async (req, res) => {
const p = await Product.findById(req.params.id);
if (!p) return res.status(404).json({ message: 'Not found' });
res.json(p);
});


module.exports = router;