import React from 'react';
import './Footer.css';



const Footer = () => {
    return (
        <div className='footer md:flex md:flex-row md:justify-between md:items-center md:py-14 md:px-36 py-8 px-8 mt-24'>
            <div className='space-y-12'>
                <div>
                    <strong className='text-white'>MediPick</strong>
                    <p className='text-gray-500 mt-3'>A platform that helps you make appointments with specialist doctors easily and with fast service.</p>
                </div>
                <div>
                    <div className='flex flex-row items-center space-x-6'>
                        <p className='text-gray-300 text-[2rem]'>MediPick@gmail.com</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.8rem" fill="#fff" viewBox= "0 0 25 25" className='cursor-pointer'><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
                    </div>
                    {/* <div className='flex flex-row items-center space-x-3 mt-3'>
                        <img src="./images/twitter.png" className='w-6 h-6'/>
                        <img src="./images/linkedin.jpg" className='w-6 h-6'/>
                        <img src="./images/facebook.jpg" className='w-6 h-6'/>
                    </div> */}
                </div>
            </div>
            <div className='md:flex md:flex-row md:justify-between md:items-center md:space-x-20 md:mt-0 mt-10 md:space-y-0 space-y-8'>
                <ul>
                    <li>Legal</li>
                    <li><a href='#'>Term</a></li>
                    <li><a href='#'>Privacy</a></li>
                    <li><a href='#'>Cookies</a></li>
                    <li><a href='#'>Settings</a></li>
                </ul>

                <ul>
                    <li>Resources</li>
                    <li><a href='#'>Blog</a></li>
                    <li><a href='#'>Events</a></li>
                    <li><a href='#'>Help Center</a></li>
                    <li><a href='#'>Support</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;