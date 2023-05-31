import React from 'react'
import styles from './styles'

import {
  MainNav,
  Hero,
  TechStack,
  Skills,
  Portfolio,
  Contact,
  Footer
} from './components'

const App = () => (
  <div className={`w-full overflow-hidden background-container `}>

    <div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`xl:max-w-[1280px] w-full`}>
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

export default App