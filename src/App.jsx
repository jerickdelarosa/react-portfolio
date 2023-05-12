import React from 'react'
import styles from './styles'


import {
  MainNav,
  Hero,
  TechStack,
  Skills
} from './components'

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`xl:max-w-[1280px] w-full`}>
        <MainNav />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} py-4 sm:py-36`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <TechStack />
      </div>
    </div>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Skills />
      </div>
    </div>
  </div>
)

export default App