import React from 'react';
import './Appointment.css';
import { appointData, doctors } from '../Appointment/AppointData';

const Appointment = () => {
    return (
        <div>
            <div className='appointment md:w-[90%] w-[85%] mx-auto text-center mt-20'>
                <h2 className='md:text-[2.1rem] text-[1.8rem] font-medium'>Easy Doctor's Appointment</h2>
                <p>Your journey to better health starts with a simple, efficient, and patient-focused appointment booking process.</p>
                <div className='md:flex md:flex-row md:justify-between md:items-center grid grid-cols-2 gap-4 mt-10 md:w-[90%] mx-auto'>
                    {
                        appointData.map((appoint) => (
                                <div className='button bg-gray-100 py-[.7rem] px-[1rem] rounded-full flex flex-row justify-between items-center md:w-[10rem]'><img src={appoint.image} className='h-6 w-6'/> <span className='w-full ml-2 text-left text-gray-500'>{appoint.title}</span></div>
                            
                        ))
                    }
                </div>
            </div>
            

            <div className='doctors md:w-[81%] w-[87%] mx-auto mt-20'>
                <div className='flex flex-row justify-between items-center'>
                    <p>Recommended for you</p>
                    <div className='cursor-pointer see-more flex flex-row justify-between items-center w-[6rem]'>
                        <span className=''><a href='#see-more'>See more</a></span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox= "0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
                    </div>
                </div>
                <div className='md:flex md:flex-row md:justify-between md:items-center md:space-x-4'>
                    {
                        doctors.map((doctor) => (
                            <div className='border card p-3 text-left mt-6'>
                                <img src={doctor.image} className='image'/>
                                <div className='mt-5 space-y-1'>
                                    <p className='text-lg font-medium'>dr. {doctor.name}</p>
                                    <p className='flex flex-row justify-between items-center w-[4.9rem] text-sm text-gray-400'><img className='h-3 w-3' src='./images/portfolio.png'/>{doctor.experience}</p>
                                    <p className='flex flex-row justify-between items-center w-[2.6rem] text-sm text-gray-400'><img className='h-3 w-3' src='./images/star.png'/><span className=''>{doctor.rating.toFixed(1)}</span></p>
                                </div>
                                <button className='button w-full mt-5'>Book now</button>
                            </div>
                        ))
                    }
                </div>
            </div>
            
        </div>
    )
}

export default Appointment;