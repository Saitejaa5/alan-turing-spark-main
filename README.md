# Alan Turing Club - College Technical Club Website

A beautiful, interactive Single Page Application (SPA) for a college technical club. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Landing Page** with centered "Get Started" button
- **Dashboard/Home** with club information and navigation
- **Members Directory** with board members and LinkedIn integration
- **Events & Activities** with registration system
- **Announcements** and notifications system
- **Tech Resources** for learning and development
- **Leaderboard** with gamified ranking system
- **Admin Panel** for club management
- **Authentication System** with role-based access
- **Social Media Integration** (Instagram, LinkedIn)
- **Responsive Design** for all devices

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS + Custom Design System
- **Routing**: React Router DOM
- **UI Components**: Radix UI + shadcn/ui
- **State Management**: React Context
- **Form Handling**: React Hook Form + Zod
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📦 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd alan-turing-club
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

### Available Scripts

```bash
# Development server
npm run dev

# Build for production  
npm run build

# Build for development
npm run build:dev

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 👥 Authentication

The app includes a demo authentication system:

### Test Accounts
- **Admin**: `admin@club.com` / `admin123`
- **Member**: `john@student.com` / `password123`

### Features
- User registration and login
- Role-based access (Admin/Member)
- Profile management
- Protected routes
- Admin panel access for administrators

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Layout/
│   │   └── Navbar.tsx          # Navigation component
│   └── ui/                     # Reusable UI components
├── contexts/
│   └── AuthContext.tsx         # Authentication context
├── pages/
│   ├── Landing.tsx             # Landing page
│   ├── Dashboard.tsx           # Main dashboard
│   ├── Login.tsx               # Login page
│   ├── Signup.tsx              # Registration page
│   ├── Members.tsx             # Members directory
│   ├── Events.tsx              # Events and activities
│   ├── Announcements.tsx       # Club announcements  
│   ├── Resources.tsx           # Tech resources
│   ├── Leaderboard.tsx         # Member rankings
│   └── AdminPanel.tsx          # Admin management
├── assets/                     # Images and static files
├── lib/                        # Utility functions
└── hooks/                      # Custom React hooks
```

## 🎨 Design System

The app uses a custom design system with:
- Semantic color tokens
- Dark/Light mode support
- Consistent typography
- Responsive breakpoints
- Custom animations
- Tech-focused gradients and effects

## 🔧 Customization

### Adding New Features
1. Create components in `src/components/`
2. Add pages in `src/pages/`
3. Update routing in `src/App.tsx`
4. Extend the design system in `src/index.css`

### Styling Guidelines
- Use semantic tokens from the design system
- Follow component-based architecture
- Maintain responsive design principles
- Use Tailwind CSS utilities

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

If you have any questions or need help:
- Open an issue on GitHub
- Contact the development team
- Check the documentation

---

**Made with ❤️ for Alan Turing Club**

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?


## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

