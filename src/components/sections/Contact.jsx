import React from 'react'
import { location, mail, resume } from '../../assets'
import Fade from 'react-reveal/Fade'

const Contact = () => {
    return (
        <section id="contact" className={`sm:my-24 my-4 sm:px-16 px-0`}>
            <div className="my-3 md:my-6 xs:px-6 sm:px-0 lg:px-16 pt-10">
                <div className="flex flex-col w-full">
                    <h5 className="font-poppins mb-2 text-xl lg:text-2xl font-semibold text-green uppercase text-center sm:text-start">
                        Contact
                    </h5>
                    <p className="lg:w-2/3 text-center sm:text-start leading-relaxed mb-4 font-poppins font-normal lg:text-[18px] text-dimWhite ">I would love to hear from you. Please get in touch with me through any of the channels listed below, and I'll do my best to get back to you as soon as possible. I appreciate you stopping by, and I look forward to connecting with you soon!</p>
                </div>
                <Fade bottom cascade duration={500}>
                    <div className="flex flex-col ss:flex-row text-center md:text-start mt-8 items-center ss:items-stretch">
                        <div className="p-2 lg:max-w-1/3 md:max-w-1/3 w-10/12 ss:w-full">
                            <a href="https://www.google.com/maps/place/San+Isidro,+Bulacan/@14.8651713,120.7276021,16z/data=!3m1!4b1!4m6!3m5!1s0x3396509283201985:0xa2c6cc7b7e2e669e!8m2!3d14.8635767!4d120.7335581!16s%2Fg%2F11gbf90d4q?entry=ttu" target='_blank' rel="noreferrer">
                                <div className="h-full border-gray-200 border p-4 rounded-lg bg-white flex items-center justify-center flex-col md:flex-row">
                                    <img alt={location} className="w-14 h-14 object-cover object-center shrink-0 md:mr-4 p-2 " src={location} />
                                    <div className="grow">
                                        <h2 className="text-base uppercase font-semibold font-poppins text-green">Location</h2>
                                        <p className="font-poppins text-primary text-sm">Hagonoy, Bulacan, PH</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="p-2 lg:max-w-1/3 md:max-w-1/3 w-10/12 ss:w-full">
                            <a href="mailto:delarosajerick26@gmail.com">
                                <div className="h-full border-gray-200 border p-4 rounded-lg bg-white flex items-center justify-center flex-col md:flex-row">
                                    <img alt={mail} className="w-14 h-14 object-cover object-center shrink-0 md:mr-4 p-2" src={mail} />
                                    <div className="grow">
                                        <h2 className="text-base uppercase font-semibold font-poppins text-green">Gmail</h2>
                                        <p className="font-poppins text-primary text-sm">delarosajerick26</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div className="p-2 lg:max-w-1/3 md:max-w-1/3 w-10/12 ss:w-full">
                            <a href="/assets/pdf/Dela Rosa, Jerick T. - CV 2023.pdf" target='_blank'>
                                <div className="h-full border-gray-200 border p-4 rounded-lg bg-white flex items-center justify-center flex-col md:flex-row">
                                    <img alt={resume} className="w-14 h-14 object-cover object-center shrink-0 md:mr-4 p-2" src={resume} />
                                    <div className="grow">
                                        <h2 className="text-base uppercase font-semibold font-poppins text-green">Resume</h2>
                                        <p className="font-poppins text-primary text-sm">Dela Rosa, Jerick T. - 2023</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </Fade>
            </div>
        </section>
    )
}

export default Contact