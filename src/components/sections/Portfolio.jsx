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
{/*         <div className={`flex flex-col justify-center items-center xl:px-0 sm:px-0 px-6`}>
            <div
                className="flex flex-col rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:flex-row md:justify-between ">
                <div className='m-4 lg:m-4'>
                    <img
                        className="h-96 w-full lg:max-w-[100%] rounded-xl object-cover rounded-2xl"
                        src={mechKeeb1}
                        alt="mechanical-keyboard-3" />
                </div>
                <div className="flex flex-col justify-start lg:p-8">
                    <div className="block rounded-lg text-center">
                        <div className="px-6 py-3 uppercase font-poppins font-semibold text-green min-h-[10%]">
                            <p className='tracking-wider text-lg'>Web App</p>
                        </div>
                        <div className='min-h-[90%]'>
                            <h5
                            className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                Special title treatment
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                With supporting text below as a natural lead-in to additional
                                content.
                            </p>
                        </div>
                        <div className='flex flex-row justify-center items-center'>
                            <span className="inline-block rounded bg-green px-3 py-1 mx-2 text-sm font-medium uppercase text-white">React</span>
                            <span className="inline-block rounded bg-green px-3 py-1 mx-2 text-sm font-medium uppercase text-white">Tailwind</span>  
                        </div>     
                        <div className="border-t-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
                            2 days ago
                        </div>
                    </div>
                </div>
            </div>
        </div> */}

        <div class="container px-6 py-10 mx-auto">
        <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h1>

        <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
            <img class="object-cover w-full lg:mx-6 lg:w-1/2 rounded-xl h-72 lg:h-96" src={mechKeeb1} alt="" />

            <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
                <p class="text-sm text-blue-500 uppercase">category</p>

                <a href="#" class="block mt-4 text-2xl font-semibold text-gray-800 hover:underline dark:text-white md:text-3xl">
                    All the features you want to know
                </a>

                <p class="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure veritatis sint autem nesciunt,
                    laudantium quia tempore delect
                </p>

                <a href="#" class="inline-block mt-2 text-blue-500 underline hover:text-blue-400">Read more</a>

                <div class="flex items-center mt-6">
                    <img class="object-cover object-center w-10 h-10 rounded-full" src={mechKeeb1} alt="" />

                    <div class="mx-4">
                        <h1 class="text-sm text-gray-700 dark:text-gray-200">Amelia. Anderson</h1>
                        <p class="text-sm text-gray-500 dark:text-gray-400">Lead Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
)

export default Portfolio