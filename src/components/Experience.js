import React from 'react'
import './Experience.css'
import photo from '../assets/ck_icon.png'

const Experience = () => {
    return (
        <div>
            <article className='credit-karma'>
                <div className='ck-header'>
                    <img className='ck-photo' src={photo}></img>
                    <h4 className='ck-title'>Credit Karma - Software Engineer Intern</h4>
                </div>
                <p className='ck-text'>
                    At Credit Karma, I worked on a team that retrieved data from
                    various credit bureaus. I learned about how different database systems work, like PubSub and S3.
                </p>

            </article>

            <article className='ta'>
                <h4>UNC CS Department - Undergraduate Teaching Assistant</h4>
                <p>
                    murder students.
                </p>
            </article>

            <article className='ra'>
                <h4>Carolina Housing - Resident Advisor</h4>
                <p>Help residents asdcasno</p>
            </article>
        </div>
    )
}

export default Experience