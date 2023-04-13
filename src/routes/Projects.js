import React from 'react'
import Navbar from '../components/Navbar'
import './Projects.css'

export const Projects = () => {
    return (
        <div>
            <div className='navbar'>
                <Navbar></Navbar>
            </div>
            <div>
                <h4>My personal website</h4>
                <p>You're looking at this project right now! Click this <a href='https://www.linkedin.com/in/kayla-nesbitt/' target='_blank'></a></p>
            </div>
        </div>
    )
}
