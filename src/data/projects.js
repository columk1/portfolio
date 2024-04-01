const projects = [
  {
    title: 'Blog API',
    description:
      'A REST API for my personal blog using Node, Express and MongoDB. I built a CMS to interact with the API using React and Tailwind. It allows the admin to preview the markdown while editing. Authentication is handled using JWTs.',
    image: '/images/blog-cms.jpg?url',
    tags: ['Node', 'Express', 'MongoDB', 'React', 'Tailwind'],
    liveUrl: 'https://cms.columkelly.com/',
    githubUrl: 'https://github.com/columk1/blog-api',
  },
  {
    title: 'Messaging App',
    description:
      'A real-time messaging app built with Next.JS using React, Tailwind, Prisma, Postgres, NextAuth and Pusher. Although initially modelled on a tutorial, I spent a few weeks addressing issues and building out features of my own.',
    image: '/images/messaging-app.jpg',
    tags: ['NextJS', 'Typescript', 'Prisma', 'Postgres', 'Tailwind'],
    liveUrl: 'https://messaging-app-azure.vercel.app/',
    githubUrl: 'https://github.com/columk1/messaging-app',
  },
  {
    // eslint-disable-next-line quotes
    title: "Where's Alex Honnold?",
    description:
      // eslint-disable-next-line quotes
      "A hidden object puzzle for climbers. (Think Where's Wally on El Cap). Players are timed as they search a draggable high-resolution image for famous rock features.",
    image: '/images/wheres-honnold.jpg',
    tags: ['React', 'Firebase', 'Vite'],
    liveUrl: 'https://wheres-honnold.netlify.app/',
    githubUrl: 'https://github.com/columk1/wheres-alex-honnold',
  },
  {
    title: 'CV Generator',
    description:
      'A React CV Generator. Users can add additional sections for experience, education, or their own custom sections. A print preview is updated live and can be saved as a PDF.',
    image: '/images/cv-generator.jpg?url',
    tags: ['React', 'PostCSS', 'Vite'],
    liveUrl: 'https://odin-cv-generator.netlify.app',
    githubUrl: 'https://github.com/columk1/cv-application',
  },
  {
    title: 'Battleship',
    description:
      'An MVC battleship game built with Webpack. Drag and drop to position ships. Computer opponent uses a hunt and target algorithm.',
    image: '/images/battleship.png',
    tags: ['Javascript', 'HTML', 'CSS', 'Webpack'],
    liveUrl: 'https://top-battleship.netlify.app/',
    githubUrl: 'https://github.com/columk1/battleship',
  },
  {
    title: 'Members Only',
    description:
      'An SSR message board app using Node, Express and MongoDB. Uses EJS for templating and PassportJS for authentication using session cookies.',
    image: '/images/members-only.jpg',
    tags: ['Node', 'Express', 'MongoDB', 'EJS', 'PassportJS'],
    liveUrl: 'https://odin-members-only.adaptable.app',
    githubUrl: 'https://github.com/columk1/members-only',
  },
]

export default projects
