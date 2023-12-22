import styles from './Hero.module.css'
import { NavLink } from 'react-router-dom'
const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h2 className={styles.h1}>Full Stack Web Development and Design</h2>
        <p>
          This website has some subtext that goes here under the main title. It's a smaller font and
          it says something about me.
        </p>
        <NavLink to={'/shop'}>
          <button>View Projects</button>
        </NavLink>
      </div>
      <div className={styles.heroImg}>
        <span className='material-symbols-outlined'>favorite</span>
      </div>
    </section>
  )
}

export default Hero
