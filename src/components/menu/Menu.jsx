import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div.attrs({
    className: 'z-2 fixed w-100 o-90 flex content-center justify-between items-center h2 shadow-5'
})`
    background-color: rgb(84 67 25);
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
})``;

const Menu = () => {
    const links = [
        { link: '#home', label: 'Home' },
        { link: '#experience', label: 'Experience' },
        { link: '#portfolio', label: 'Portfolio' },
        { link: '#skills', label: 'Skills' },
        { link: '#education', label: 'Education' },
        { link: '#about', label: 'About' }
    ];

    return (
        <nav>
            <NavWrapper>
                <NamedLink href='#home'>Gabriel Vasile</NamedLink>
                <div>
                    {links.map(({ link, label }) => (
                        <NavLink key={label} href={link}>
                            {label}
                        </NavLink>
                    ))}
                </div>
            </NavWrapper>
        </nav>
    );
}

export default Menu;