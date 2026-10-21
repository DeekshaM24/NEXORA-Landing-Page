import { Manrope } from "next/font/google";
import DemoProvider from "@/components/DemoProvider";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Nexora | Make Space for Your Best Work",
  description: "Nexora is a calm workspace for tasks, projects, and team progress. Demo landing page.",
  icons: { icon: "/favicon.svg" },
};

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#5b2bd9" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={manrope.className}>
        <a href="#features" className="skip-link">Skip to content</a>
        <DemoProvider>{children}</DemoProvider>
      </body>
    </html>
  );
}
