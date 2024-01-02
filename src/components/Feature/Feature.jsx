import styles from './Feature.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Feature = (props) => {
  // let text = props.markdown.toString().slice(0, 100) : ''
  console.log(props)
  return (
    <div className={styles.container}>
      <div className={styles.featureImg}>
        {/* <img src={props.imageUrl} alt='Latest Article' /> */}
        <div className={styles.placeholder}>
          <h2 className={styles.h2}>Articles</h2>
        </div>
      </div>
      <Link to={'/blog/' + props.id}>
        <div className={styles.article}>
          <div className={styles.label}>Latest Article</div>
          <div className={styles.flexContainer}>
            <div className={styles.content}>
              <h3 className={styles.title}>{props.title}</h3>
              <p className={styles.date}>{props.formattedDate}</p>
              <p className={styles.text}>{props.description}</p>
            </div>
            <div className={styles.info}>
              {/* TODO: Refactor this map */}
              <p className={styles.tags}>
                {props.tags
                  .filter((tag, i) => i < 2)
                  .map((tag) => (
                    <span className={styles.tag} key={tag}>
                      <span>{tag.toUpperCase()}</span>
                      <span>|</span>
                    </span>
                  ))}
              </p>
              {/* <p>|</p> */}
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
  formattedDate: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.string,
  imageUrl: PropTypes.string,
  markdown: PropTypes.string,
  tags: PropTypes.array,
  readingLength: PropTypes.number,
}

export default Feature
