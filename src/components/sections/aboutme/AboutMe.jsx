import React from 'react'
import styled from 'styled-components';
import backgrounds from '../../../assets/backgrounds/backgrounds';
import FadeInSection from '../../effects/FadeInSection';

const AboutMe = () =>
    <Section id='about'>
        <FadeInSection fadeClass='fade-in-from-right'>
            <Header>
                <SectionName>{'About Me'}</SectionName>
            </Header>
        </FadeInSection>
        <AboutContainer>
            <Idea>
                {'I am passionate about technology and enjoy working with other talented '}
                {'people and business partners to turn an idea into something that people '}
                {'get value out of using!'}
            </Idea>
            <Idea>
                {'Learning quickly, I am thrilled to be part of a field that can move fast '}
                {'and where I can hone my skills and knowledge. There is always something to learn in this '}
                {'field: from learning a new library or language to applying a design pattern to improve '}
                {'a product.'}
            </Idea>
        </AboutContainer>
    </Section>

export default AboutMe;

// Styled Components Section //
const Section = styled.section.attrs({
    className: ' pl5-ns pr5-ns pa4 flex items-center justify-center'
})`
    background-image: url(${backgrounds.about_medium});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-attachment: fixed;

    @media only screen and (max-width: 767px) {
        background-image: url(${backgrounds.small_width});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        background-attachment: scroll;

        flex-flow: column nowrap;
        padding-left: 1rem;
        padding-right: 1rem;
    };
`;

const Header = styled.header.attrs({
    className: 'br2'
})`
    border: 1px solid white;
    background: rgba(0,0,0,0.7);

    @media only screen and (max-width: 767px) {
        border: none;
        background-color: transparent;
    };
`;

const SectionName = styled.h1.attrs({
    className: 'f1 center'
})`
    color: rgb(215, 215, 215);
    @media only screen and (max-width: 767px) {
        color: white;
        background-color: rgba(35, 45, 55, 0.2);
    };
`;

const AboutContainer = styled.div.attrs({
    className: 'ba br3 white ml5-ns mr5-ns tc pl2 pr1 tracked'
})`
    background: linear-gradient(to left, rgba(75, 85, 85, 1), rgba(10, 10, 10, 0.9) 20%);

    @media only screen and (max-width: 767px) {
        padding-left: 1rem;
        padding-right: 1rem;
        width: 100%;
    };
`
const Idea = styled.p.attrs({
    className: 'tl ln-copy light-silver bb'
})`
    color: rgb(205, 205, 215);
`;
