const express = require('express');
const mongoose = require('mongoose');
const productsRoute = require('./routes/products');
const cors = require('cors');


const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/products', productsRoute);


const MONGO = process.env.MONGO_URI || 'mongodb://localhost:27017/localstore';
mongoose.connect(MONGO).then(()=>{
console.log('Connected to MongoDB');
app.listen(4000, ()=> console.log('Server running on :4000'));
}).catch(err=> console.error(err));