import React from 'react';
import styled from 'styled-components';
import Tilt from 'react-tilt';
import SkillList from '../../skilllist/SkillList';
import icons from '../../../assets/icons/icons';

const GetButtonsJSX = (links) => {
    if (links) {
        return (
            links.map(({ type, text, link }, index) => {
                if (icons[type]) {
                    return (
                        <Link key={type + '-' + index} href={link}>
                            <Button>
                                <img alt={type} src={icons[type]} />
                                {text}
                            </Button>
                        </Link>
                    );
                } else {
                    return (
                        <Link key={type + '-' + index} href={link}>
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

    const buttons = GetButtonsJSX(links);

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
                            max: 50,
                            perspective: 950,
                            scale: 1,
                            transition: true
                        }}
                    >
                        <div className='Tilt-inner'>
                            <ShowCaseDisplay
                                alt={name}
                                src={image}
                                width={imageWidth}
                            />
                        </div>
                    </Tilt>
                </ProjectShowCaseItem>
            </ProjectGridContainer>
        </Project>
    );
}

const Project = styled.article.attrs({
    className: 'bg-black-20 ba br3 white mb3'
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
    grid-template-columns: 1fr 1fr;
    padding: 2px;
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
    className: 'flex justify-start items-start pl1 tl'
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
    background-image: linear-gradient(rgba(10, 10, 10, 0.6), rgba(50, 50, 150, 0.4));
`;

const ShowCaseDisplay = styled.img.attrs({
    className: 'ba'
})`
    box-shadow: 0 5px 15px rgb(155, 155, 155);
`;

const Buttons = styled.div.attrs({
    className: 'flex justify-between items-center'
})`
    grid-area: projectLinks;
    background-image: linear-gradient(rgba(20, 20, 20, 0), rgba(50, 50, 150, 0.3));

    @media only screen and (max-width: 767px) {
        justify-content: center;
        align-items: center;
        font-size: 13px;
    }
`;

const Link = styled.a.attrs({
    className: 'link',
    target: '_blank',
    rel: 'noopener noreferrer'
})``;

const Button = styled.button.attrs({
    className: 'flex justify-around items-center bg-black br4 white h-25 pointer'
})`
    @media only screen and (max-width: 767px) {
        margin-top: 5px;
    }
`;