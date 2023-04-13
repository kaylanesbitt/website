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
                <article className='website'>
                    <h4>My personal website</h4>
                    <p>You're looking at this project right now! Click this <a href='https://github.com/kaylanesbitt/website/tree/main' target='_blank'>link</a> to visit the GitHub repo.</p>
                </article>
                <article className='prof-org'>
                    <h4>A Project for the Betterment of Students' Mental Health</h4>
                    <p>If you are or have been an undergraduate at an American university, you have probably experienced the phenomenon that
                        is colloquially referred to as a 'hell week.' This is when you have multiple tests and/or projects due in one week.</p>
                    <p>I cannot claim to know why this always happens, but my team in TechX wanted to come up with a way for professors to see
                        the exam schedules of their students. The idea is for each class, there is a calendar that displays the exam dates of all the classes
                        that the students are taking, with the number of students who have to take that test.
                    </p>
                    <p>It is currently in progress. Click this <a href='https://github.com/kaylanesbitt/anti-hell-week' target='_blank'>link</a> to visit the GitHub repo.</p>
                </article>
            </div>
        </div>
    )
}
