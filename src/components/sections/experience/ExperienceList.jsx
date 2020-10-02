import React from 'react';
import FadeInSection from '../../effects/FadeInSection';
import ExperienceCard from './ExperienceCard';

export default () =>
    <React.Fragment>
        {experienceList.map(({ id, title, subTitle, company, link, dates, skills, ...experience }) => (
            <FadeInSection key={id} fadeClass='fade-in-section'>
                <ExperienceCard
                    title={title}
                    subTitle={subTitle}
                    company={company}
                    link={link}
                    dates={dates}
                    skills={skills}
                    experience={experience}
                />
            </FadeInSection>
        ))}
    </React.Fragment>

// This contains the job experiences, etc. starting with the most recent.
const experienceList = [
    {
        id: 2,
        title: 'Software Engineer',
        subTitle: 'Game Development',
        company: 'IGT',
        link: 'https://igt.com/',
        dates: 'April 2011 - June 2020',
        skills: ['C#', 'Unity3D', 'C++', 'LUA'],
        bullet1: '• Developed casino games with C# and Unity3D, and C++ with LUA.',
        bullet2: '• Worked on teams that included Game Design, Sound, Art, Technical Art, and other Software Engineers'
    },
    {
        id: 1,
        title: 'Software Engineer',
        subTitle: 'Product Assurance',
        company: 'IGT',
        link: 'https://igt.com/',
        skills: ['C#', 'VBA'],
        dates: 'April 2006 - April 2011',
        bullet1: '• Developed and maintained test tools using C# and VBA that improved testers\' performance.',
        bullet2: '• Fully tested all aspects of Stepper and Video slot game software.',
        bullet3: '• Tested and verified math implementation and created documentation for clients.',
    },
    {
        id: 0,
        title: 'Software Engineer',
        company: 'Vital Systems',
        link: 'https://vitalsystems.com/',
        dates: 'March 2005 - March 2006',
        skills: ['PHP', 'SQLServer', 'MSAccess'],
        bullet1: '• Developed and maintained the in-house ERP software system using VBA, MS Access, and SQL Server.',
        bullet2: '• Renovated and enhanced the company website using HTML, PHP and SQL.',
        bullet3: '• Led and trained a team to operate an Automated Optical Imaging machine that verifies surface-mounted circuits onto a PCB.',
        bullet4: '• Assisted with turnkey quotes and material procurement for customers.',
    }
];
