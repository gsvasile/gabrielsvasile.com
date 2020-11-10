import React from 'react';
import styled from 'styled-components';
import icons from '../../assets/icons/icons';

const createdYear = 2020;
let currentYear = new Date().getFullYear();
if (currentYear === createdYear) {
    currentYear = undefined;
}

export default function Footer() {
    return (
        <FooterContainer>
            <Link href='https://www.linkedin.com/in/gabrielsvasile'>
                <Img alt='LinkedIn® bug' src={icons.linkedinbug} />
            </Link>
            <Link href='https://github.com/gsvasile'>
                <Img alt='GitHub mark' src={icons.githubbug} />
            </Link>
            <Span>
                {'©' + createdYear + (currentYear ? '-' + currentYear : '')}
            </Span>
        </FooterContainer>
    );
}

const FooterContainer = styled.footer.attrs({
    className: 'f3 white w-100 flex items-center justify-center '
})`
    bottom: 0;
    background: rgba(5, 5, 5, 1);
    box-shadow: 0 0 10px 10px rgba(15, 15, 15, 1);
`;

const Link = styled.a.attrs({
    className: 'link pl3',
    target: '_blank',
    rel: 'noopener noreferrer'
})``;

const Img = styled.img.attrs({})`
    height: 2rem;
`;

const Span = styled.span.attrs({
    className: 'f6 pl3 o-30'
})``;
