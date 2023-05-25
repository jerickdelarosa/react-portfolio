import React from 'react'
import { mechKeeb1 } from '../../assets'
import { projects } from '../../constants'

const ProjectTemplate = ({ title, description, projectImg, languages, developers, index }) => (
    <div className="mt-3 lg:-mx-6 md:flex lg:items-center">
        <img className={`order-1 ${index % 2 == 0 ? "md:order-2" : "md:order-1"} object-cover w-full md:mx-6 md:w-1/2 rounded-xl sm:h-72 md:h-96`} src={projectImg} alt="" />

        <div className={`order-2 ${index % 2 == 0 ? "md:order-1" : "md:order-2"} mt-6 md:w-1/2 md:mt-0 md:mx-6`}>
            <p className="font-poppins block text-xl font-semibold uppercase text-green md:text-2xl">
                {title}
            </p>

            <p className="font-poppins mt-3 text-sm text-dimWhite md:text-base">
                {description}
            </p>

            <div className="flex items-center mt-6">
                {languages.map((lang, index) => (
                    <p key={`${lang.id}-${index}`} className="inline-block mx-1 font-poppins tracking-wider rounded bg-dimGreen px-4 pb-2 pt-2 text-xs font-bold uppercase text-white">
                        {lang.title}
                    </p>
                ))}
            </div>

            {developers.map((dev, index) => (
                <div key={`${dev.id}-${index}`} className="flex items-center mt-6">
                    <img className="object-cover object-center w-10 h-10 rounded-full" src={projectImg} alt="" />

                    <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">{dev.title}</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{dev.designation}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
)

const Portfolio = () => (
    <section id="portfolio" className={`flex flex-col sm:my-16 my-4 sm:px-16 px-0`}>
        <div className='flex flex-col items-center justify-center sm:items-start my-3 md:my-6 px-6 sm:px-0 lg:px-20'>
            <h5
                className="font-poppins mb-2 text-xl lg:text-2xl font-semibold text-green uppercase self-center sm:self-start">
                Portfolio
            </h5>
            <p className="mb-4 font-poppins font-normal lg:text-[18px] text-dimWhite text-center sm:text-start">
                Every project is a distinct work of development.
            </p>
        </div>

        <div className="mx-2 xs:mx-8 ss:mx-14 sm:mx-auto lg:px-16 px-0 self-center">

            {projects.map((project, index) => (
                <ProjectTemplate key={project.id} {...project} index={index} />
            ))}

        </div>
    </section>
)

export default Portfolio