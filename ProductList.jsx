import React, {useEffect, useState} from 'react';
import ProductCard from './ProductCard';


export default function ProductList(){
const [products, setProducts] = useState([]);
useEffect(()=>{
fetch('/api/products')
.then(r=>r.json())
.then(setProducts);
},[]);
return (
<div className='grid grid-cols-3 gap-4'>
{products.map(p=> <ProductCard key={p._id} product={p} />)}
</div>
)
}