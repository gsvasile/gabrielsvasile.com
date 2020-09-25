import React from 'react'
import styled from 'styled-components';
import backgrounds from '../../../assets/backgrounds/backgrounds';

export default () =>
    <Section id='about'>
        <Header>
            <SectionName>{'About Me'}</SectionName>
        </Header>
    </Section>

const Section = styled.section.attrs({
    className: 'bg-center cover pl5-ns pr5-ns pb5'
})`
    background-image:   linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
                        url(${backgrounds.about_large});
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
    color: rgb(255, 255, 255);
`;
