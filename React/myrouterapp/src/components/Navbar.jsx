import React from 'react'
import { Link, NavLink } from 'react-router'

function Navbar() {
  return (
    <>
        <nav>
            <ul>
              <li><NavLink className={(e) => {return e.isActive ? "blue" : ""}} to="/">Home </NavLink></li>
              <li><NavLink className={(e) => {return e.isActive ? "blue" : ""}} to="/app">App </NavLink></li>
                <li><NavLink className={(e) => {return e.isActive ? "blue" : ""}}to="/about">About</NavLink></li>
                <li><NavLink className={(e) => {return e.isActive ? "blue" : ""}} to="/team">Team</NavLink></li>
                <li><NavLink className={(e) => {return e.isActive ? "blue" : ""}} to="/learning">Learn React</NavLink></li>
            </ul>    

        </nav> 
    </>
  )
}

export default Navbar
