import styles from './About.module.css'
import { useOutletContext, Link } from 'react-router-dom'

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.content}>
        <h2 className={styles.h2}>About me</h2>
        <Link to={'/'}>
          <button>Go Back</button>
        </Link>
      </div>
    </section>
  )
}
export default About
