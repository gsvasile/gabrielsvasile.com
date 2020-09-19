import React from 'react';
import './Menu.css';

const Menu = () => {
    const links = [
        { link: '#home', label: 'Home' },
        { link: '#skills', label: 'Skills' },
        { link: '#experience', label: 'Experience' },
        { link: '#portfolio', label: 'Portfolio' },
        { link: '#about', label: 'About' }
    ];

    return (
        <nav>
            <div className='navbar z-2 fixed w-100 o-90 flex content-center justify-between items-center'>
                <a className='link white-90 ml4 ttu fw5 f4' href='#home'>Gabriel Vasile</a>
                <div>
                    {links.map(({ link, label }) => (
                        <a key={label} className='link white-90 mr3 f6' href={link}>
                            {label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Menu;