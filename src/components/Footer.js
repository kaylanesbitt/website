import React from 'react'
import { FaLinkedin, FaPhone, FaGithub } from 'react-icons/fa'
import { GrLocation } from 'react-icons/gr'
import { FiMail } from 'react-icons/fi'

export const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left'>
                    <div className='location'>
                        <GrLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                    </div>
                    <div>
                        <h4>Chapel Hill, NC</h4>
                    </div>
                    <div className='github'>
                        <a href='https://github.com/kaylanesbitt'><FaGithub size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
