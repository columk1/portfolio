import styles from './Projects.module.css'
import Project from '../Project/Project'
import projects from '../../data/projects.js'

const Projects = () => {
  return (
    <section id='projects' className={styles.projects}>
      <div className={styles.projectsContainer}>
        <h2 className={styles.header}>Projects</h2>
        {projects.map((project) => (
          <Project key={project.title} project={project} />
        ))}
        <div className={styles.footer}></div>
      </div>
    </section>
  )
}

export default Projects
