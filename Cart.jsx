import React, { useState, useEffect } from 'react';


export default function Cart(){
const [items, setItems] = useState([]);
useEffect(()=>{
const s = localStorage.getItem('cart');
setItems(s ? JSON.parse(s) : []);
},[]);
const remove = (id) => {
const next = items.filter(i=> i.productId !== id);
setItems(next);
localStorage.setItem('cart', JSON.stringify(next));
}
const total = items.reduce((s,i)=> s + i.price * i.qty, 0);
return (
<div>
<h2>Your Cart</h2>
{items.map(it=> (
<div key={it.productId}>
<span>{it.name} x {it.qty}</span>
<button onClick={()=>remove(it.productId)}>Remove</button>
</div>
))}
<div>Total: ₹{total}</div>
<button>Checkout</button>
</div>
)
}