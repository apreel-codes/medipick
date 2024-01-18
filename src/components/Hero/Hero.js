import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className='hero text-center w-[90%] mx-auto mt-[6rem]'>
            <h1 className='md:text-[3rem] text-[2.1rem] font-semibold leading-11'>Providing Professional<br/>
            and Caring <span className=''>Health Services</span></h1>
            <p className='md:w-[40%] w-[90%] mx-auto mt-2'>Our commitment is to ensure that every patient receives top-notch medical care with a personal touch, creating an environment where health and well-being thrive.</p>
            <div className='buttons mt-7 w-[270px] mx-auto flex flex-row justify-between items-center'>
                <button className='work-button'>How we work</button>
                <button className='app-button'>Download app</button>
            </div>
        </div>
    )
}

export default Hero;