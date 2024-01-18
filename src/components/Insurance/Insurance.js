import React from 'react';
import { InsuranceImages, insuranceImages } from './InsuranceData';
import './Insurance.css';

const Insurance = () => {
    return (
        <div className='insurance text-center mt-28 bg-gray-100 py-14'>
            <h3 className='font-medium text-[2rem]'>Insurance Patnership</h3>
            <p className='w-[88%] md:w-[45%] mx-auto mt-2'>We understand that maintaining strong business relationships require insurance solutions that are flexible and support mutual growth.</p>
            <div className='insurance-group flex flex-row justify-between items-center mt-14 w-[88%] md:w-[70%] mx-auto'>
                {
                    insuranceImages.map((insurance) => (
                        <img src={insurance.image} className='image md:w-[10%] md:h-[10%] w-[3rem] h-[2.7rem]'/>
                    ))
                }
            </div>
            
        </div>
    )
}

export default Insurance;