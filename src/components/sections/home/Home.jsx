import React from 'react';
import styled from 'styled-components';
import Icons from '../../icons/icons';

export default function Home() {
    return (
        <Section id='home'>
            <Greetings>Hello! My name is</Greetings>
            <Name>Gabriel Vasile.</Name>
            <Description>I am a forward-thinking Software Engineer.</Description>
            <Links>
                <LinkWrapper>
                    <Link as='a' href='https://www.linkedin.com/in/gabrielsvasile'>
                        <WideImg
                            alt='LinkedIn® Logo'
                            src={Icons.linkedinlogo}
                        />
                        <SmImg
                            alt='LinkedIn® Bug'
                            src={Icons.linkedinbug}
                        />
                    </Link>
                </LinkWrapper>
                <LinkWrapper>
                    <Link as='a' href='https://github.com/gsvasile'>
                        <WideImg
                            alt='GitHub Logo'
                            src={Icons.githublogo}
                        />
                        <SmImg
                            alt='GitHub Bug'
                            src={Icons.githubbug}
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
                      url("images/bg-home.jpg");
    background-attachment: fixed;
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

const Link = styled.div.attrs({
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