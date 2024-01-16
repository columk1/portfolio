const projects = [
  {
    title: 'Blog API',
    description:
      'A REST API for my personal blog using Node, Express and MongoDB. I built a CMS to interact with the API using React and Tailwind. It allows the admin to preview the markdown while editing. Authentication is handled using JWTs.',
    image: '/images/blog-cms.jpg?url',
    tags: ['Node', 'Express', 'MongoDB', 'React', 'Tailwind'],
    github: 'https://github.com/columk1/blog-api',
    url: 'https://cms.columkelly.com/',
  },
  {
    title: 'CV Generator',
    description:
      'A React CV Generator. Users can add additional sections for experience, education, or their own custom sections. A print preview is updated live and can be saved as a PDF.',
    image: '/images/cv-generator.jpg?url',
    tags: ['React', 'PostCSS', 'Vite'],
    github: 'https://github.com/columk1/cv-application',
    url: 'https://odin-cv-generator.netlify.app/',
  },
  {
    title: 'Members Only',
    description:
      'An SSR message board app using Node, Express and MongoDB. Uses EJS for templating and PassportJS for authentication using session cookies.',
    image: '/images/members-only.jpg',
    tags: ['Node', 'Express', 'MongoDB', 'EJS', 'PassportJS'],
  },
]

export default projects
