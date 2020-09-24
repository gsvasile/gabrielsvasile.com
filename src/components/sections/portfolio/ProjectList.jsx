import React from 'react';
import Project from './Project';
import images from '../../../assets/projectimages/projectImages';

export default () =>
    <React.Fragment>
        {projectList.map(({ id, name, links, skills, description, imageWidth }) => (
            <Project
                key={id}
                name={name}
                skills={skills}
                description={description}
                image={images[name]}
                imageWidth={imageWidth}
                links={links}
            />
        ))}
    </React.Fragment>

// This contains the job experiences, etc. starting with the most recent.
const projectList = [
    {
        id: 1,
        name: 'gabrielsvasile.com',
        skills: ['JavaScript', 'ES6', 'React', 'Tachyons', 'Styled-Components', 'CSS'],
        description: 'This is a portfolio & resume website.',
        imageWidth: '490',
        links: [
            { type: 'githubbutton', text: 'Source Code', link: 'https://github.com/gsvasile/gabrielsvasile.com' },
            { type: 'live', text: 'Visit Live', link: 'http://gabrielsvasile.com' }
        ]
    },
    {
        id: 0,
        name: 'Software Engineer',
        subname: 'Produce Assurance',
        company: 'IGT',
        link: 'https://igt.com/',
        skills: ['C#', 'VBA'],
        dates: 'April 2006 - April 2011',
        bullet1: '• Developed and maintained test tools using C# and VBA that improved testers\' performance.',
    }
];