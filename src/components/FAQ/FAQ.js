import React, { useState } from 'react';
import './FAQ.css';
import { faq } from './FAQdata';


const FAQ = () => {

const [isFAQToggled, setIsFAQToggled] = useState(false);


const showFAQ = () => {
    setIsFAQToggled(!isFAQToggled)
}



    return (
        <div className='faq md:w-[83%] w-[85%] md:space-x-20 mx-auto md:flex md:flex-row md:justify-between md:items-center'>
            <div className='faq-group md:w-6/12'>
                <h3 className='md:text-[2.5rem] text-[2rem] font-medium md:w-[23rem] md:leading-[3rem]'>Frequently Asked 
                    Question</h3>
                <p className='text-[1rem] md:text-[1.2rem] text-justify mt-3'>Quick answers to questions you may have. Can't find what you're looking for?</p>
                <div className='flex items-center mt-5 cursor-pointer'>
                    <a href='#' className='text-[#0000FF]'>View documentation</a>
                    <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width=".8rem" height=".8rem" fill="#0000FF" stroke='#0000FF' viewBox= "0 0 25 25"><path d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z" data-name="Right"/></svg>
                </div>
                <img src='./images/molecules.jpg' className='md:h-[420px] md:w-[100%] mt-12'/>
            </div>


            <div className='mt-12 md:mt-0 md:w-6/12'>
                {
                    faq?.map((f, index) => (
                        <div className='mt-3 border p-3 rounded-md'>
                            <div className='flex flex-row justify-between items-center space-x-2'>
                                <h5 className='md:text-[1.3rem] font-medium'>{f.title}</h5>
                                <div className='fa-stack'>
                                    <img className= { isFAQToggled ? "plus fa-stack-1x h-4 w-4" : "minus" } src="./images/minus.png"/>
                                    <img className= { isFAQToggled ? "minus fa-stack-1x h-4 w-4" : "plus" } src="./images/plus.png"/>
                                </div>
                            </div>
                            <p className= { isFAQToggled ? "block mt-3 text-gray-500" : "hidden"}>{f.content}</p>
                            {/* <p className= "block mt-3 text-gray-500">{f.content}</p> */}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default FAQ;