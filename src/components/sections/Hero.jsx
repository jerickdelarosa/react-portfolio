import React from 'react'
import styles from '../../styles'
import { biancake } from '../../assets'

const Hero = () => (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className='flex flex-row justify-between items-center w-full'>
                <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
                    Full Stack<br className='sm:block hidden' /> {" "}
                    <span className='text-radial-green'> Web Developer</span> {" "}
                </h1>
            </div>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
            <img src={biancake} alt="robot" className='rounded-full w-[80%] h-[100%] relative z-[5]' />
        </div>
    </section>
)

export default Hero