import React from 'react';
import icons from '../../icons/icons';
import './Home.css';

const Home = () => {

    return (
        <section id='home' className='bg-center cover flex flex-column vh-100 white justify-center'>
            <p className='f4 bg-black-10'>Hello! My name is</p>
            <h1 className='f1 bg-black-10'>Gabriel Vasile.</h1>
            <p className='f3 bg-black-10 tracked'>I am a forward-thinking Software Engineer.</p>
            <div className='pt6 center w-90'>
                <div className='home-grow o-80 fl w-50'>
                    <a className='link'
                        href='https://www.linkedin.com/in/gabrielsvasile'
                        target='_'
                    >
                        <img
                            className='h-10 w5'
                            alt='LinkedIn®'
                            src={icons.linkedinlogo}
                        />
                    </a>
                </div>
                <div className='home-grow o-80 fl w-50'>
                    <a className='link'
                        href='https://github.com/gsvasile'
                        target='_'
                    >
                        <img
                            className=' w5'
                            alt='GitHub Logo'
                            src={icons.githublogo}
                        />
                        <img
                            className='w3'
                            alt='GitHub Mark'
                            src={icons.githubmark}
                        />
                    </a>
                </div>
            </div>
        </section>
    );
}









export default Home