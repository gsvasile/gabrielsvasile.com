import React from 'react';
import styled from 'styled-components';
import icons from '../../../assets/icons/icons';
import backgrounds from '../../../assets/backgrounds/backgrounds';

export default function Home() {
    return (
        <Section id='home'>
            <Greetings>Hello! My name is</Greetings>
            <Name>Gabriel Vasile.</Name>
            <Description>I am a forward-thinking Software Engineer.</Description>
            <Links>
                <LinkWrapper>
                    <Link href='https://www.linkedin.com/in/gabrielsvasile'>
                        <WideImg
                            alt='LinkedIn® Logo'
                            src={icons.linkedinlogo}
                        />
                        <SmImg
                            alt='LinkedIn® bug'
                            src={icons.linkedinbug}
                        />
                    </Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link href='https://github.com/gsvasile'>
                        <WideImg
                            alt='GitHub Logo'
                            src={icons.githublogo}
                        />
                        <SmImg
                            alt='GitHub mark'
                            src={icons.githubbug}
                        />
                    </Link>
                </LinkWrapper>
            </Links>
        </Section>
    );
}

const Section = styled.section.attrs({
    className: 'bg-center cover flex flex-column vh-100 white justify-center'
})`
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)),
                      url(${backgrounds.home_large});
    background-attachment: fixed;

    @media only screen and (max-width: 767px) {        
        background-image:   linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
                            url(${backgrounds.home_small});
    };
`;

const Greetings = styled.p.attrs({
    className: 'f4'
})``;

const Name = styled.h1.attrs({
    className: 'f1'
})``;

const Description = styled(Greetings).attrs({
    className: 'f3 tracked'
})``;

const Links = styled.div.attrs({
    className: 'pt6 center w-80'
})``;

const LinkWrapper = styled.div.attrs({
    className: 'o-80 fl w-50'
})`
    transition: all 0.3s ease-in-out;
    height: 4em;
    :hover {
        opacity: 1;
        transform: scale(1.1);
    }
`;

const Link = styled.a.attrs({
    className: 'link',
    target: '_blank',
    rel: 'noopener noreferrer'
})``;

const Img = styled.img`
    height: 4em;
`;

const WideImg = styled(Img).attrs({
    className: 'wide-only',
})``;

const SmImg = styled(WideImg).attrs({
    className: 'less-wide',
})``;