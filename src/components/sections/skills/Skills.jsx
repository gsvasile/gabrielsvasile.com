import React from 'react';
import styled from 'styled-components';
import SkillDisplay from './SkillDisplay';
import backgrounds from '../../../assets/backgrounds/backgrounds';

export default () =>
    <Section id='skills'>
        <Header>
            <SectionName>
                {'Skills'}
                <div>
                    {'Development tools I use'}
                </div>
            </SectionName>
        </Header>
        <SkillDisplay />
    </Section>

const Section = styled.section.attrs({
    className: 'bg-center cover pb5'
})`
    background-image:   linear-gradient(rgba(0,0,0,0.2), rgba(0, 0, 0, 0)),
                        url(${backgrounds.skills_medium});
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
    className: 'f1 center br4'
})`
    color: #ffffff;
    background-color: rgba(35, 45, 55, 0.2);

    & div {
        font-size: 2rem;
    }
`;