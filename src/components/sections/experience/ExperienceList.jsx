import React from 'react';
import ExperienceCard from './ExperienceCard';

const ExperienceList = () => {
    // This contains my job experiences, starting with the most recent.
    const experienceList = [
        {
            id: 2,
            title: 'Software Engineer',
            subTitle: 'Game Development',
            company: 'IGT',
            link: 'https://igt.com/',
            dates: 'April 2011 - June 2020',
            skills: ['C#', 'C++', 'lua', 'Unity3D'],
            bullet1: '• Developed casino games using C# and Unity3D and C++ with LUA.',
            bullet2: '• Worked on teams that included Game Design, Sound, Art, Technical Art, and other Software Engineers'
        },
        {
            id: 1,
            title: 'Software Engineer',
            subTitle: 'Produce Assurance',
            company: 'IGT',
            link: 'https://igt.com/',
            skills: ['C#', 'VBA', 'MS Excel'],
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
            skills: ['PHP', 'SQL', 'MS Access'],
            bullet1: '• Developed and maintained the in-house ERP software system using VBA, MS Access, and SQL Server.',
            bullet2: '• Renovated and enhanced the company website using HTML, PHP and SQL.',
            bullet3: '• Led a team that ran and verified an automated system for mounting circuits onto a PCB.',
            bullet4: '• Assisted with turnkey quotes and material procurement for customers.',
        }
    ];
    console.log('experience list : ', experienceList);

    return (
        <React.Fragment>
            {experienceList.map(({ id, title, subTitle, company, link, dates, skills, ...experience }) => (
                <ExperienceCard
                    key={id}
                    title={title}
                    subTitle={subTitle}
                    company={company}
                    link={link}
                    dates={dates}
                    skills={skills}
                    experience={experience}
                />
            ))}
        </React.Fragment>
    )
}

export default ExperienceList;