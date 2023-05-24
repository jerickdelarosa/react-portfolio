import React from 'react'
import { mechKeeb1 } from '../../assets'

const ProjectTemplate = ({title, description, projectImg}) => (
    <div className="mx-2 xs:mx-8 ss:mx-14 sm:mx-auto lg:px-16 px-0 self-center">
        <div className="mt-3 lg:-mx-6 lg:flex lg:items-center">
            <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl sm:h-72 lg:h-96" src={projectImg} alt="" />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p className="text-sm text-blue-500 uppercase">category</p>

                <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                    {title }
                </a>

                <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    {description }
                </p>

                <a href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                <div className="flex items-center mt-6">
                    <img className="object-cover object-center w-10 h-10 rounded-full" src={mechKeeb1} alt="" />

                    <div className="mx-4">
                        <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                    </div>
                </div>
            </div>
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
            <p className="mb-4 font-poppins font-normal lg:text-xl text-dimWhite text-center sm:text-start">
                Every project is a distinct work of development.
            </p>
        </div>

        <div className="mx-2 xs:mx-8 ss:mx-14 sm:mx-auto lg:px-16 px-0 self-center">
            <div className="mt-3 lg:-mx-6 lg:flex lg:items-center">
                <img className="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl sm:h-72 lg:h-96" src={mechKeeb1} alt="" />

                <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                    <p className="text-sm text-blue-500 uppercase">category</p>

                    <a href="#" className="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                        All the features you want to know
                    </a>

                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                        laudantium quia tempore delect
                    </p>

                    <a href="#" className="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                    <div className="flex items-center mt-6">
                        <img className="object-cover object-center w-10 h-10 rounded-full" src={mechKeeb1} alt="" />

                        <div className="mx-4">
                            <h1 className="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                            <p className="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)

export default Portfolio