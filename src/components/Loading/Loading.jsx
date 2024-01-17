import styles from './Loading.module.css'
import Spinner from '../Spinner/Spinner'
const Loading = () => {
  return (
    <div className={styles.loading}>
      <Spinner />
    </div>
  )
}

export default Loading
