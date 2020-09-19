import React from 'react';
import ExperienceCard from './ExperienceCard';
import Experiences from './experienceList';
import "./Experience.css";

const Experience = () => {

    return (
        <section id='experience' className='bg-center cover pb5 pr4 pl4'>
            <div className='mw-none ml0 mr-auto h-100 center'>
                <header className='flex white justify-between items-center'>
                    <h1 className='experience-header f1 center'>My Experience</h1>
                </header>
            </div>
            <ExperienceCard />
        </section>
    );
}

export default Experience;