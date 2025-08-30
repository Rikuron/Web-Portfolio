# Josh Eugenio's Web Portfolio

Welcome to the source code for my personal web portfolio. This project is a complete rebuild of my previous Vite-based portfolio, now leveraging the power of Next.js 15 with React 19, TypeScript, and Tailwind CSS. It showcases my skills, projects, and professional background as a web developer with a focus on modern development practices, performance, and user experience.

<!-- You can add a screenshot of your portfolio here -->
<img width="1920" height="1200" alt="image" src="https://github.com/user-attachments/assets/a1d51521-80ff-4ee9-b4af-0206a02e9e94" />

Web Portfolio Link: [https://rikuron-web-portfolio.vercel.app](https://rikuron-web-portfolio.vercel.app)
<!-- ![Portfolio Screenshot](link-to-your-screenshot.png) -->

---

## ✨ Features

- **🚀 Next.js 15 & App Router**: Built with the latest Next.js features including App Router and Turbopack for lightning-fast development
- **⚛️ React 19**: Utilizing the newest React features and concurrent rendering capabilities
- **🎨 Responsive Design**: Fluid, mobile-first design that looks stunning on all devices
- **🌗 Dynamic Theming**: Persistent dark/light mode toggle with smooth transitions and theme-aware components
- **🎬 Smooth Animations**: Engaging user experience powered by Framer Motion with optimized performance
- **📧 Contact Integration**: Functional contact form with EmailJS integration for direct communication
- **🛠️ Interactive Tech Stack**: Auto-scrolling technology showcase with hover effects and smooth animations
- **📱 Progressive Enhancement**: Optimized for performance with lazy loading and efficient rendering
- **🔧 Developer Experience**: TypeScript for type safety, ESLint for code quality, and modern tooling
- **⚡ Performance Optimized**: Built with Core Web Vitals in mind for excellent user experience

---

## 🛠️ Tech Stack

This portfolio is built with a focus on modern web development technologies:

### Core Framework & Runtime
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router and Turbopack
- **[React 19](https://react.dev/)** - Latest React with concurrent features
- **[TypeScript 5](https://www.typescriptlang.org/)** - Type-safe JavaScript development

### Styling & UI
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Production-ready motion library
- **[React Icons](https://react-icons.github.io/react-icons/)** - Comprehensive icon library
- **[Tech Stack Icons](https://www.npmjs.com/package/tech-stack-icons)** - Technology logo components

### Functionality & Integration
- **[EmailJS](https://www.emailjs.com/)** - Client-side email functionality for contact form
- **Custom Hooks** - Reusable logic for theme persistence and responsive behavior

### Development & Quality
- **[ESLint](https://eslint.org/)** - Code quality and consistency
- **[PostCSS](https://postcss.org/)** - CSS processing and optimization
---

## 🚀 Getting Started

Follow these steps to run the portfolio locally:

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v18.x or later) - [Download here](https://nodejs.org/)
- **npm** or **pnpm** (recommended for better performance)

```bash
# Install/update npm globally
npm install npm@latest -g

# Or install pnpm (recommended)
npm install -g pnpm
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rikuron/Web-Portfolio.git
   ```

2. **Navigate to the Next.js project**
   ```bash
   cd Web-Portfolio/next-ts
   ```

3. **Install dependencies**
   ```bash
   # Using npm
   npm install
   
   # Or using pnpm (recommended)
   pnpm install
   ```

4. **Start the development server**
   ```bash
   # Using npm with Turbopack (faster)
   npm run dev
   
   # Or using pnpm
   pnpm dev
   ```

5. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio in action.

---

## 📁 Project Structure

This project follows the standard Next.js App Router structure:

next-ts/ <br>
├── public/ # Static assets like fonts and images <br>
│ ├── fonts/
│ ├── images/
│ ├── josh_lmao.ico # Site Icon / Favicon
├── src/ <br>
│ ├── app/ <br>
│ │ ├── components/ # Reusable client components (ThemeProvider, ProjectCard) <br>
│ │ │ ├── ClientLayout.tsx # Client-side layout wrapper <br>
│ │ │ ├── ProjectCard.tsx # Individual project display <br>
│ │ │ └── ThemeProvider.tsx # Theme context <br>
│ │ ├── hooks/ # Custom React hooks (usePersistentTheme, useHeaderHeight) <br>
│ │ │ ├── useHeaderHeight.ts # Dynamic header height management <br>
│ │ │ └── usePersistentTheme.ts # Theme persistence logic <br>
│ │ ├── sections/ # Major UI sections (Header, Hero, Tech, Projects, Contact, Footer,) <br>
│ │ ├── utils/ # Utility functions <br>
│ │ │ ├── navigation.ts # Navigation helpers <br>
│ │ │ ├── projectData.ts # Project information data <br>
│ │ │ └── techStack.ts # Technology stack data <br>
│ │ ├── globals.css # Global styles and theme variables <br>
│ │ ├── layout.tsx # Root layout (Server Component) <br>
│ │ └── page.tsx # Main page content (Server Component) <br>
│ └── ... <br>
├── eslint.config.mjs <br>
├── next.config.ts <br>
├── postcss.config.mjs <br>
└── tsconfig.json <br>

---

## 🌐 Deployment

This portfolio is deployed on Vercel for optimal performance:

1. **Connect to Vercel**: Link your GitHub repository
2. **Auto-deploy**: Automatic deployments on push to main branch
3. **Environment Variables**: Configure any necessary environment variables
4. **Custom Domain**: Optional custom domain configuration

---

## 📧 Contact Integration

The contact form uses EmailJS for client-side email functionality:

1. **Setup EmailJS Account**: Create account at [EmailJS](https://www.emailjs.com/)
2. **Configure Service**: Set up email service and template
3. **Environment Variables**: Add your EmailJS credentials
4. **Test Integration**: Verify email delivery functionality

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 📞 Contact

**Josh Eugenio**
- **LinkedIn**: [Josh Eugenio](https://www.linkedin.com/in/josh-eugenio-43148332b/)
- **Email**: josheugenio65@gmail.com
- **Portfolio**: [https://rikuron-web-portfolio.vercel.app](https://rikuron-web-portfolio.vercel.app)

**Project Repository**: [https://github.com/Rikuron/Web-Portfolio](https://github.com/Rikuron/Web-Portfolio)
