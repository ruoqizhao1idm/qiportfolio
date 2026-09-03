import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/language";

export const metadata: Metadata = {
  title: "Qi — Product / UX Designer",
  description: "Product designer creating AI-powered experiences that feel clear, human and accessible.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><LanguageProvider>{children}</LanguageProvider></body></html>;
}
