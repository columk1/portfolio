import styles from './Loading.module.css'
import Spinner from '../Spinner/Spinner'
import FadeInText from '../FadeInText/FadeInText'

const Loading = () => {
  return (
    <div className={styles.loading}>
      <Spinner />
      <FadeInText text='(Sorry, free tier...)' delay={500} />
    </div>
  )
}

export default Loading
