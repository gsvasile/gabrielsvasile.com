import React from 'react';
import ExperienceList from './ExperienceList';
import "./Experience.css";

const Experience = () => {
    return (
        <section id='experience' className='bg-center cover pl5 pr5 pb5'>
            <div className='mw-none ml0 mr-auto h-100 center'>
                <header className='flex white justify-between items-center'>
                    <h1 className='experience-header f1 center'>My Experience</h1>
                </header>
            </div>
            <ExperienceList />
        </section>
    );
}

export default Experience;