import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/opnnws.png"

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="links">
          <Link className='link' to="/?cat=business"><h6>Business</h6></Link>
          <Link className='link' to="/?cat=finaces"><h6>Finances</h6></Link>
          <Link className='link' to="/?cat=design"><h6>Design</h6></Link>
          <Link className='link' to="/?cat=customer"><h6>Customer Dev</h6></Link>
          <Link className='link' to="/?cat=learnings"><h6>General Learnings</h6></Link>
          <Link className='link' to="/?cat=product"><h6>Product</h6></Link>
          <Link className='link' to="/?cat=personal"><h6>Personal Topics</h6></Link>
          <Link className='link' to="/?cat=sales"><h6>Sales</h6></Link>
          <Link className='link' to="/?cat=team"><h6>Team & Collaboration</h6></Link>
          <Link className='link' to="/?cat=tech"><h6>Tech</h6></Link>

          <span className='menu'>Profile</span>
          <span className='menu'>Logout</span>
          <span className='write'>
            <Link to="/write">Write</Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar