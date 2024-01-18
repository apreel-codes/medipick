import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog md:w-[83%] w-[85%] mx-auto'>
            <div className='md:mt-28 mt-20'>
                <h3 className='text-center font-medium text-[2.3rem]'>Our Medical Blog</h3>
                <div className='md:mx-auto md:w-[40%] md:flex md:flex-row md:justify-between md:items-center md:space-x-7 md:space-x-8 mt-4'>
                    <p>Join us as we explore topics that empower you to made informed decisions about your well-being.</p>
                    <button className='md:w-[10rem] w-[50%] mx-auto grid button md:mt-0 mt-5'>View all</button>
                </div>
            </div>
            

            <div className='md:flex md:flex-row md:justify-between md:items-center md:space-x-4 space-y-6 md:space-y-0 mt-7'>
                <div className='md:w-[70%] bg-gray-100 p-5 card'>
                    <img src="./images/health.jpg" className='image w-[100%] md:h-[650px] h-[230px]'/>
                    <div className='mt-4'>
                        <h4>Knowledge Is The Key To Taking Charge Of Your Health</h4>
                        <p className='mt-3 text-gray-400'>Navigating the world of medical tests and screenings can be daunting. This blog post breaks down common tests, their purposes, and what individuals can expect. Empower yourself...</p>
                        <div className='flex flex-row justify-between items-center w-[6.2rem] mt-5 cursor-pointer'>
                                <a href='#' className='text-[#0000FF]'>Read now</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width=".8rem" height=".8rem" fill="#0000FF" viewBox= "0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
                        </div>
                    </div>
                </div>
                <div className='md:w-[30%] md:space-y-4 space-y-6'>
                    <div className='bg-gray-100 p-4 card '>
                        <img src="./images/fruits.jpg" className='image w-[100%] h-[230px]'/>
                        <div className='mt-4'>
                            <h4>The Benefits Of Plant-Powered Eating</h4>
                            <p className='mt-3 text-gray-400'>This blog post celebrates the wonders of a plant-based diet, highlighting the myriad health...</p>
                            <div className='flex flex-row justify-between items-center w-[6.2rem] mt-5 cursor-pointer'>
                                <a href='#' className='text-[#0000FF]'>Read now</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width=".8rem" height=".8rem" fill="#0000FF" viewBox= "0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
                            </div>
                        </div>
                    </div>
                    <div className='bg-gray-100 p-4 card '>
                        <img src="./images/doctor.jpg" className='image w-[100%] h-[230px]'/>
                        <div className='mt-4'>
                            <h4>Understanding Health Insurance Basics</h4>
                            <p className='mt-3 text-gray-400'>Navigate through the maze of insurance options as we delve into different types of health...</p>
                            <div className='flex flex-row justify-between items-center w-[6.2rem] mt-5 cursor-pointer'>
                                <a href='#' className='text-[#0000FF]'>Read now</a>
                                <svg xmlns="http://www.w3.org/2000/svg" width=".8rem" height=".8rem" fill="#0000FF" viewBox= "0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;