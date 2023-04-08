import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div className='header'>
            <Link to='/' ><h1>Kayla Nesbitt</h1></Link>
            <ul className='nav-menu'>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/'>Experience</Link>
                </li>
                <li>
                    <Link to='/'>Projects</Link>
                </li>
                <li>
                    <Link to='/'>Activities</Link>
                </li>
            </ul>
            <div className='hamburger'>
                <FaBars size={20} style={{ color: '#fff' }} />
            </div>
        </div>
    )
}

export default Navbar;
