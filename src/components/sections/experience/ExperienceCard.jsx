import React from 'react';
import './ExperienceCard.css';

const ExperienceCard = (
    {
        title,
        subTitle,
        company,
        link,
        dates,
        skills,
        experience
    }
) => {

    // Only include a subtitle if it exists.
    const subTitlePart = (subTitle) ? <span className='wide-only'> - {subTitle}</span> : <span />;

    // It is assumed the experience will come through as an object with just
    // experience description. Build an array to map to list in the card later.
    const getExperienceDescription = (experience) => {
        let descriptions = [];
        for (const description in experience) {
            descriptions.push(experience[description]);
        }
        return descriptions;
    }

    const experienceToList = getExperienceDescription(experience);

    return (
        <article className='bg-black-80 ba white pa2 mb3'>
            <header className='cardHead flex justify-between white items-center bb fw7 pb1'>
                <div className='f3'>
                    {title} {subTitlePart}
                    <span className='o-50'> at</span>
                    <a
                        className='link pl1 blue'
                        href={link}
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        {company}
                    </a>
                </div>
                <div>{dates}</div>
            </header>
            <div className='flex flex-column pt1'>
                <div>
                    Skill
                </div>
                <div className='db'>
                    {experienceToList.map((point, index) => (
                        <span
                            key={index}
                            className='ed pb1'
                        >
                            {point}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}

export default ExperienceCard;