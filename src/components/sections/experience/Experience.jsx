import React from 'react';
import styled from 'styled-components';
import backgrounds from '../../../assets/backgrounds/backgrounds';
import ExperienceList from './ExperienceList';

const Experience = () =>
    <Section id='experience'>
        <Header>
            <SectionName>Experience</SectionName>
        </Header>
        <ExperienceList />
    </Section>;

export default Experience;

// Styled Components Section //

const Section = styled.section.attrs({
    className: 'bg-center cover pb5'
})`
    background-image:   linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
                        url(${backgrounds.experience_medium});
    background-attachment: fixed;
    padding-left: 8rem;
    padding-right: 8rem;

    @media only screen and (max-width: 767px) {
        background-image: url(${backgrounds.small_width});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: scroll;

        padding-left: 1rem;
        padding-right: 1rem;
    };
`;

const Header = styled.header.attrs({
    className: 'flex'
})``;

const SectionName = styled.h1.attrs({
    className: 'f1 center'
})`
    color: #cf9e18;
`;