import React from 'react';
import styled from 'styled-components';
import EducationList from './EducationList';
import backgrounds from '../../../assets/backgrounds/backgrounds';
import ucscLogo from './ucsc-logo.png';

export default () =>
    <Section id='education'>
        <Header>
            <SectionName>Education</SectionName>
        </Header>
        <EducationList />
    </Section>

const Section = styled.section.attrs({
    className: 'pb5'
})`
    background: linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, 0)),
                url(${ucscLogo}) no-repeat bottom left, 
                url(${backgrounds.education_medium}) no-repeat center fixed;
    background-size: 1rem, 200px, cover;
    padding-left: 10rem;
    padding-right: 10rem;

    @media only screen and (max-width: 767px) {
        background-image: url(${ucscLogo}), url(${backgrounds.small_width});
        background-repeat: no-repeat, no-repeat;
        background-position: bottom center, center;
        background-size: 10rem, cover;
        background-attachment: scroll, scroll;

        padding-left: 1rem;
        padding-right: 1rem;
    };
`;

const Header = styled.header.attrs({
    className: 'flex'
})``;

const SectionName = styled.h1.attrs({
    className: 'f1 center white'
})`
    @media only screen and (max-width: 767px) {        
        background-color: rgba(35, 45, 55, 0.2);
    };
`;


