# Josh Eugenio's Web Portfolio

Welcome to the source code for my personal web portfolio. This project is a redo of my previous personal web portfolio. Previously built using Vite, now I'm using Next.js, as well as React and Tailwind CSS, showcasing my skills, projects, and professional background as a web developer. It's designed to be clean, responsive, and performant, featuring a modern technology stack and best practices.

<!-- You can add a screenshot of your portfolio here -->
<!-- ![Portfolio Screenshot](link-to-your-screenshot.png) -->

---

## ✨ Features

-   **Modern Stack**: Built with the latest features of Next.js 14 and the App Router.
-   **Fully Responsive**: A fluid design that looks great on all devices, from mobile phones to desktop screens.
-   **Dark/Light Mode**: User-selectable dark and light themes that persist across sessions using `localStorage`.
-   **Smooth Navigation**: Seamless navigation between sections with smooth scrolling animations and proper header offsets.
-   **Animations & Transitions**: Engaging user experience with subtle animations and transitions powered by `Framer Motion`.
-   **Dynamic Content**: Theme-aware components and styling that adapt to the selected mode.
-   **Interactive Tech Stack**: An animated, auto-scrolling slider to showcase my technology skills.
-   **Component-Based Architecture**: A clean and organized codebase with reusable components for easy maintenance and scalability.

---

## 🛠️ Tech Stack

This portfolio is built with a focus on modern web development technologies:

-   **[Next.js](https://nextjs.org/)**: A React framework for building full-stack web applications.
-   **[React](https://react.dev/)**: A JavaScript library for building user interfaces.
-   **[TypeScript](https://www.typescriptlang.org/)**: A statically typed superset of JavaScript that adds type safety.
-   **[Tailwind CSS](https://tailwindcss.com/)**: A utility-first CSS framework for rapid UI development.
-   **[Framer Motion](https://www.framer.com/motion/)**: A production-ready motion library for React.
-   **[React Icons](https://react-icons.github.io/react-icons/)**: A library for including popular icons in React projects.
-   **[tech-stack-icons](https://www.npmjs.com/package/tech-stack-icons)**: A dedicated component for displaying technology logos.
-   **[ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)**: For maintaining code quality and consistent formatting.

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js (version 18.x or later) and npm installed on your machine.

-   `npm`
    ```sh
    npm install npm@latest -g
    ```

### Installation

1.  **Clone the repository**
    ```sh
    git clone https://github.com/Rikuron/Web-Portfolio.git
    ```
2.  **Navigate to the project directory**
    ```sh
    cd Web-Portfolio/next-ts
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Run the development server**
    ```sh
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## 📁 Project Structure

This project follows the standard Next.js App Router structure:

next-ts/ <br>
├── public/ # Static assets like fonts and images <br>
├── src/ <br>
│ ├── app/ <br>
│ | ├── components/ # Reusable client components (ThemeProvider, ProjectCard) <br>
| | ├── hooks/ # Custom React hooks (usePersistentTheme, useHeaderHeight)
│ │ ├── sections/ # Major UI sections (Header, Hero, Tech, Projects, Footer,) <br>
│ │ ├── utils/ # Utility functions (navigation, project data) <br>
│ │ ├── globals.css # Global styles and theme variables <br>
│ │ ├── layout.tsx # Root layout (Server Component) <br>
│ │ └── page.tsx # Main page content (Server Component) <br>
│ └── ... <br>
├── eslint.config.mjs <br>
├── next.config.ts <br>
├── postcss.config.mjs <br>
└── tsconfig.json <br>

---

## CONTACT

Josh Eugenio - [LinkedIn](https://www.linkedin.com/in/josh-eugenio-43148332b/) - josheugenio65@gmail.com

Project Link: [https://github.com/Rikuron/Web-Portfolio](https://github.com/Rikuron/Web-Portfolio)
