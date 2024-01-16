import styles from './Hero.module.css'
import { NavLink, Link } from 'react-router-dom'
import Blob from '../Blob/Blob'
import GlobeIcon from '../icons/GlobeIcon'
import SquaresIcon from '../icons/SquaresIcon'
import AsteriskIcon from '../icons/AsteriskIcon'
import CirclesIcon from '../icons/CirclesIcon'
import ArrowIcon from '../icons/ArrowIcon'
import PointerIcon from '../icons/PointerIcon'

const iconStyles = { width: '40', color: 'var(--textFade)' }

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.symbols}>
          <div className={styles.svgContainer}>
            <GlobeIcon styles={iconStyles} />
          </div>

          <div className={styles.svgContainer}>
            <SquaresIcon styles={iconStyles} />
          </div>

          {/* asterisk */}
          <div className={styles.svgContainer}>
            <AsteriskIcon styles={iconStyles} />
          </div>

          {/* circles */}
          <div className={styles.svgContainerLrg}>
            <CirclesIcon styles={iconStyles} />
          </div>

          {/* arrow */}
          <div className={styles.svgContainer}>
            <ArrowIcon styles={iconStyles} />
          </div>
        </div>

        {/* <div className={styles.heroContent}> */}
        <div className={styles.title}>
          <p>Hi, I'm a full stack developer based in Squamish, British Columbia.</p>
        </div>
        <div className={styles.footer}>
          <PointerIcon styles={{ color: 'var(--textFade)' }} />
        </div>
        <div className={styles.links}>
          <a href='https://github.com/columk1' target='_blank' rel='noreferrer'>
            Github
          </a>
          <a href='mailto:"columk1+website@gmail.com' target='_blank' rel='noreferrer'>
            Email
          </a>
        </div>
        {/* <NavLink to={}> */}
        {/* <a href='#projects'>
            <button>View Projects</button>
          </a> */}
        {/* </div> */}
        {/* </NavLink> */}
      </div>
    </section>
  )
}

export default Hero
