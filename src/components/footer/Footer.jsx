import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import icons from '../../assets/icons/icons';

const createdYear = 2020;
let currentYear = new Date().getFullYear();
if (currentYear === createdYear) {
    currentYear = undefined;
}

const pixelOffsetToTriggerFadeIn = 200;
const fadeDuration = 1;

const doSomething = () => alert('eat my shorts');

export default () => {

    const [isVisible, SetVisibility] = useState('visible');
    const [waitOnScrollEvents, setWaitForScrollEvents] = useState(true);

    const toggleVisibility = () => {
        isVisible === 'hidden' ? SetVisibility('visible') : SetVisibility('hidden');
    }

    // // Check to see if scrolling near bottom of page, load more photos.
    // window.addEventListener("scroll", () => {
    //     if (!waitOnScrollEvents &&
    //         window.innerHeight + window.scrollY >=
    //         document.body.offsetHeight - pixelOffsetToTriggerFadeIn &&
    //         isVisible === 'hidden'
    //     ) {
    //         toggleVisibility();
    //         setWaitForScrollEvents(true);
    //     } else if (!waitOnScrollEvents &&
    //         window.innerHeight + window.scrollY <=
    //         document.body.offsetHeight - pixelOffsetToTriggerFadeIn &&
    //         isVisible === 'visible') {
    //         toggleVisibility();
    //         setWaitForScrollEvents(true);
    //     }

    //     if (!waitOnScrollEvents) {
    //         setWaitForScrollEvents(true);
    //         setTimeout(() => setWaitForScrollEvents(false), 5000);
    //         setTimeout(doSomething, 5000);
    //     }
    // });

    return (
        <Footer onClick={toggleVisibility}>
            <What isVisible={isVisible}>
                <Link href='https://www.linkedin.com/in/gabrielsvasile'>
                    <Img alt='LinkedIn® bug' src={icons.linkedinbug} />
                </Link>
                <Link href='https://github.com/gsvasile'>
                    <Img alt='GitHub mark' src={icons.githubbug} />
                </Link>
                <Span>
                    {'©' + createdYear + (currentYear ? '-' + currentYear : '')}
                </Span>
            </What>
        </Footer>
    );
}

const Footer = styled.footer.attrs({
    className: 'fixed w-100'
})`
    bottom: 0;
    height: 1rem;
`;

const getFadeAnimation = (props) => keyframes`
from { opacity: ${props.isVisible === 'hidden' ? 1 : 0}; }
to   { opacity: ${props.isVisible === 'hidden' ? 0 : 1}; }
`;

const What = styled.div.attrs({
    className: 'f3 white fixed w-100'
})`
    background: rgba(15, 15, 15, 0.9);
    bottom:0;
    box-shadow: 0 0 10px 10px rgba(15, 15, 15, 0.8);
    animation: ${props => getFadeAnimation(props)} ${fadeDuration}s;

    visibility: ${props => props.isVisible};
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
