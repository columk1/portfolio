import styles from './Footer.module.css'
import GithubIcon from '../icons/GithubIcon'
const Footer = () => {
  const iconStyles = { color: '#edf4f4', width: '26', height: '25' }
  return (
    <footer className={styles.footer}>
      {/* <p>columkelly 2023</p>
      <span className={styles.iconWrapper}>
        <a href='https://github.com/columk1' target='_blank' rel='noreferrer'>
          <GithubIcon styles={iconStyles} />
        </a>
      </span> */}
    </footer>
  )
}
export default Footer
