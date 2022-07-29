import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavBtnLink } from './NavbarElement'

const Navbar = () => {
  return (
    <>
    <Nav>
        <NavLink to="/">
            <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/" activeStyle>
                 Home
            </NavLink>
            <NavLink to="/feedback" activeStyle>
                 Give Feedback
            </NavLink>
            <NavLink to="/" activeStyle>
                 Sign Up
            </NavLink>
            <NavBtnLink to="/login">Log In</NavBtnLink>
        </NavMenu>
    </Nav>
    </>
  )
}

export default Navbar