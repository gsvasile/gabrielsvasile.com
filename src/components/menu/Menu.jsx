import React from 'react';
import styled from 'styled-components';

import { useSpring, animated, config } from "react-spring";

// import Brand from "./Brand";
import BurgerMenu from "./BurgerMenu";
import CollapseMenu from "./CollapseMenu";

export default function Menu(props) {
    const links = [
        { link: '#home', label: 'Home' },
        { link: '#experience', label: 'Experience' },
        { link: '#portfolio', label: 'Portfolio' },
        { link: '#skills', label: 'Skills' },
        { link: '#education', label: 'Education' },
        { link: '#about', label: 'About' }
    ];

    const bgColor = 'rgba(84, 67, 25, 0.9)';

    const barAnimation = useSpring({
        from: { transform: 'translate3d(0, -10rem, 0)' },
        transform: 'translate3d(0, 0, 0)',
    });

    const linkAnimation = useSpring({
        from: { transform: 'translate3d(-30px, 30px, 0)', opacity: 0 },
        to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
        delay: 800,
        config: config.wobbly,
    });

    return (
        <React.Fragment>
            <NavBar style={barAnimation}>
                <NavWrapper bgcolor={bgColor}>
                    <NamedLink href='#home'>Gabriel Vasile</NamedLink>
                    <NavLinks style={linkAnimation}>
                        {links.map(({ link, label }) => (
                            <NavLink key={label} href={link}>
                                {label}
                            </NavLink>
                        ))}
                    </NavLinks>
                    <BurgerWrapper>
                        <BurgerMenu
                            navbarState={props.navbarState}
                            handleNavbar={props.handleNavbar}
                        />
                    </BurgerWrapper>
                </NavWrapper>
            </NavBar>
            <CollapseMenu
                navbarState={props.navbarState}
                handleNavbar={props.handleNavbar}
                links={links}
                bgColor={bgColor}
            />
        </React.Fragment>
    );
}

const NavBar = styled(animated.nav).attrs({
    className: 'fixed w-100 z-1'
})``;

const NavWrapper = styled.div.attrs({
    className: 'z-2 flex content-center justify-between items-center h2 shadow-5'
})`
    background-color: ${props => props.bgcolor};
`;

const NavLinks = styled(animated.div)`
  list-style-type: none;
  margin: auto 0;

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Link = styled.a.attrs({
    className: 'link white-90'
})`
    @media only screen and (max-width: 767px) {
        color: white;
    };
`;

const NamedLink = styled(Link).attrs({
    className: 'ml4 ttu fw5 f4'
})``;

const NavLink = styled(Link).attrs({
    className: 'mr3 f6'
})`
    :hover {
        color: rgb(254, 216, 104);
    }
`;