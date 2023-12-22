import styles from './Card.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Card = (props) => {
  return (
    <Link to={'/blog/' + props.id}>
      <div className={styles.card}>
        <div className={styles.imgContainer}>
          <img src={props.imageUrl} alt={props.title} />
        </div>
        <div className={styles.flexContainer}>
          <div className={styles.content}>
            <p className={styles.title}>{props.title}</p>
            {/* <p className={styles.author}>{props.author.username}</p> */}
            {/* <p className={`${styles.text} ${styles.lineClamp}`}>{`${props.markdown}`}</p> */}
            <p className={`${styles.text} ${styles.lineClamp}`}>{props.description}</p>
          </div>
          <div className={styles.info}>
            <p className={styles.tags}>{props.tags[0].toUpperCase()}</p>
            <p>|</p>
            <p className={styles.time}>{`${props.readingLength} MIN READ`}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

Card.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  imageUrl: PropTypes.string,
  markdown: PropTypes.string,
  tags: PropTypes.array,
  readingLength: PropTypes.number,
}

export default Card
