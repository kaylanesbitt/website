import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

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
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes />) : (<FaBars size={20} style={{ color: '#fff' }} />)}
                <FaBars size={20} style={{ color: '#fff' }} />
            </div>
        </div>
    )
}

export default Navbar
