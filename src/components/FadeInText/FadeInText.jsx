import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import styles from './FadeInText.module.css'

const FadeInText = ({ text, delay = 1000 }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return <div className={`${styles.fadeInText} ${visible ? styles.visible : ''}`}>{text}</div>
}

FadeInText.propTypes = {
  text: PropTypes.string.isRequired,
  delay: PropTypes.number,
}

export default FadeInText
