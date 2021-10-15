import React from 'react'
import {NavbarWrapper} from "../navbar/styles"
import {Link} from 'react-router-dom'

function Navbar() {
    return (
       <NavbarWrapper>
       <ul>
           <li>
               <Link to="/">Home</Link>
           </li>
           <li>
               <Link to="/about">about</Link>
           </li>
           <li>
               <Link to="/contact">contact</Link>
           </li>
           <li>
               <Link to="/product">Product</Link>
           </li>
           
       </ul>
       </NavbarWrapper>
    )
}

export default Navbar
