import React from 'react'
import Navbar from '../components/Navbar'
import './Activities.css'
import gwc from '../assets/gwc_logo.png'
import unc from '../assets/unc_logo.png'
import techx from '../assets/techx_icon.jpeg'

export const Activities = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <article className='techx'>
                    <h4 >TechX - Cohort President</h4>

                    <img className='techx-image' src={techx} alt=''></img>
                    <p>TechX is a society designed to develop undergraduates' technical skills. During my membership in the club, I have
                        learned how to make front-end websites using React, and how to create a database system and backend server using Node.
                        As cohort president, I act as a spokesperson for Cohort I during exec board meetings, and a medium through which exec
                        can make announcements. My industry experience also makes me a great resource for younger members in the club, and this week,
                        I will present on how to get an internship for summer 2024.
                        This is my first semester as a member of TechX.</p>
                </article>
                <article className='pickle-club'>
                    <h4>UNC Club Pickleball - Member</h4>
                    <p>
                        As a member of UNC Club Pickleball, I have participated in about 3 collegiate matches and 2 collegiate tournaments.
                        This club has been a great way for me to meet a wide range of people on UNC campus, including graduate students!
                        I have been a member of UNC club pickleball for 3 semesters.
                    </p>
                </article>
                <article className='gwc'>
                    <h4>Girls Who Code - Teaching Assistant</h4>
                    <p>
                        Girls Who Code is a club that provides classes to local middle and high school girls to introduce them to computer science topics.
                        As a teaching assistant, I attended class every other week and helped students work on their semester-long projects.
                        I volunteered as a TA for two semesters.
                    </p>
                </article>
            </div >
        </div >
    )
}
