import React from 'react';
import styled from 'styled-components';
import EducationList from './EducationList';
import backgrounds from '../../../assets/backgrounds/backgrounds';
import ucscLogo from './ucsc-logo.png';

export default () =>
    <Section id='education'>
        <Header>
            <SectionName>{'Education'}</SectionName>
        </Header>
        <EducationList />
    </Section>

const Section = styled.section.attrs({
    className: 'pl7-ns pr7-ns pb5'
})`
    background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, 0)),
                url(${ucscLogo}) no-repeat bottom right, 
                url(${backgrounds.education_large}) no-repeat center fixed;
    background-size: 1vh, 200px, cover;

    @media only screen and (max-width: 767px) {        
        background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
                    url(${backgrounds.education_medium}) no-repeat center fixed;
        background-size: 1vh, cover;
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
color: #rgb(15, 105, 200);
`;


