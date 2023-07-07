import React from 'react'
import styles from '../../styles'
import { biancake, sana } from '../../assets'
import { mediaLinks } from '../../constants'

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col sm:py-4 py-4 sm:px-16 px-0`}>
        <div className={`flex-1 flex justify-center items-center flex-row mb-6 md:mb-0 relative`}>
            <img src={sana} alt="robot" className='rounded-full sm:w-80 md:w-90 xl:w-96 w-[80%] sm:h-80 md:wh-80 xl:h-96 h-[80%]' />
        </div>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ss:ml-0 text-center md:text-start`}>
            <h1 className='font-poppins font-semibold md:text-[48px] sm:text-[48px] xs:text-[42px] text-[32px] text-white md:leading-[64px] sm:leading-[64px] self-center md:self-start'>
                Full Stack<br className='block' /> {" "}
                <span className='text-green'>Web Developer</span> {" "}
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-2 self-center md:self-auto`}>Hi, I'm Jerick Dela Rosa. A passionate Full Stack Developer based in Manila, Philippines.</p>
            <div className={`flex flex-row mt-3 self-center md:self-auto`}>
                {mediaLinks.map((media, index) => (
                    <a href={media.link} key={`${media.id}-${index}`} >
                        <img src={media.icon} alt={media.id} className={`w-[26px] h-[26px] object-contain cursor-pointer ${index !== mediaLinks.length - 1 ? "mr-4" : "mr-0"}`} />
                    </a>
                ))}
            </div>
        </div>
    </section>
)

export default Hero