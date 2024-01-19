import React, { useState } from 'react';
import './NavBar.css';

const NavBar = () => {
    const [isToggled, setIsToggled] = useState(false);

    const showSideNav = () => {
        setIsToggled(!isToggled)
    }
    return (
        <div>
            <div className='nav-section flex flex-row justify-between items-center w-[90%] mx-auto'>
                <strong>MediPick</strong>
                <div className='md:flex md:flex-row md:justify-between md:items-center md:w-[61%] md:block hidden'>
                    <div className='navs'>
                        <ul className='md:flex md:flex-row md:justify-between md:items-center w-[320px]'>
                            <li className=''><a href='#home'>Home</a></li>
                            <li className=''><a href='#facilities'>Facilities</a></li>
                            <li className=''><a href='#contact'>Contact us</a></li>
                            <li className=''><a href='#career'>Career</a></li>
                        </ul>
                    </div>
                    <button className='button'>Login</button>
                </div>
                <img src="./images/hamburger.png" className='md:hidden block' onClick={showSideNav}/>
            </div>

            <div className= {isToggled ? 'md:hidden block side-nav pt-8 w-[90%] mx-auto' : 'hidden'}>
                    <div className='flex flex-row justify-between items-center'>
                        <span></span>
                        <img className= {isToggled ? 'block' : 'hidden'} src="./images/close.png" onClick={showSideNav}/> 
                    </div>
                    
                    <div className= { isToggled ? 'block mt-8 text-center' : 'hidden'}>
                        <div className='side-navs'>
                            <ul className='space-y-5'>
                                <li className='text-[1.3rem]'><a href='#home'>Home</a></li>
                                <li className='text-[1.3rem]'><a href='#facilities'>Facilities</a></li>
                                <li className='text-[1.3rem]'><a href='#contact'>Contact us</a></li>
                                <li className='text-[1.3rem]'><a href='#career'>Career</a></li>
                            </ul>
                        </div>
                        <button className='button mt-8 text-[1.3rem] bg-[#2020EA] py-[.5rem] px-[1.5rem] rounded-md text-white'>Login</button>
                    </div>
            </div>
        </div>
        
    )
}

export default NavBar;