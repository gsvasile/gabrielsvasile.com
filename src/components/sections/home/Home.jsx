import React from 'react';
import Icons from '../../icons/icons';
import './Home.css';

const Home = () => {
    return (
        <section id='home' className='bg-center cover flex flex-column vh-100 white justify-center'>
            <p className='f4'>Hello! My name is</p>
            <h1 className='f1'>Gabriel Vasile.</h1>
            <p className='f3 tracked'>I am a forward-thinking Software Engineer.</p>
            <div className='pt6 center w-80'>
                <div className='home-grow o-80 fl w-50'>
                    <a className='link'
                        href='https://www.linkedin.com/in/gabrielsvasile'
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <img
                            className='wider-only iconLogo'
                            alt='LinkedIn® Logo'
                            src={Icons.linkedinlogo}
                        />
                        <img
                            className='less-wide iconBug'
                            alt='LinkedIn® Bug'
                            src={Icons.linkedinbug}
                        />
                    </a>
                </div>
                <div className='home-grow o-80 fl w-50'>
                    <a className='link'
                        href='https://github.com/gsvasile'
                        target='_blank'
                        rel="noopener noreferrer"
                    >
                        <img
                            className='wider-only iconLogo'
                            alt='GitHub Logo'
                            src={Icons.githublogo}
                        />
                        <img
                            className='less-wide iconBug'
                            alt='GitHub Bug'
                            src={Icons.githubbug}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}









export default Home