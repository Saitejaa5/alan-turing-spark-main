# 🚀 Setup Guide for Alan Turing Club Website

## Making the Project Fully Open Source

After cloning this repository, follow these steps to make the project completely accessible and open:

### 1. Update package.json (Important!)

Replace the content in `package.json` with:

```json
{
  "name": "alan-turing-club-website",
  "private": false,
  "version": "1.0.0",
  "description": "Official website for Alan Turing Club - A college technical club for computer science enthusiasts",
  "keywords": ["react", "typescript", "club", "students", "technical", "alan-turing"],
  "repository": {
    "type": "git",
    "url": "https://github.com/yourusername/alan-turing-club-website.git"
  },
  "author": "Alan Turing Club",
  "license": "MIT",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development", 
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@emailjs/browser": "^3.11.0",
    "@emotion/react": "^11.11.1",
    "@emotion/styled": "^11.11.0",
    "@fontsource/roboto": "^5.0.8",
    "@mui/icons-material": "^5.14.16",
    "@mui/material": "^5.14.17",
    "@mui/styled-engine-sc": "^6.0.0-alpha.5",
    "framer-motion": "^10.16.4",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.17.0",
    "styled-components": "^6.1.1"
  },
  "devDependencies": {
    "@types/react": "^18.2.15",
    "@types/react-dom": "^18.2.7",
    "@typescript-eslint/eslint-plugin": "^6.0.0",
    "@typescript-eslint/parser": "^6.0.0",
    "@vitejs/plugin-react": "^4.0.3",
    "eslint": "^8.45.0",
    "eslint-plugin-react-hooks": "^4.6.0",
    "eslint-plugin-react-refresh": "^0.4.3",
    "typescript": "^5.0.2",
    "vite": "^4.4.5"
  }
}
```

### 2. Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/alan-turing-club-website.git

# Navigate to project directory
cd alan-turing-club-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### 3. Customization

- **Logo**: Replace `src/assets/alan-turing-logo.jpg` with your club's logo
- **Colors**: Modify `src/index.css` to change the color scheme
- **Content**: Update member data, events, and announcements in respective pages
- **Admin Access**: Default admin login is `admin@club.com` / `admin123`

### 4. Deployment Options

- **GitHub Pages**: Already configured with GitHub Actions
- **Vercel**: Connect your GitHub repo to Vercel for auto-deployment
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`

## 🎯 No Restrictions Policy

This project is designed to be:
- ✅ **Completely Open Source** (MIT License)
- ✅ **Free to Use** for any college/club
- ✅ **Easy to Customize** 
- ✅ **No Private Dependencies**
- ✅ **Community Friendly**

## 🤝 Contributing

We welcome contributions! Check out `CONTRIBUTING.md` for guidelines.

## 📧 Support

If you need help customizing this for your club, feel free to:
- Open an issue
- Submit a pull request
- Fork and modify as needed

---

**Made with ❤️ for the student community**
