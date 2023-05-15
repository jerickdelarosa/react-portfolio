import React from 'react'

const Portfolio = () => (
    <section id="portfolio" className={`flex flex-col sm:my-16 my-4 sm:px-16 px-0`}>
        <div className='flex flex-col items-center justify-center sm:items-start my-3 md:my-6 px-6 sm:px-0 lg:px-20'>
            <h5
                className="font-poppins mb-2 text-xl font-semibold text-green uppercase self-center sm:self-start">
                Portfolio
            </h5>
            <p className="mb-4 font-poppins font-normal text-dimWhite text-center sm:text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
        </div>
    </section>
)

export default Portfolio