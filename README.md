## 🚀 React + TypeScript + Vite Chat App

Welcome to this amazing Chat App built with React, TypeScript, and Vite. This project includes a minimal setup with Hot Module Replacement (HMR) and some configured ESLint rules for a fast and efficient development experience.

### 📚 Table of Contents
- [Features](#-features)
- [Getting Started](#-getting-started)
- [ESLint Configuration](#-eslint-configuration)
- [Plugins](#-plugins)
- [Contributing](#-contributing)

---

### ✨ Features

- Fast development with Vite's HMR.
- Code quality ensured by ESLint.
- Built with React for a robust UI.
- TypeScript for static type checking.

---

### 🛠 Getting Started

To run this project locally, do the following:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: `npm install` or `yarn install`.
4. Run the dev server: `npm run dev` or `yarn dev`.

---

### 🧪 ESLint Configuration

#### Extending Configuration for Production

For a production application, it's recommended to extend the ESLint configuration for type-aware lint rules. Here is how you can do it:

1. Update the `parserOptions` in your ESLint config like so:

```javascript
parserOptions: {
  ecmaVersion: 'latest',
  sourceType: 'module',
  project: ['./tsconfig.json', './tsconfig.node.json'],
  tsconfigRootDir: __dirname,
},
