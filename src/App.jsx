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

    <div className={`${styles.paddingX} ${styles.flexCenter} border-b-2 border-slate-800`}>
      <div className={`xl:max-w-[1280px] w-full`}>
        <MainNav />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} pt-4 sm:pt-12 md:pt-24`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <TechStack />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart} mt-4 sm:mt-20 md:mt-24`}>
      <div className={`${styles.boxWidth}`}>
        <Skills />
      </div>
    </div>

  </div>
)

export default App