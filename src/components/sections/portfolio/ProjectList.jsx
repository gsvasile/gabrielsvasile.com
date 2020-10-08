import React from 'react';
import images from '../../../assets/projectimages/projectImages';
import FadeInSection from '../../effects/FadeInSection';
import Project from './Project';

export default () =>
    <React.Fragment>
        {projectList.map(({ id, name, links, skills, description, imageWidth }) => (
            <FadeInSection
                key={id}
                fadeClass='fade-in-section'
            >
                <Project
                    name={name}
                    skills={skills}
                    description={description}
                    image={images[name]}
                    imageWidth={imageWidth}
                    links={links}
                />
            </FadeInSection>
        ))}
    </React.Fragment>

// This contains the job experiences, etc. starting with the most recent.
const projectList = [
    {
        id: 1,
        name: 'gabrielsvasile.com',
        skills: ['JavaScript', 'ES6', 'React', 'Tachyons', 'Styled-Components', 'CSS3'],
        description: 'This is a portfolio & resume website.',
        imageWidth: '323',
        links: [
            { type: 'githubbutton', text: 'Source Code', link: 'https://github.com/gsvasile/gabrielsvasile.com' },
            { type: 'live', text: 'Visit Live', link: 'http://gabrielsvasile.com' }
        ]
    },
    {
        id: 0,
        name: 'Face detection AI',
        skills: ['JavaScript', 'ES6', 'React', 'Tachyons', 'Styled-Components', 'CSS3', 'Nodejs', 'PostgreSQL'],
        description: 'This is a full-stack project with user accounts stored in a database. <br /> This will detect faces in user-supplied images.',
        imageWidth: '325',
        links: [
            { type: 'githubbutton', text: 'Front End', link: 'https://github.com/gsvasile/face-detection-ai' },
            { type: 'githubbutton', text: 'Back End', link: 'https://github.com/gsvasile/face-detection-ai-API' },
            { type: 'live', text: 'Visit Live', link: 'https://face-detection-gsv.herokuapp.com/' }
        ]
    }
];