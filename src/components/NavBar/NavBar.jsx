import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const NavBar = ({ links }) => {
  return (
    <nav id='mainNav'>
      <ul className={styles.ul}>
        {links.map((link) => (
          <li key={link.title}>
            <NavLink to={link.route}>{link.title}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

NavBar.propTypes = {
  links: PropTypes.array,
}

export default NavBar
