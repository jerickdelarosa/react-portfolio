import React from 'react'
import styles from '../../styles'
import { languages } from '../../constants'

const TechStack = () => (
    <div className={`flex flex-col sm:flex-row sm:px-16 px-0`}>
        <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 md:px-8 px-0 ss:ml-0`}>
            <div className='flex flex-col items-center mt-5 sm:mt-8 md:mt-16'>
                <div className={`${styles.flexCenter} flex-col text-center`}>
                    <p className={`font-poppins mb-2 text-xl font-semibold text-white uppercase uppercase`}>Tech Stack</p>
                </div>
                <div className={`${styles.flexCenter} flex-row flex-wrap mt-2 md:mt-4 `}>
                    {languages.map((lang, index) => (
                        <img key={`${lang.id}-${index}`} src={lang.icon} alt={lang.id} className={`w-[48px] h-[48px] ss:w-[54px] ss:h-[54px] object-contain cursor-default my-2 mx-4 ss:my-4 ss:mx-8 ${index !== lang.length - 1 ? "mr-4" : "mr-0"}  cursor-default`} />
                    ))}
                </div>
            </div>
        </div>
    </div>
)

export default TechStack