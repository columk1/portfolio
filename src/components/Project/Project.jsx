import styles from './Project.module.css'
import GithubIcon from '../icons/GithubIcon'
import LinkIcon from '../icons/LinkIcon'
import PropTypes from 'prop-types'

const Project = ({ project }) => {
  const { title, description, image, tags, liveUrl, githubUrl } = project

  const iconStyles = { color: 'var(--text)', width: '27' }

  return (
    <div className={styles.project}>
      <div className={styles.projectContainer}>
        <div className={styles.imgContainer}>
          <img src={image} alt={title} />
        </div>
        <div className={styles.projectDetails}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <p className={styles.projectDescription}>{description}</p>
          <div className={styles.tags}>
            <ul>
              {tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
                // <Tag key={tag} name={tag}/>
              ))}
            </ul>
          </div>
          <div className={styles.links}>
            <a href={liveUrl} target='_blank' rel='noreferrer' aria-label='Live Website Link'>
              <LinkIcon styles={iconStyles} />
            </a>
            <a href={githubUrl} target='_blank' rel='noreferrer' aria-label='Github Repo'>
              <GithubIcon styles={iconStyles} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.object,
}

export default Project
