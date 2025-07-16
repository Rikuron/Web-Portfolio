import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";
import ClientLayout from "./components/ClientLayout";

export const metadata: Metadata = {
  title: "Josh Eugenio's Web Portfolio",
  description: "Josh Eugenio's Web Portfolio",
  keywords: ["Josh Eugenio", "Web Developer", "Software Engineer", "Full Stack Developer", "Frontend Developer", "Backend Developer", "React Developer", "Next.js Developer", "Node.js Developer", "MongoDB Developer", "Express.js Developer", "HTML Developer", "CSS Developer", "JavaScript Developer", "TypeScript Developer", "React Native Developer", "Flutter Developer", "Python Developer", "Java Developer", "C# Developer", "C++ Developer", "C Developer", "PHP Developer", "SQL Developer", "NoSQL Developer", "Cloud Engineer"],
  icons: {
    icon: "/josh_lmao.ico"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider>
        <ClientLayout>{children}</ClientLayout>
      </ThemeProvider>
    </html>
  );
}
