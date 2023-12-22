import styles from './Categories.module.css'
import PropTypes from 'prop-types'

const Categories = ({ categories }) => {
  console.log(categories)
  return (
    <div>
      <h2 className={styles.h2}>Popular Topics</h2>
      <div className={styles.categories}>
        {categories.map((category, index) => (
          <button className={styles.btn} key={index}>
            <div className={styles.circle}></div>
            {category}
          </button>
        ))}
      </div>
    </div>
  )
}

Categories.propTypes = {
  categories: PropTypes.array,
}

export default Categories
