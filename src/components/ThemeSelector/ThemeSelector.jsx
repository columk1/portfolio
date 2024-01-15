import styles from './ThemeSelector.module.css'
import { useState, useEffect } from 'react'
const ThemeSelector = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }, [isDark])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    if (mq.matches) {
      setIsDark(true)
    }

    mq.addEventListener('change', (e) => setIsDark(e.matches))
  }, [])

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
            LIGHT
          </li>
        </button>
        <button onClick={() => setIsDark(true)} className={styles.btn}>
          <li className={styles.theme}>
            {isDark ? (
              <span className={styles.checked}>■</span>
            ) : (
              <span className={styles.unchecked}>□</span>
            )}
            DARK
          </li>
        </button>
      </ul>
    </div>
  )
}

export default ThemeSelector
