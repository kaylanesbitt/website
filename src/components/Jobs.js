import React from 'react'
import './Jobs.css'
import ck_photo from '../assets/ck_icon.png'
import cs_photo from '../assets/cs_logo.jpeg'
import unc_photo from '../assets/unc_logo.png'


const Jobs = () => {
    return (
        <div>
            <section className='credit-karma'>
                <img className='ck-photo' src={ck_photo}></img>
                <h4 className='ck-title'>Credit Karma - Software Engineer Intern</h4>
                <p className='ck-text'>
                    At Credit Karma, I worked on a team that retrieved data from
                    various credit bureaus. I learned how different retrieval pipelines worked, using database systems like PubSub and S3.
                    I helped rewrite an existing service written in outdated code. I gained experience using tools for the entire software development cycle,
                    such as Docker, New Relic, and Splunk. I also got a brief introduction to how encryption works and how keys are stored.
                </p>
                <p>
                    I also gained valuable experience learning about how companies are structured and responsibilities associated with different roles. Credit Karma had loads of cool
                    opportunities, not limited to software development. In the future, I would love to explore roles like data engineering, data analytics, and product management.
                </p>

            </section>

            <article className='ta'>
                <img className='ta-photo' src={cs_photo}></img>
                <h4>UNC CS Department - Undergraduate Teaching Assistant</h4>
                <p className='ta-text-1'>
                    I am a TA for COMP 301, Foundations of Programming. I help students with assignment and conceptual questions. Most assignments are
                    to give students practice with common design patterns, such as Singleton, Observer, and Model-View-Controller. Other assignments focus
                    on other useful skills, like unit testing.
                </p>
                <p className='ta-text-2'>
                    My experience as a TA has been a great way to explore a new side of Computer Science. I enjoy helping people, and I definitely want to
                    further explore academia by continuing to be a TA and potentially pursue a graduate degree.
                </p>
            </article>

            <article className='ra'>
                <img className='ra-photo' src={unc_photo}></img>
                <h4>Carolina Housing - Resident Advisor</h4>
                <p>
                    As an RA, I help keep students safe in my resident hall community. On duty, I walk through every building to make sure
                    residents stay safe and don't endanger themselves. I also help residents with situations like lockouts and lost keys.
                </p>
                <p>
                    Another great part of the job is holding monthly programs with my building. We usually cater food and have fun activities, like
                    coloring or playing card games! It's a great way to get to know my residents and fellow RAs better.
                </p>
            </article>
        </div>
    )
}

export default Jobs