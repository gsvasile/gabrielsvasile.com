import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div.attrs({
    className: 'z-2 fixed w-100 o-90 flex content-center justify-between items-center h2 shadow-5'
})`
    background-color: rgb(84 67 25);
`;

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
                <a className='link white-90 ml4 ttu fw5 f4' href='#home'>Gabriel Vasile</a>
                <div>
                    {links.map(({ link, label }) => (
                        <a key={label} className='link white-90 mr3 f6' href={link}>
                            {label}
                        </a>
                    ))}
                </div>
            </NavWrapper>
        </nav>
    );
}

export default Menu;