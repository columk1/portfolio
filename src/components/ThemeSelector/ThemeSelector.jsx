import styles from './ThemeSelector.module.css'
import { useState, useEffect } from 'react'
const ThemeSelector = () => {
  const [isDark, setIsDark] = useState(false)

  return (
    <div className={styles.themeSelector}>
      <ul className={styles.themes}>
        <button onClick={() => setIsDark(false)} className={styles.btn}>
          <li className={styles.theme}>
            {!isDark ? (
              <span className={styles.checked}>■</span>
            ) : (
              <span className={styles.unchecked}>□</span>
            )}
            Light
          </li>
        </button>
        <button onClick={() => setIsDark(true)} className={styles.btn}>
          <li className={styles.theme}>
            {isDark ? (
              <span className={styles.checked}>■</span>
            ) : (
              <span className={styles.unchecked}>□</span>
            )}
            Dark
          </li>
        </button>
      </ul>
    </div>
  )
}

export default ThemeSelector
