import styles from './ListItem.module.css'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ListItem = (props) => {
  return (
    <Link to={'/blog/' + props.slug}>
      <div className={styles.listItem}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.date}>{props.formattedDate}</p>
      </div>
      {/* <div className={styles.info}>
            <p className={styles.tags}>{props.tags[0].toUpperCase()}</p>
            <p>|</p>
            <p className={styles.time}>{`${props.readingLength} MIN READ`}</p>
          </div> */}
    </Link>
  )
}

ListItem.propTypes = {
  slug: PropTypes.string,
  title: PropTypes.string,
  createdAt: PropTypes.string,
  formattedDate: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.object,
  imageUrl: PropTypes.string,
  markdown: PropTypes.string,
  tags: PropTypes.array,
  readingLength: PropTypes.number,
}

export default ListItem
