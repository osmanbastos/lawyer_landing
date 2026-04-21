# Lawyer Landing Application

## Overview
The Lawyer Landing application is designed to provide a seamless and professional online landing page for lawyers. This documentation outlines the structure of the application's codebase and the purpose of each file.

## Code Structure

## File Descriptions

- **index.html**: The entry point of the application that includes references to CSS and JavaScript files.

- **css/styles.css**: Contains the main styles for the application, controlling the layout, colors, and fonts.

- **css/responsive.css**: Contains media queries to handle different screen sizes for responsive design.

- **js/app.js**: The core JavaScript file that handles user interactions and event listeners.

- **js/api.js**: Manages all API requests and data fetching from external sources.

- **images/**: Directory that holds all image files used in the application.

- **assets/**: Non-code assets related to the application (like fonts or other media).

## How to Run the Application
1. Clone the repository.
2. Open `index.html` in a web browser.
3. Ensure you have internet access for any external resources.

## Future Improvements
- Integrate a backend service for dynamic data handling.
- Improve the user interface with additional styling and functionality.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

This README.md file serves as the central documentation for the Lawyer Landing application, and is intended to help users and developers understand the project structure and how to get started.
# Lawyer Landing - Olímpio Mello Advocacia & Consultoria

A modern, responsive landing page for a law firm built with React, TypeScript, and Tailwind CSS. This application showcases legal services with multilingual support (English, Brazilian Portuguese, European Portuguese, and German).

## 📋 Project Overview

This is a professional law firm landing page for **Olímpio Mello Advocacia & Consultoria**, featuring:
- Responsive design optimized for all devices
- Multilingual interface (EN, BR, PT, DE)
- Parallax scrolling effects
- Service showcase
- Client testimonials
- Contact form with email submission
- Professional typography and visual hierarchy

## 🏗️ Project Structure

## 📂 Core Files Explained

### `src/App.tsx` (Main Component)
The primary React component containing:
- **Language Selection**: Multi-language switcher with flag icons (top-right)
- **Hero Section**: Parallax background with CTA buttons
- **Navigation**: Fixed navbar with section links
- **Stats Section**: Key metrics (500+ cases won, 11+ years experience, 98% satisfaction)
- **Services Section**: Three main service categories with descriptions
- **About Section**: Professional background and credentials
- **Testimonials Section**: Client feedback with expandable text
- **Contact Section**: Contact information, hours, and email form
- **Footer**: Copyright and social links

**Key Features:**
- State management for language selection and expandable testimonials
- Scroll event listener for parallax effect (`offset` state)
- Conditional rendering based on language selection
- Form submission via FormSubmit service
- Icons from `lucide-react` library

### `src/translations.ts`
Multilingual content dictionary supporting four languages:
- English (en)
- Brazilian Portuguese (br)
- European Portuguese (pt)
- German (de)

Each language contains:
- Navigation labels
- Hero section text
- Service descriptions
- About section information
- Testimonials
- Contact form placeholders
- Footer text

### `src/main.tsx`
React application entry point that:
- Imports React and ReactDOM
- Mounts the `App` component to the DOM element with id "root"
- Uses StrictMode for development warnings

### `src/index.css`
Global stylesheet with minimal CSS (59 bytes) - relies heavily on Tailwind CSS utility classes.

## 🛠️ Technologies & Dependencies

### Core Libraries
- **React** (^18.3.1): UI library
- **React DOM** (^18.3.1): DOM rendering
- **lucide-react** (^0.344.0): Icon library with 344+ icons

### Build Tools
- **Vite** (^5.4.2): Modern build tool for fast development
- **@vitejs/plugin-react** (^4.3.1): React plugin for Vite

### Styling
- **Tailwind CSS** (^3.4.1): Utility-first CSS framework
- **PostCSS** (^8.4.35): CSS transformation
- **autoprefixer** (^10.4.18): Vendor prefix automation

### Development Tools
- **TypeScript** (^5.5.3): Type safety
- **ESLint** (^9.9.1): Code linting
- **eslint-plugin-react-hooks** (^5.1.0-rc.0): React hooks linting
- **eslint-plugin-react-refresh** (^0.4.11): React refresh linting
- **@types/react** (^18.3.5): React type definitions
- **@types/react-dom** (^18.3.0): React DOM type definitions

## 📦 Available Scripts

```bash
# Development server
npm run dev

# Production build
npm run build

# Code linting
npm run lint

# Preview production build
npm run preview

📋 Browser Support
Works on all modern browsers supporting:

ES2020+
CSS Grid and Flexbox
Intersect Observer API (for parallax)
🔧 Configuration Files
vite.config.ts: Build configuration with React plugin
tailwind.config.js: Tailwind CSS customization
postcss.config.js: PostCSS with Tailwind and autoprefixer
tsconfig.json: TypeScript compiler options
tsconfig.app.json: App-specific TS config
tsconfig.node.json: Node.js TS config
eslint.config.js: Linting rules
📄 License
Created for Olímpio Mello Advocacia & Consultoria. Developed by Osman Bastos.

🤝 Contributing
For improvements or bug fixes, please contact the project owner.