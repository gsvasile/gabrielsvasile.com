import React from 'react';
import styled from 'styled-components';

import { useSpring, animated } from 'react-spring';

const CollapseMenu = (props) => {
    const { open } = useSpring({ open: props.navbarState ? 0 : 1 });

    if (props.navbarState === true) {
        return (
            <CollapseWrapper style={{
                transform: open.interpolate({
                    range: [0, 0.2, 0.3, 1],
                    output: [0, -20, 0, -200],
                }).interpolate(openValue => `translate3d(0, ${openValue}px, 0`),
            }}
                bgColor={props.bgColor}
                navbarState={props.navbarState}
            >
                <NavLinks>
                    {props.links.map(({ link, label }) => (
                        <div>
                            <a
                                key={label}
                                href={link}
                                onClick={props.handleNavbar}
                            >
                                {label}
                            </a>
                        </div>
                    ))}
                </NavLinks>
            </CollapseWrapper>
        );
    }
    return null;
};

export default CollapseMenu;

const CollapseWrapper = styled(animated.div).attrs({
    className: 'fixed z-1'
})`
  background: ${props => props.bgColor};
  position: fixed;
  top: 1.965rem;
  left: 0;
  right: 0;

    @media (min-width: 768px) {
      display: none;
    }
`;

const NavLinks = styled.div.attrs({
    className: 'flex flex-column'
})`
  list-style-type: none;
  ${'' /* padding: 2rem 1rem 2rem 2rem; */}

  & div {
    transition: all 300ms linear 0s;
  }

  & a {
    font-size: 1.15rem;
    line-height: 2;
    color: #dfe6e9;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: rgb(254, 216, 104);
    }
  }
`;