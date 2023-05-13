import { useState, useEffect } from 'react'
import styles from '../../styles'
import { skills } from '../../constants'

const screenBreakpoints = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    largeDesktop: 1200
}

const Skills = () => {
    return (
        <section id="about" className={`flex md:flex-row flex-col sm:py-16 py-4 sm:px-16 px-0`}>
            <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-0 px-6 ss:ml-0 text-center md:text-start`}>
                <div className='flex flex-col md:flex-row'>
                    {skills.map((skill, index) => (
                        <div key={index} className=" flex flex-col rounded-2xl bg-white sm:max-w-xl sm:flex-row md:max-w-xs md:flex-col my-4 md:mx-2 lg:mx-4 ">
                            <img className="h-auto w-full rounded-t-lg object-contain sm:w-60 sm:h-48 sm:rounded-none md:w-full md:h-64 md:rounded-none px-4 py-4 self-center" src={skill.image} alt={skill.id} />
                            <div className="flex flex-col justify-start sm:justify-center md:justify-start p-6">
                                <h5 className="font-poppins mb-2 text-xl font-semibold tracking-tight text-gray-900 uppercase self-center sm:self-start md:self-center">
                                    {skill.title}
                                </h5>
                                <p className="mb-4 font-poppins font-normal text-gray-500 text-center sm:text-start md:text-center">
                                    {skill.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/*
                <div key={index} className="flex flex-col rounded-lg bg-white md:max-w-xl md:flex-row my-4 md:mx-4">
                    <img
                        className="h-96 w-full rounded-t-lg object-contain md:h-auto md:w-48 md:rounded-none md:rounded-l-lg px-4"
                        src={skill.image}
                        alt={skill.id} />
                    <div className="flex flex-col justify-start p-6">
                        <h5 className=" font-poppins mb-2 text-xl font-medium text-neutral-800 uppercase">
                            {skill.title}
                        </h5>
                        <p className="mb-4 text-base text-neutral-600">
                            {skill.content}
                        </p>
                    </div>
                </div>
                */}
            </div>
        </section>
    )
}

export default Skills