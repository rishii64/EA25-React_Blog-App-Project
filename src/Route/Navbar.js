import React from 'react'
import { NavLink } from 'react-router-dom'
// import Home from '../Component/Home'
// import Bollywood from '../Component/Bollywood'
// import Technology from '../Component/Technology'
// import Food from '../Component/Food'
// import Hollywood from '../Component/Hollywood'
// import Fitness from '../Component/Fitness'

export default function Navbar() {
    let handleNav = (()=>{
        // let nav_Btn = document.querySelector('#navBtn')
        let nav_Menu = document.querySelector('.nav')
        nav_Menu.classList.toggle('hide')
    })
    return (
        <>
        <button id='navBtn' onClick={handleNav}><i className="fa-solid fa-bars"></i></button>
        <div className='nav hide'>
            <h2 className='links'><NavLink to='/'>Home</NavLink></h2>
            <h2 className='links'><NavLink to='/Bollywood'>Bollywood</NavLink></h2>
            <h2 className='links'><NavLink to='/Technology'>Technology</NavLink></h2>
            <h2 className='links'><NavLink to='/Food'>Food</NavLink></h2>
            <h2 className='links'><NavLink to='Hollywood'>Hollywood</NavLink></h2>
            <h2 className='links'><NavLink to='/Fitness'>Fitness</NavLink></h2>
        </div>
        </>
    )
}
