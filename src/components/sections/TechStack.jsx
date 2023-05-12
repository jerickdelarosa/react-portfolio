import React from 'react'
import styles from '../../styles'
import { languages } from '../../constants'

const TechStack = () => (
    <div className={`flex flex-col sm:flex-row ${styles.paddingX}`}>
        <div className={`flex-1 ${styles.flexCenter} sm:items-start flex-col xl:px-0 sm:px-16 px-6 ss:ml-0`}>
            <div className='flex flex-col md:flex-row items-center my-auto'>
                <div className={`${styles.flexCenter} flex-row xs:flex-col text-center md:border-r-[1px] md:border-dimWhite md:mr-10 md:pr-8`}>
                    <p className={`font-poppins text-white text-[16px] max-w-[470px]`}>Tech Stack</p>
                </div>
                <div className={`${styles.flexCenter} flex-row flex-wrap md:flex-nowrap`}>
                    {languages.map((lang, index) => (
                        <img key={`${lang.id}-${index}`} src={lang.icon} alt={lang.id} className={`w-[42px] h-[42px] object-contain cursor-pointer m-4 ${index !== lang.length - 1 ? "mr-4" : "mr-0"}`} />
                    ))}
                </div>
            </div>
        </div>
    </div>
)

export default TechStack