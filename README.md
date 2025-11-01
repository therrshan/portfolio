# Portfolio Website

A modern portfolio website built with React, showcasing projects, skills, and experience.

## Features

- **Home Page**: Hero section with introduction and skills overview
- **About Page**: Detailed information about experience, skills, and timeline
- **Projects Page**: Interactive project showcase with domain filtering
- **ML from Scratch**: Collection of machine learning implementations
- **Resume**: Downloadable resume with preview functionality

## Technology Stack

- React 18
- React Router for navigation
- Vite for build tooling
- CSS3 with modern animations

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/
│   ├── projects.json      # Projects data
│   └── static/            # Static assets (images, PDFs)
├── src/
│   ├── components/        # Reusable components
│   ├── pages/            # Page components
│   ├── styles/           # CSS files
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main app component
│   └── main.jsx          # Entry point
├── package.json
└── vite.config.js
```

## Deployment

This project is configured for Vercel deployment. The `vercel.json` file contains the deployment configuration.

## Customization

- Update project data in `public/projects.json`
- Modify styles in `src/styles/`
- Add new pages in `src/pages/` and update routes in `src/App.jsx`
