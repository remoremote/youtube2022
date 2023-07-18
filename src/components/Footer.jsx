import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../img/opnnws.png"

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>personal blogging project of remoremote</span>
    </footer>
  )
}

export default Footer