import styles from './Project.module.css'
import GithubIcon from '../icons/GithubIcon'
import LinkIcon from '../icons/LinkIcon'
import { useRef } from 'react'

const Project = ({ project }) => {
  const { title, description, image, tags, github, url } = project

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
            <a href={url} target='_blank' rel='noreferrer'>
              <LinkIcon styles={iconStyles} />
            </a>
            <a href='https://github.com/columk1' target='_blank' rel='noreferrer'>
              <GithubIcon styles={iconStyles} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
