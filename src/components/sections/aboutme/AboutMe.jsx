import React from 'react'
import styled from 'styled-components';
import backgrounds from '../../../assets/backgrounds/backgrounds';

export default () =>
    <Section id='about'>
        <Header>
            <SectionName>{'About Me'}</SectionName>
        </Header>
        <AboutContainer>
            <Idea>
                I am passionate about technology and really enjoy working with other talented
                people.
            </Idea>
            <Idea>
                Learning quickly, I am thrilled to be part of a field that can move fast
                and where I can constistely hone my skills and knowledge. Whether that is in a
                particular programming language, or a new library, or getting more familiar with
                a design pattern and how I can use it to improve products.
            </Idea>
        </AboutContainer>
    </Section>

const Section = styled.section.attrs({
    className: 'bg-center cover pl5-ns pr5-ns pa6 flex items-center justify-center'
})`
    background-image:   url(${backgrounds.about_large});
    background-attachment: fixed;
    
    @media only screen and (max-width: 767px) {        
        background-image:  url(${backgrounds.home_small});
        flex-flow: column nowrap;
        padding-left: 1rem;
        padding-right: 1rem;
    };
`;

const Header = styled.header.attrs({
    className: 'ba bg-black-80'
})``;

const SectionName = styled.h1.attrs({
    className: 'f1 center'
})`
    color: rgb(215, 215, 215);
`;

const AboutContainer = styled.div.attrs({
    className: 'ba br3 white ml5-ns mr5-ns tc pl2 pr1 tracked'
})`    
    background: linear-gradient(to left, rgba(75, 85, 85, 1), rgba(10, 10, 10, 0.9) 20%);
    
    @media only screen and (max-width: 767px) {
        margin-left: 1rem;
        margin-right: 1rem;
        width: 25rem;
    };
`
const Idea = styled.p.attrs({
    className: 'tl ln-copy light-silver bb'
})`
    color: rgb(205, 205, 215);
`;