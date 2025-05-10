# GoonAI Landing Page

This is the repository for the GoonAI landing page, a modern, responsive web application built to showcase GoonAI's services, features, and pricing.

## ✨ Features

*   **Modern UI/UX:** Clean, engaging, and user-friendly design.
*   **Responsive Design:** Fully responsive layout that adapts to all screen sizes (desktop, tablet, mobile).
*   **Dark/Light Theme:** Switch between dark and light modes, with user preference saved using Zustand and `localStorage`.
*   **Component-Based Architecture:** Built with reusable React components for maintainability and scalability.
*   **Key Sections:**
    *   **Hero:** Engaging introduction to GoonAI.
    *   **Brands:** Showcase of trusted partners or clients.
    *   **Services:** Detailed information about the services offered.
    *   **About Us:** Mission and vision of GoonAI.
    *   **Pricing:** Clear and concise pricing plans.
    *   **Call to Action:** Encourages users to get in touch or get started.

## 🛠️ Tech Stack

*   **Frontend Framework:** [React](https://reactjs.org/) (v19)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (v4)
    *   Utilizes `@tailwindcss/vite` for optimized integration.
    *   Custom CSS variables for easy theming (see [`src/index.css`](c:\Users\saura\Desktop\Landing Page\GoonAi\src\index.css)).
*   **State Management:** [Zustand](https://github.com/pmndrs/zustand) (for theme management - see [`src/store/themeStore.ts`](c:\Users\saura\Desktop\Landing Page\GoonAi\src\store\themeStore.ts))
*   **Icons:** [Lucide React](https://lucide.dev/)
*   **Linting:** [ESLint](https://eslint.org/) with [TypeScript ESLint](https://typescript-eslint.io/)

## 🚀 Getting Started

### Prerequisites

*   Node.js (LTS version recommended)
*   npm (comes with Node.js) or yarn

### Installation

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    cd GoonAi
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server and view the application in your browser:

```bash
npm run dev
```

This will typically start the server on `http://localhost:5173`.

### Building for Production

To create a production-ready build of the application:

```bash
npm run build
```

The optimized static assets will be generated in the `dist` folder.

### Linting

To check the codebase for linting errors and warnings:

```bash
npm run lint
```

### Previewing the Production Build

To serve the production build locally for testing:

```bash
npm run preview
```

## 📁 Project Structure

```
GoonAi/
├── public/                     # Static assets (e.g., favicon)
├── src/
│   ├── assets/                 # Images, logos, etc.
│   ├── components/
│   │   ├── cards/              # Reusable card components (InfoCard, ServicesCard)
│   │   ├── elements/           # Core UI elements (Navbar, Footer)
│   │   ├── section/            # Page sections (Hero, Services, AboutUs, etc.)
│   │   └── shared/             # Common shared components (Button, Container, Title)
│   ├── store/                  # Zustand store (themeStore)
│   ├── utils/                  # Utility data/functions (pricingPlans, servicesData)
│   ├── App.tsx                 # Main application component
│   ├── index.css               # Global styles and Tailwind CSS setup
│   ├── main.tsx                # Entry point of the React application
│   └── vite-env.d.ts           # Vite environment type definitions
├── .gitignore                  # Files and folders to be ignored by Git
├── eslint.config.js            # ESLint configuration
├── index.html                  # Main HTML file
├── package.json                # Project dependencies and scripts
├── README.md                   # This file
├── tsconfig.app.json           # TypeScript configuration for the application
├── tsconfig.json               # Root TypeScript configuration
├── tsconfig.node.json          # TypeScript configuration for Node.js specific files (e.g., vite.config.ts)
└── vite.config.ts              # Vite configuration
```
