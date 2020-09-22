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
        <Project>
            <Title>
                <ProjectName>
                    {title} {subTitlePart}
                    <BufferWord>
                        {' at'}
                    </BufferWord>
                    <CompanyLink href={link}>
                        {company}
                    </CompanyLink>
                </ProjectName>
                <div>{dates}</div>
            </Title>
            <GridContainer>
                {/* <ProjectDetails> */}
                <ProjectShowCaseItem>
                    {experienceToList.map((point, index) => (
                        <DescriptionLine key={index}>
                            {point}
                        </DescriptionLine>
                    ))}
                </ProjectShowCaseItem>
                <SkillItem>
                    <SkillList skillItems={skills} />
                </SkillItem>
                <DescriptionItem>
                    {'how ya doin'}
                </DescriptionItem>
                {/* </ProjectDetails> */}
            </GridContainer>
        </Project>
    );
}

const Project = styled.article.attrs({
    className: 'bg-black-60 ba white mb3'
})``;

const Title = styled.header.attrs({
    className: 'flex justify-between items-center fw7 pb1 bb b--white-70'
})`
    @media only screen and (max-width: 767px) {
        flex-direction: column;
        padding-bottom: 10px;
    }
`;

const ProjectName = styled.div.attrs({
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

const GridContainer = styled.div.attrs({
    // className: 'center'
})`
    display: grid;
    /* grid-template-columns: auto auto; */
    grid-gap: 0;
    grid-template-areas:
        'skillGridItem projectLink'
        'description projectLink';

    /* fix: minimum width of 0 */
    grid-template-columns: minmax(0, 100%) minmax(0, 100%);
    ${'' /* grid-template-rows: minmax(0, 100%) minmax(0, 100%); */}
    ${'' /* background-color: #2196F3; */}
    ${'' /* padding: 10px; */}
`;

const ProjectShowCaseItem = styled.div.attrs({
    // className: 'flex items-center justify-center fl w-100 w-50-ns pt1 pb1 br ph2-ns'
})`
    grid-area: projectLink;
    background-color: rgba(155, 155, 155, 0.8);
    ${'' /* text-align: center;     */}
    ${'' /* padding: 20px 0; */}
    ${'' /* font-size: 30px; */}
    ${'' /* height: 10rem; */}
  `;

const SkillItem = styled.div.attrs({
    // className: 'bn flex-wrap flex-row'
})`
    grid-area: skillGridItem;
    background-color: rgba(80, 150, 255, 0.8);
    ${'' /* text-align: center; */}
    ${'' /* padding: 20px 0; */}
`;

const DescriptionItem = styled.div.attrs({
    // className: 'bn flex-wrap flex-row'
})`
    grid-area: description;
    background-color: rgba(20, 205, 150, 0.8);
    ${'' /* text-align: center; */}
    ${'' /* padding: 20px 0; */}
`;

const DescriptionLine = styled.div.attrs({
    className: 'f5'
})`
    color: rgb(201, 183, 166);

    @media only screen and (max-width: 767px) {
        font-size: 15px;
  }
}
`;