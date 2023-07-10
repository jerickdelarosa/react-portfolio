import React from 'react'
import { mediaLinks } from '../../constants'

const Footer = () => (
    <footer>
        <div className="container px-5 py-8 mx-auto sm:mx-0 flex items-center sm:flex-row flex-col">
            <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg> */}
                <span className="ml-0 sm:ml-3 text-xl font-poppins font-semibold uppercase text-white">Jedero</span>
            </a>
            <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-poppins">© 2023 All rights reserved.</p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                {mediaLinks.map((media, index) => (
                    <a href={media.link} key={`${media.id}-${index}`} >
                        <img src={media.icon} alt={media.id} className={`w-[26px] h-[26px] object-contain cursor-pointer ${index !== mediaLinks.length - 1 ? "mr-4" : "mr-0"}`} />
                    </a>
                ))}
            </span>
        </div>
    </footer>
)

export default Footer