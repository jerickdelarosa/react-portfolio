import React from 'react'
import { location, phoneCall, mail } from '../../assets'

const Contact = () => {
    return (
        <section id="contact" className={`sm:my-16 my-4 sm:px-16 px-0`}>
            <div className="my-3 md:my-6 px-6 sm:px-0 lg:px-16 pt-10">
                <div className="flex flex-col w-full mb-14">
                    <h5 className="font-poppins mb-2 text-xl lg:text-2xl font-semibold text-green uppercase text-center sm:text-start">
                        Contact
                    </h5>
                    <p className="lg:w-2/3 text-center sm:text-start leading-relaxed mb-4 font-poppins font-normal lg:text-[18px] text-dimWhite ">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-green object-cover object-center flex-shrink-0 rounded-full mr-4 p-2 " src={location} />
                            <div className="flex-grow overflow-x-hidden">
                                <h2 className="text-base uppercase font-semibold font-poppins text-green">Location</h2>
                                <p className="font-poppins text-dimWhite text-sm">Hagonoy, Bulacan, PH</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-green object-cover object-center flex-shrink-0 rounded-full mr-4 p-2" src={phoneCall} />
                            <div className="flex-grow overflow-x-hidden">
                                <h2 className="text-base uppercase font-semibold font-poppins text-green">Phone</h2>
                                <p className="font-poppins text-dimWhite text-sm">+63 987-654-3210</p>
                            </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <img alt="team" className="w-16 h-16 bg-green object-cover object-center flex-shrink-0 rounded-full mr-4 p-2" src={mail} />
                            <div className="flex-grow overflow-x-hidden">
                                <h2 className="text-base uppercase font-semibold font-poppins text-green">Mail</h2>
                                <a href="mailto:delarosajerick26@gmail.com" className="font-poppins text-dimWhite hover:text-sky-500 text-sm ">delarosajerick26@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact