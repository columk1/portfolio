<a name="readme-top"></a>

<!-- PROJECT LOGO
<br />
<div align="center">
  <a href="https://github.com/columk1/portfolio">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>
  -->

<h3 align="center">Portfolio</h3>
  <p align="center">
  This is my personal portfolio website <b>[columkelly.com](http://columkelly.com)</b> built with Vite and hosted on Netlify.
  </p>
</div>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Portfolio Screenshot][home-screenshot]](https://columkelly.com)

The portfolio is a React front-end which features a showcase of my recent projects as well as my blog and some contact info. The blog data is fetched from an [Express API](https://github.com/columk1/blog-api) and stored in a MongoDB database. A separate [CMS](https://github.com/columk1/blog-cms) is used for CRUD operations.

**Related Repos**
[Blog API](https://github.com/columk1/blog-api)
[Blog CMS](https://github.com/columk1/blog-cms)

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

1. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

```sh
nvm install 21.6.0
```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/columk1/portfolio.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. If you have cloned the back-end enter your local API url in `.env`
   ```js
   VITE_DEV_API=<your local url>
   ```

<!-- ROADMAP -->

## Roadmap

- [ ] Improved Accessibility
- [ ] Animated Background

<!-- CONTACT -->

## Contact

Colum Kelly - [@ColumKelly3](https://twitter.com/ColumKelly3) - columk1@gmail.com

Project Link: [https://columkelly.com/](https://columkelly.com/)

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[home-screenshot]: screenshots/home-dark.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
