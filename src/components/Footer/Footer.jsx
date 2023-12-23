import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>columkelly 2023</p>
      <span className={styles.iconWrapper}>
        <a href='https://github.com/columk1' target='_blank' rel='noreferrer'>
          <FontAwesomeIcon className={styles.icon} icon={faGithub} />
        </a>
      </span>
    </footer>
  )
}
export default Footer
