import React from 'react';
import styled from 'styled-components';
import ExperienceList from './ExperienceList';

export default () =>
    <Section id='experience'>
        <Header>
            <SectionName>My Experience</SectionName>
        </Header>
        <ExperienceList />
    </Section>;

const Section = styled.section.attrs({
    className: 'bg-center cover pl5 pr5 pb5'
})`
    background-image:   linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3)),
                        url('images/bg-experience-1920x2559.jpg');
    background-attachment: fixed;
`;

const Header = styled.header.attrs({
    className: 'flex'
})``;

const SectionName = styled.h1.attrs({
    className: 'f1 center'
})`
    color: #cf9e18;
`;