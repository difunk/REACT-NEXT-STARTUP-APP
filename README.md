
  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" />
  </a>
  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
  </a>
  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  </a>
  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  </a>
  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white" />
  </a>
  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/Zod-000000?style=for-the-badge&logo=zod&logoColor=3068B7" />
  </a>
  <a href="#" target="_blank">
    <img src="https://img.shields.io/badge/Sentry-black?style=for-the-badge&logo=Sentry&logoColor=#362D59" />
  </a>


## About This Project  
This project is a startup idea submission platform built with Next.js, Sanity, and Tailwind CSS. It allows users to submit, browse, and manage startup ideas while exploring modern web development concepts like server actions, dynamic routing, and API integration.  

The project is designed to practice building scalable, full-stack applications with a focus on user authentication, form validation, and responsive UI design. 🚀  

## Tech Stack  
- **Next.js**: Framework for server-side rendering and static site generation.  
- **Sanity**: Headless CMS for managing and querying content.  
- **Tailwind CSS**: Utility-first CSS framework for styling.  
- **Zod**: Schema validation for form inputs.  
- **Lucide React**: Icon library for consistent UI.  
- **Sentry**: Error tracking and performance monitoring.  

## Features  
- **User Authentication**: GitHub-based login and logout functionality.  
- **Startup Submission**: Users can submit startup ideas with title, description, category, image, and pitch.  
- **Dynamic User Profiles**: View user-specific startup submissions.  
- **Form Validation**: Client-side and server-side validation using Zod.  
- **Responsive Design**: Fully responsive UI with Tailwind CSS.  
- **Error Monitoring**: Integrated Sentry for tracking errors and performance.  

## Setup  

### Prerequisites  
- [Git](https://git-scm.com/)  
- [Node.js](https://nodejs.org/en)  
- [npm](https://www.npmjs.com/)  


### Environment Variables
Create a .env.local file in the root directory and add the following variables:

```sh
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id  
NEXT_PUBLIC_SANITY_DATASET=your_sanity_dataset  
NEXTAUTH_SECRET=your_nextauth_secret  
NEXTAUTH_URL=http://localhost:3000  
GITHUB_ID=your_github_client_id  
GITHUB_SECRET=your_github_client_secret  
SENTRY_DSN=your_sentry_dsn
```

### Launch Project

```sh
npm run dev
```
