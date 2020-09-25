import React from 'react';
import styled from 'styled-components';
import SkillGraph from './SkillGraph';
import backgrounds from '../../../assets/backgrounds/backgrounds';

export default () =>
    <Section id='skills'>
        <Header>
            <SectionName>{'Skills'}</SectionName>
        </Header>
        <SkillGraph />
    </Section>

const Section = styled.section.attrs({
    className: 'bg-center cover pl6-ns pr6-ns pb5'
})`
    background-image:   linear-gradient(rgba(0,0,0,0.2), rgba(0, 0, 0, 0)),
                        url(${backgrounds.skills_large});
    background-attachment: fixed;
    
    @media only screen and (max-width: 767px) {        
        background-image:   linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
                            url(${backgrounds.home_small});
        padding-left: 2rem;
        padding-right: 2rem;

    };
`;

const Header = styled.header.attrs({
    className: 'flex'
})``;

const SectionName = styled.h1.attrs({
    className: 'f1 center'
})`
    color: #ffffff;
`;