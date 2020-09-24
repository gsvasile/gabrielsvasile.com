import React from 'react';
import SkillList from '../../skilllist/SkillList';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import icons from '../../../assets/icons/icons';

const GetButtonsJSX = (links) => {
    if (links) {
        return (
            links.map(({ type, text, link }) => {
                if (icons[type]) {
                    return (
                        <Link href={link}>
                            <Button>
                                <img alt={type} src={icons[type]} />
                                {text}
                            </Button>
                        </Link>
                    );
                } else {
                    return (
                        <Link href={link}>
                            <Button>
                                {text}
                            </Button>
                        </Link>
                    );
                }
            })
        );
    } else {
        return <span />;
    }
}

export default (
    {
        name,
        skills,
        description,
        image,
        imageWidth,
        links
    }
) => {

    let buttons = GetButtonsJSX(links);

    return (
        <Project>
            <ProjectGridContainer>
                <Name>{name}</Name>
                <SkillItems>
                    <SkillList skillItems={skills} />
                </SkillItems>
                <DescriptionItem>
                    {description}
                </DescriptionItem>
                <Buttons>
                    {buttons}
                </Buttons>
                <ProjectShowCaseItem>
                    <Tilt
                        options={{
                            max: 10,
                            perspective: 950,
                            scale: 1,
                            transition: true
                        }}
                    >
                        <div className='Tilt-inner'>
                            <ShowCaseDisplay
                                alt={name} src={image} width={imageWidth}
                            />
                        </div>
                    </Tilt>
                </ProjectShowCaseItem>
            </ProjectGridContainer>
        </Project>
    );
}

const Project = styled.article.attrs({
    className: 'bg-black-20 ba white mb3'
})``;

const ProjectGridContainer = styled.div`
    display: grid;
    grid-gap: 0px 0px;
    grid-template-areas:
        'projectName    projectName'
        'skillItems     skillItems'
        'description    projectShowCase'
        'projectLinks   projectShowCase';
    /* Expand the columns to a predifined widths */
    grid-template-columns: minmax(0, 43%) minmax(43%, 100%);
`;

const Name = styled.header.attrs({
    className: 'f3 flex items-start pl1'
})`
    grid-area: projectName;
    background-image: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 5, 5, 0.7));
`;

const SkillItems = styled.div.attrs({
    className: 'f5 pl0 o-100'
})`
    grid-area: skillItems;
    background-image: linear-gradient(rgba(0, 5, 5, 0.7), rgba(5, 5, 5, 0.6));
`;

const DescriptionItem = styled.div.attrs({
    className: 'flex justify-start items-center pl1 tl'
})`
    grid-area: description;
    grid-row: 3 / span 2;
    background-image: linear-gradient(rgba(0, 5, 5, 0.6), rgba(20, 20, 20, 0.5));

    @media only screen and (max-width: 767px) {
        align-items: start;
        font-size: 14px;
    }
`;

const ProjectShowCaseItem = styled.div.attrs({
    className: 'flex justify-center items-center'
})`
    grid-area: projectShowCase;
    background-image: linear-gradient(rgba(0, 5, 5, 0.6), rgba(20, 20, 20, 0.5));
`;

const ShowCaseDisplay = styled.img.attrs({
    className: 'ba'
})`
    box-shadow: 0 5px 15px rgb(155, 155, 155);
`;

const Link = styled.a.attrs({
    className: 'link',
    target: '_blank',
    rel: 'noopener noreferrer'
})``;

const Buttons = styled.div.attrs({
    className: 'flex justify-between items-end'
})`
    grid-area: projectLinks;
    background-image: linear-gradient(rgba(20, 20, 20, 0.5), rgba(50, 50, 150, 0.3));

    @media only screen and (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Button = styled.button.attrs({
    className: 'flex justify-between items-center bg-black br4 white h2'
})`
    cursor: pointer;

    @media only screen and (max-width: 767px) {
        margin-top: 5px;
    }
`;