import styles from './Feature.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Feature = (props) => {
  // let text = props.markdown.toString().slice(0, 100) : ''
  console.log(props)
  return (
    <div className={styles.container}>
      <div className={styles.featureImg}>
        <img src={props.imageUrl} alt='Featured Article' />
      </div>
      <Link to={'/blog/' + props.id}>
        <div className={styles.article}>
          <div className={styles.label}>Featured Article</div>
          <div className={styles.flexContainer}>
            <div className={styles.content}>
              <h3 className={styles.title}>{props.title}</h3>
              <p className={styles.text}>{props.description}</p>
            </div>
            <div className={styles.info}>
              <p className={styles.tags}>{props.tags.map((tag) => tag.toUpperCase())}</p>
              <p>|</p>
              <p className={styles.time}>{`${props.readingLength} MIN READ`}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

Feature.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  imageUrl: PropTypes.string,
  markdown: PropTypes.string,
  tags: PropTypes.array,
  readingLength: PropTypes.number,
}

export default Feature
