import React from 'react'
import { Link } from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'

const Header = () => {
  return (
    <nav>
        {/* <h1><img src={logo} alt="Graphics" style={{"width":"100px"}}/></h1> */}
        <h1 style={{"color":"blue"}}><i>CodeSpace</i></h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <HashLink to={"/#about"}>About</HashLink>
            <Link to={"/contact"}>Contact</Link>
            {/* <HashLink to={"/#brands"}>Brands</HashLink> */}
            <HashLink to={"/#brands"}>Alumni</HashLink>
            {/* <Link to={"/services"}>Services</Link> */}
            <Link to={"/services"}>Courses</Link>
        </main>
    </nav>
  )
}

export default Header
