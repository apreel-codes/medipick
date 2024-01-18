import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='nav-section md:flex md:flex-row md:justify-between md:items-center w-[90%] mx-auto'>
            <strong>MediPick</strong>
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
    )
}

export default NavBar;