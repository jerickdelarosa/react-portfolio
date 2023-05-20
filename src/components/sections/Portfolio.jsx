import React from 'react'
import { mechKeeb1 } from '../../assets'

const Portfolio = () => (
    <section id="portfolio" className={`flex flex-col sm:my-16 my-4 sm:px-16 px-0`}>
        <div className='flex flex-col items-center justify-center sm:items-start my-3 md:my-6 px-6 sm:px-0 lg:px-20'>
            <h5
                className="font-poppins mb-2 text-xl lg:text-2xl font-semibold text-green uppercase self-center sm:self-start">
                Portfolio
            </h5>
            <p className="mb-4 font-poppins font-normal lg:text-xl text-dimWhite text-center sm:text-start">
                Every project is a distinct work of development.
            </p>
        </div>
        <div className={`flex flex-col justify-center items-center xl:px-0 sm:px-0 px-6`}>
            <div
                className="flex flex-col rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:flex-row md:justify-between ">
                <div className='m-4 lg:m-4'>
                    <img
                        className="h-96 w-full lg:w-[1200px] rounded-xl object-cover rounded-2xl"
                        src={mechKeeb1}
                        alt="mechanical-keyboard-3" />
                </div>
                <div className="flex flex-col justify-start lg:p-8 lg:mt-8">
                    <h5
                        className="font-poppins mb-2 text-xl lg:text-2xl font-semibold text-green uppercase self-center">
                        Anne Pro 2
                    </h5>
                    <p className="mb-4 text-xl text-dimWhite text-center">
                        Probably the best 60% mechanical keyboard with the easy software & outstanding customizability.
                    </p>
                    <p className="text-white text-center">
                        React & Tailwind
                    </p>
                </div>
            </div>
        </div>
    </section>
)

export default Portfolio