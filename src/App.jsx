import React from 'react'
import styles from './styles'


import {
  MainNav
} from './components'

const App = () => (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`xl:max-w-[1280px] w-full`}>
        <MainNav />
      </div>
    </div>
  </div>
)

export default App