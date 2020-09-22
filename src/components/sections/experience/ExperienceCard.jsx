import React from 'react';
import SkillList from '../../skilllist/SkillList';
import styled from 'styled-components';

export default (
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
    // experience description. They keys are not needed, just the values.
    // So get an array with just the values to list the descriptions in the card later.
    const experienceToList = Object.values(experience);

    return (
        <Card>
            <Header>
                <PositionCompany>
                    {title} {subTitlePart}
                    <BufferWord>
                        {' at'}
                    </BufferWord>
                    <CompanyLink href={link}>
                        {company}
                    </CompanyLink>
                </PositionCompany>
                <div>{dates}</div>
            </Header>
            <div>
                <SkillList skillItems={skills} />
                <div>
                    {experienceToList.map((point, index) => (
                        <DescriptionLine key={index}>
                            {point}
                        </DescriptionLine>
                    ))}
                </div>
            </div>
        </Card>
    );
}

const Card = styled.article.attrs({
    className: 'bg-black-80 ba white pa1 mb3'
})``;

const Header = styled.header.attrs({
    className: 'flex justify-between items-center fw7 pb1 bb b--white-70'
})`
    @media only screen and (max-width: 767px) {
        flex-direction: column;
        padding-bottom: 10px;
    }
`;

const PositionCompany = styled.div.attrs({
    className: 'f3'
})``;

const BufferWord = styled.span.attrs({
    className: 'o-50'
})``;

const CompanyLink = styled.a.attrs({
    className: 'link pl1 blue',
    target: '_blank',
    rel: 'noopener noreferrer'
})``;

const DescriptionLine = styled.span.attrs({
    className: 'flex tl f5 pb1'
})`
    color: rgb(201, 183, 166);

    @media only screen and (max-width: 767px) {
        font-size: 15px;
  }
}
`;