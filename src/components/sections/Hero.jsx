import React from 'react'
import styles from '../../styles'
import { biancake, sana } from '../../assets'
import { socialMedia } from '../../constants'

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY} sm:px-16 px-0`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 ss:ml-0 text-center md:text-start`}>
            <h1 className='font-poppins font-semibold ss:text-[72px] xs:text-[42px] text-[32px] text-white sm:leading-[75px] self-center md:self-start'>
                Full Stack<br className='sm:block hidden' /> {" "}
                <span className='text-green'>Developer</span> {" "}
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5 self-center md:self-auto`}>Hi, I'm Bianca Yao. A passionate Front-End Developer based in Manila, Philippines.</p>
            <div className={`flex flex-row mt-8 self-center md:self-auto`}>
                {socialMedia.map((social, index) => (
                    <img key={`${social.id}-${index}`} src={social.icon} alt={social.id} className={`w-[26px] h-[26px] object-contain cursor-pointer ${index !== socialMedia.length - 1 ? "mr-4" : "mr-0"}`} />
                ))}
            </div>
        </div>
        <div className={`flex-1 flex justify-center items-center flex-row md:my-0 my-10 relative`}>
            <img src={sana} alt="robot" className='rounded-full sm:w-80 xl:w-96 w-[80%] sm:h-80 xl:h-96 h-[80%]' />
        </div>
    </section>
)

export default Hero