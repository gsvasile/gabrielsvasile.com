import React from 'react';
import styled from 'styled-components';
import icons from '../../assets/icons/icons';

const createdYear = 2020;
let currentYear = new Date().getFullYear();
if (currentYear === createdYear) {
    currentYear = undefined;
}

export default () => {
    return (
        <Footer>
            <Link href='https://www.linkedin.com/in/gabrielsvasile'>
                <Img alt='LinkedIn® bug' src={icons.linkedinbug} />
            </Link>
            <Link href='https://github.com/gsvasile'>
                <Img alt='GitHub mark' src={icons.githubbug} />
            </Link>
            <Span>
                {'©' + createdYear + (currentYear ? '-' + currentYear : '')}
            </Span>
        </Footer>
    );
}

const Footer = styled.footer.attrs({
    className: 'f3 white fixed w-100'
})`
    bottom: 0;
    height: 2rem;
    background: rgba(15, 15, 15, 1);
    box-shadow: 0 0 10px 10px rgba(15, 15, 15, 0.8);
`;

const Link = styled.a.attrs({
    className: 'link',
    target: '_blank',
    rel: 'noopener noreferrer'
})``;

const Img = styled.img.attrs({})`
    height: 2rem; 
`;

const Span = styled.span.attrs({
    className: 'f6'
})``;
