import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function ProductCard({product}){
const nav = useNavigate();
return (
<div className='card p-4'>
<img src={product.images?.[0]} alt={product.name} className='h-40 w-full object-cover' />
<h3>{product.name}</h3>
<p>₹{product.price}</p>
<button onClick={()=> nav(`/product/${product._id}`)}>View</button>
</div>
)
}