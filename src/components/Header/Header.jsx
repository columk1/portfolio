import styles from './Header.module.css'
import NavBar from '../NavBar/NavBar'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const Header = ({ logo, links }) => {
  return (
    <>
      <header className={styles.header}>
        {/* <img src={logo} alt='logo' className={styles.logo} /> */}
        <NavLink to='/'>
          <h1 className={styles.logo}>Colum Kelly</h1>
        </NavLink>
        <NavBar links={links} />
      </header>
    </>
  )
}

Header.propTypes = {
  logo: PropTypes.string,
  links: PropTypes.array,
}

export default Header
