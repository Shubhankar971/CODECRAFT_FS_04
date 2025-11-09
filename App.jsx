import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './components/Cart';


export default function App(){
return (
<BrowserRouter>
<Routes>
<Route path='/' element={<Home/>} />
<Route path='/shop' element={<Shop/>} />
<Route path='/cart' element={<Cart/>} />
</Routes>
</BrowserRouter>
)
}