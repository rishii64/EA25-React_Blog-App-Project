import React from 'react'
import Home from '../Component/Home'
import Bollywood from '../Component/Bollywood'
import Technology from '../Component/Technology'
import Food from '../Component/Food'
import Hollywood from '../Component/Hollywood'
import Fitness from '../Component/Fitness'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"


export default function RouteCompo() {
  return (
    <div>
      <h1 id='head'><p>The</p>  Siren</h1>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/Bollywood'>Bollywood</Link>
        <Link to='/Technology'>Technology</Link>
        <Link to='/Food'>Food</Link>
        <Link to='Hollywood'>Hollywood</Link>
        <Link to='/Fitness'>Fitness</Link>
        <hr></hr>
        
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Bollywood' element={<Bollywood />} />
            <Route path='/Technology' element={<Technology />} />
            <Route path='/Food' element={<Food />} />
            <Route path='/Hollywood' element={<Hollywood />} />
            <Route path='/Fitness' element={<Fitness />} />
          </Routes>
      
      </BrowserRouter>
    </div>
  )
}
