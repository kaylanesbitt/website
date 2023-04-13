import React from 'react'
import './Home.css'
import Navbar from '../components/Navbar'

import dfg_photo from '../assets/dfg.JPG'
import headshot from '../assets/headshot.png'
import cfg_photo from '../assets/cfg.png'

const Home = () => {
    return (
        <div>
            <div className='navbar'>
                <Navbar></Navbar>
            </div>
            <div className='about-me'>
                <div className='about-header'>
                    <h2>About Me</h2></div>
                <p>
                    I am a junior at the University of North Carolina studying Computer Science and Mathematics. I am currently taking
                    Introduction to Probability, Quantum Computing, Files and Databases, and Heaven and Hell. I'm interested in exploring the
                    intersection of math and CS, especially in fintech. As a software engineer intern at JP Morgan Chase this summer, hopefully
                    I get many opportunities to do so!
                </p>
                <p>
                    In my free time, I love playing pickleball, playing chess, and reading. I also enjoy watching TV; some of my favorite shows recently
                    have been Rick and Morty, Game of Thrones, and Silicon Valley.
                </p>
                <div className='images'>
                    <img className='headshot' src={headshot}></img>
                    <img className='cfg' src={cfg_photo}></img>
                    <p>This is me with my team at Code for Good, a hackathon hosted by JP Morgan Chase.</p>
                    <img className='dfg' src={dfg_photo}></img>
                    <p>This me with friends at Data for Good, another hackathon hosted by JP Morgan Chase.</p>
                </div>
            </div>
        </div>
    )
}

export default Home