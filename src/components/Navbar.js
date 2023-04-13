import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='header'>
            <Link to='/' ><h1>Kayla Nesbitt</h1></Link>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to='/experience'>Experience</Link>
                </li>
                <li>
                    <Link to='/projects'>Projects</Link>
                </li>
                <li>
                    <Link to='/activities'>Activities</Link>
                </li>

                <div className='github'>
                    <a href='https://github.com/kaylanesbitt' target='_blank'><FaGithub size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /></a>
                </div>
                <div className='linkedin'>
                    <a href='https://www.linkedin.com/in/kayla-nesbitt/' target='_blank' ><FaLinkedin size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /></a>
                </div>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}
                <FaBars size={20} style={{ color: '#fff' }} />
            </div>
        </div>
    )
}

export default Navbar
