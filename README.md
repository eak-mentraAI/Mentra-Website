# Mentra Website

A modern, responsive website for Mentra - an AI-powered educational platform that enhances learning through Socratic dialogue and personalized tutoring.

## Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI**: Built with React, TypeScript, and Tailwind CSS
- **Performance Optimized**: Image optimization, code splitting, and lazy loading
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags, structured data, and performance metrics

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: React Router for client-side navigation
- **UI Components**: Custom component library with shadcn/ui patterns
- **Performance**: Service Worker for caching and offline support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mentra-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components and routing
├── hooks/         # Custom React hooks
├── lib/           # Utility functions and configurations
├── types/         # TypeScript type definitions
└── utils/         # Helper functions

public/            # Static assets and images
```

## Deployment

This project is configured for deployment to GitHub Pages via GitHub Actions. The workflow automatically builds and deploys the site on pushes to the main branch.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is proprietary software owned by Mentra.
