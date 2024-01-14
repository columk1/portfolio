import styles from './Projects.module.css'
import Project from '../Project/Project'

const projects = [
  {
    title: 'CV Generator',
    description:
      'A CV Generator made with React. Users can add sections for experience, education, or their own custom sections. A print preview is updated live and can be saved as a PDF.',
    image:
      'https://images.unsplash.com/photo-1566241477600-ac026ad43874?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VicGFnZXxlbnwwfHwwfHx8MA%3D%3D',
    tags: ['React', 'PostCSS', 'Vite'],
    github: 'https://github.com/columk1/cv-application',
    url: 'https://odin-cv-generator.netlify.app/',
  },
]

const Projects = () => {
  return (
    <section id='projects' className={styles.projects}>
      <div className={styles.projectsContainer}>
        <div className={styles.projectsContent}>
          <h2 className={styles.header}>Projects</h2>
          <Project project={projects[0]} />
        </div>
        <div className={styles.footer}></div>
      </div>
    </section>
  )
}

export default Projects
