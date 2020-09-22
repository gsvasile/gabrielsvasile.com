import React from 'react';
import Project from './Project';

export default () =>
    <React.Fragment>
        {projectList.map(({ id, title, subTitle, company, link, dates, skills, ...experience }) => (
            <Project
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

// This contains the job experiences, etc. starting with the most recent.
const projectList = [
    {
        id: 2,
        title: 'Software Engineer',
        subTitle: 'Game Development',
        company: 'IGT',
        link: 'https://igt.com/',
        dates: 'April 2011 - June 2020',
        skills: ['C#', 'Unity3D', 'C++', 'LUA'],
        bullet1: '• Developed casino games with C# and Unity3D, and C++ with LUA.',
    },
    {
        id: 1,
        title: 'Software Engineer',
        subTitle: 'Produce Assurance',
        company: 'IGT',
        link: 'https://igt.com/',
        skills: ['C#', 'VBA'],
        dates: 'April 2006 - April 2011',
        bullet1: '• Developed and maintained test tools using C# and VBA that improved testers\' performance.',
    },
    {
        id: 0,
        title: 'Software Engineer',
        company: 'Vital Systems',
        link: 'https://vitalsystems.com/',
        dates: 'March 2005 - March 2006',
        skills: ['PHP', 'SQLServer', 'MSAccess'],
        bullet1: '• Developed and maintained the in-house ERP software system using VBA, MS Access, and SQL Server.',
    }
];