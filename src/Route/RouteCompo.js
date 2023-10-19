import React from 'react'
import Home from '../Component/Home'
import Bollywood from '../Component/Bollywood'
import Technology from '../Component/Technology'
import Food from '../Component/Food'
import Hollywood from '../Component/Hollywood'
import Fitness from '../Component/Fitness'
import { BrowserRouter,Link, Route, Routes } from "react-router-dom"
import StoreCompo from '../Store/StoreCompo'
import Footer from './Footer'
import ReadCompo from '../Component/ReadCompo'

export default function RouteCompo() {
  return (
    <div className='pages'>
      <h1 className='head'><p id='head'>The</p>  Siren</h1>
      <BrowserRouter>
        <Link to='/'>Home</Link>
        <Link to='/Bollywood'>Bollywood</Link>
        <Link to='/Technology'>Technology</Link>
        <Link to='/Food'>Food</Link>
        <Link to='Hollywood'>Hollywood</Link>
        <Link to='/Fitness'>Fitness</Link>
        <hr></hr>
        <StoreCompo>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Bollywood' element={<Bollywood />} />
            <Route path='/Technology' element={<Technology />} />
            <Route path='/Food' element={<Food />} />
            <Route path='/Hollywood' element={<Hollywood />} />
            <Route path='/Fitness' element={<Fitness />} />
            <Route path="/Blog/:id" element={<ReadCompo />} />
          </Routes>
        </StoreCompo>
        <Footer />
      </BrowserRouter>
    </div>
  )
}
