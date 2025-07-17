# Mentra AI Website

A modern, responsive website for Mentra AI built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Site

**URL**: https://www.mymentra.ai

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)
- **UI Components**: Radix UI primitives with custom styling
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Deployment**: GitHub Pages with custom domain

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── Header.tsx     # Navigation header
│   ├── Footer.tsx     # Site footer
│   └── ...            # Other page-specific components
├── pages/              # Route components
│   ├── Index.tsx      # Homepage
│   ├── About.tsx      # About page
│   ├── Educators.tsx  # Educators page
│   ├── Parents.tsx    # Parents page
│   ├── Pricing.tsx    # Pricing page
│   ├── FAQ.tsx        # FAQ page
│   ├── Blog.tsx       # Blog page
│   ├── Press.tsx      # Press page
│   ├── Privacy.tsx    # Privacy policy
│   ├── Terms.tsx      # Terms of service
│   ├── Cookies.tsx    # Cookie policy
│   ├── HowItWorks.tsx # How it works page
│   └── NotFound.tsx   # 404 page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── types/              # TypeScript type definitions
├── utils/              # Helper utilities
└── App.tsx            # Main application component
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd mentra-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 📜 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## 🏗️ Build & Deployment

### Development Build
```bash
npm run build:dev
```

### Production Build
```bash
npm run build
```

The build process automatically:
- Optimizes assets for production
- Generates static files in the `dist/` directory
- Creates a `404.html` file for GitHub Pages SPA routing

### Deployment

This project is configured for GitHub Pages deployment with a custom domain (`www.mymentra.ai`). The deployment is handled automatically through GitHub Actions.

## 🎨 Design System

The project uses a comprehensive design system built on:

- **Tailwind CSS** for utility-first styling
- **shadcn/ui** for consistent, accessible components
- **Radix UI** primitives for robust component foundations
- **Custom color palette** and typography following brand guidelines

## 📱 Features

- **Responsive Design**: Optimized for all device sizes
- **SEO Optimized**: Meta tags, structured data, and performance optimizations
- **Accessibility**: WCAG compliant components and navigation
- **Performance**: Optimized images, lazy loading, and efficient bundling
- **Cookie Consent**: GDPR-compliant cookie management
- **Analytics**: Integrated tracking and performance monitoring

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic functionality. The project is configured to work out-of-the-box.

### Customization

- **Styling**: Modify `src/index.css` for global styles
- **Components**: Customize shadcn/ui components in `src/components/ui/`
- **Routing**: Add new routes in `src/App.tsx`
- **Content**: Update page content in respective `src/pages/` files

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For support or questions, please contact the development team or create an issue in the repository.
