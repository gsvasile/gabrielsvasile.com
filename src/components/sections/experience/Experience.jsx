import React from 'react';
import styled from 'styled-components';
import ExperienceList from './ExperienceList';
import "./Experience.css";

const Section = styled.section.attrs({
    className: 'bg-center cover pl5 pr5 pb5'
})`
    background-image:   linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
                        url("images/bg-experience-1920x2559.jpg");
    background-attachment: fixed;
`;

const Experience = () => {
    return (
        <Section id='experience'>
            <div className='mw-none ml0 mr-auto h-100 center'>
                <header className='flex white justify-between items-center'>
                    <h1 className='experience-header f1 center'>My Experience</h1>
                </header>
            </div>
            <ExperienceList />
        </Section>
    );
}

export default Experience;