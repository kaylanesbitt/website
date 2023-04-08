import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { FiMail } from 'react-icons/fi'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='mail'>
                        <a href='kaylanes@live.unc.edu'><FiMail size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /></a>
                    </div>
                    <div className='github'>
                        <a href='https://github.com/kaylanesbitt'><FaGithub size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /></a>
                    </div>
                    <div className='linkedin'>
                        <a href='https://www.linkedin.com/in/kayla-nesbitt/'><FaLinkedin size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /></a>
                    </div>
                </div>
                <div className='right'>
                    <h4>About me</h4>
                    <p>sick bro</p>
                </div>
            </div>
        </div>
    )
}
