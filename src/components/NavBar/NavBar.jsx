import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import PropTypes from 'prop-types'

const NavBar = ({ links }) => {
  return (
    <nav id='mainNav'>
      <ul className={styles.ul}>
        {links.map((link) => (
          <li key={link.title}>
            {link.hashLink ? (
              <HashLink to={link.route + link.hashLink}>{link.title}</HashLink>
            ) : (
              <NavLink to={link.route}>{link.title}</NavLink>
            )}
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
