import styles from './About.module.css'
import { useOutletContext, Link } from 'react-router-dom'

const About = () => {
  return (
    <section>
      <h2 className={styles.title}>About me</h2>
      <div className={styles.status}>
        <h3>Nothing to see here</h3>
        <Link to={'/'}>
          <button>Home</button>
        </Link>
      </div>
    </section>
  )
}
export default About
