import React from 'react'
import { developer } from '../../assets'

const About = () => (
    <div className='flex flex-row items-center justify-center my-3 md:my-6 sm:px-0 px-6 lg:pt-10'>
        <div className="flex flex-col rounded-2xl bg-transparent sm:max-w-xl md:max-w-4xl sm:flex-row md:px-8 md:py-4">
            <img
                className="h-auto w-full object-cover xs:w-60 xs:h-full sm:w-60 sm:h-48 md:w-full md:h-60 p-4 md:px-8 self-center"
                src={developer}
                alt="about-logo" />
            <div className="flex flex-col justify-start p-6">
                <h5
                    className="font-poppins mb-2 text-xl lg:text-2xl font-semibold text-green uppercase self-center sm:self-start">
                    About me
                </h5>
                <p className="mb-4 font-poppins font-normal text-dimWhite text-center sm:text-start">
                    A full-stack developer who has always been passionate about coding. Although I have gained considerable knowledge in this field, I am always eager to learn more, and I believe that keeps me motivated. I am constantly seeking opportunities and collaborations to enhance my expertise, particularly in cutting-edge technologies, programming languages, and applications.
                </p>
            </div>
        </div>
    </div>
)

export default About