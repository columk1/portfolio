import styles from './Spinner.module.css'
import AsteriskIcon from '../icons/AsteriskIcon'

const Spinner = () => {
  return (
    <div role='status' className={styles.spinner}>
      <AsteriskIcon styles={{ color: 'var(--accent)' }} />
      <span className='sr-only'>Loading...</span>
    </div>
  )
}

export default Spinner
