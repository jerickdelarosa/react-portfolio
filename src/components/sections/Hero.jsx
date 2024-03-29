import React from 'react'
import styles from '../../styles'
import { jedero } from '../../assets'
import { mediaLinks } from '../../constants'
import Fade from 'react-reveal/Fade'

const Hero = () => (
    /* <section id="home" className={`flex md:flex-row flex-col sm:py-4 py-4 sm:px-16 px-0`}>
        <Fade duration={500}>
            <div className={`flex-1 flex justify-center items-center flex-row mb-6 md:mb-0 relative`}>
                <img src={jedero} alt="robot" className='rounded-full sm:w-80 md:w-90 xl:w-96 w-[80%] sm:h-80 md:h-80 xl:h-96 h-[80%]' />
            </div>
        </Fade>
        <Fade cascade duration={500}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ss:ml-0 text-center md:text-start`}>
                <h1 className='font-poppins font-semibold md:text-[48px] sm:text-[48px] xs:text-[42px] text-[32px] text-white md:leading-[64px] sm:leading-[64px] self-center md:self-start'>
                    Full Stack<br className='block' /> {" "}
                    <span className='text-green'>Web Developer</span> {" "}
                </h1>
                <p className={`${styles.paragraph} max-w-[470px] mt-2 self-center md:self-auto`}>Hi, I'm <span className="text-green font-semibold">Jerick Dela Rosa</span>. A passionate Full Stack Developer based in Bulacan, Philippines.</p>
                <Fade cascade duration={750} right>
                    <div className={`flex flex-row mt-3 self-center md:self-auto`}>
                        {mediaLinks.map((media, index) => (
                            <a href={media.link} key={`${media.id}-${index}`} target="_blank" rel="noreferrer">
                                <img src={media.icon} alt={media.id} className={`w-[26px] h-[26px] object-contain cursor-pointer ${index !== mediaLinks.length - 1 ? "mr-4" : "mr-0"}`} />
                            </a>
                        ))}
                    </div>
                </Fade>
            </div>
        </Fade>
    </section> */

    <section id="home" className={`flex md:flex-row flex-col sm:py-4 py-4 sm:px-16 px-0 lg:mx-32`}>
        <Fade duration={500}>
            <div className={`flex-1 flex justify-center items-center flex-row mb-6 md:mb-0 relative`}>
                <img src={jedero} alt="robot" className='rounded-full sm:w-80 md:w-90 xl:w-96 w-[80%] sm:h-80 md:h-80 xl:h-96 h-[80%]' />
            </div>
        </Fade>
        <Fade cascade duration={500}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ss:ml-0 text-center`}>
            <p className={`${styles.paragraph} max-w-[470px] mt-2 self-center`}>Hello, I'm </p>
                <h1 className='font-poppins font-semibold lg:text-[48px] md:text-[44px] sm:text-[44px] xs:text-[40px] text-[36px] text-white md:leading-[64px] sm:leading-[64px] self-center'>
                    Jerick Dela Rosa
                </h1>
                <h1 className='font-poppins font-semibold lg:text-[44px] md:text-[40px] sm:text-[40px] xs:text-[36px] text-[28px] text-white md:leading-[64px] sm:leading-[64px] self-center'>
                    <span className='text-green'>Web Developer</span>
                </h1>

                <Fade cascade duration={1000}>
                    <div className="flex items-center mt-3 self-center">
                        <a className="inline-block mx-1 font-poppins xs:tracking-wider rounded hover:bg-dimGreen border-[#2aa32c] border-2 px-4 pb-2 pt-2 text-xs font-bold uppercase text-white cursor-pointer" href="/assets/pdf/Dela Rosa, Jerick T. - CV 2023.pdf" target='_blank'>
                                Download CV
                        </a>
                        <a className="inline-block mx-1 font-poppins xs:tracking-wider rounded bg-dimGreen border-2 border-[#2aa32c] px-4 pb-2 pt-2 text-xs font-bold uppercase text-white cursor-pointer" href="#contact">
                            Contact Info
                        </a>
                    </div>
                </Fade>

                <Fade cascade duration={750} right>
                    <div className={`flex flex-row mt-5 self-center`}>
                        {mediaLinks.map((media, index) => (
                            <a href={media.link} key={`${media.id}-${index}`} target="_blank" rel="noreferrer" className='cursor-pointer'>
                                <img src={media.icon} alt={media.id} className={`w-[26px] h-[26px] object-contain cursor-pointer ${index !== mediaLinks.length - 1 ? "mr-4" : "mr-0"}`} />
                            </a>
                        ))}
                    </div>
                </Fade>
            </div>
        </Fade>
    </section>

)

export default Hero