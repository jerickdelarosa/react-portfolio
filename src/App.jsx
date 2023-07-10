import React, { useEffect, useState } from 'react'
import styles from './styles'

import {
  MainNav,
  Hero,
  TechStack,
  Skills,
  Portfolio,
  Contact,
  Footer,
  ScrollToTop
} from './components'

const App = () => {
  const [isNavFixed, setIsNavFixed] = useState(false)

  const toggleNavPosition = () => {
    if (window.scrollY > 50) {
      setIsNavFixed(true)
    } else {
      setIsNavFixed(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleNavPosition)

    return () => {
      window.removeEventListener('scroll', toggleNavPosition)
    }
  }, [])

  return (
    <div className={`w-full overflow-hidden background-container `}>

      <div>
        <ScrollToTop />
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`xl:max-w-[1280px] w-full transition ease-in-out duration-1000`}>
            <MainNav />
          </div>
        </div >

        <div className={`${styles.paddingX} ${styles.flexStart} pt-4 sm:pt-12 md:pt-24`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
            <TechStack />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexStart} mt-4 sm:mt-20 md:mt-24`}>
          <div className={`${styles.boxWidth}`}>
            <Skills />
            <Portfolio />
            <Contact />
          </div>
        </div>

        <div className={`${styles.paddingX} ${styles.flexStart} mt-4 bg-darkPrimary`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>

      </div>

    </div >
  )
}

export default App