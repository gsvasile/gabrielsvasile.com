import React from 'react';
import styled from 'styled-components';
import backgrounds from '../../../assets/backgrounds/backgrounds';
import ProjectList from './ProjectList';

export default () =>
    <Section id='portfolio'>
        <Header>
            <SectionName>{'Personal Projects'}</SectionName>
        </Header>
        <ProjectList />
    </Section>



const Section = styled.section.attrs({
    className: 'bg-center cover pb5'
})`
    background-image:   linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
                        url(${backgrounds.portfolio_medium});
    background-attachment: fixed;
    padding-left: 8rem;
    padding-right: 8rem;
    
    @media only screen and (max-width: 767px) {        
        background-image:   linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
                            url(${backgrounds.home_small});
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
    color: rgb(255, 255, 255);
`;