import React from 'react';
import styled from 'styled-components';
import backgrounds from '../../../assets/backgrounds/backgrounds';
import ExperienceList from './ExperienceList';

export default () =>
    <Section id='experience'>
        <Header>
            <SectionName>Experience</SectionName>
        </Header>
        <ExperienceList />
    </Section>;

const Section = styled.section.attrs({
    className: 'bg-center cover pl5-ns pr5-ns pb5'
})`
    background-image:   linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.1)),
                        url(${backgrounds.experience_large});
    background-attachment: fixed;

    @media only screen and (max-width: 767px) {        
        background-image:   linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
                            url(${backgrounds.home_small});
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