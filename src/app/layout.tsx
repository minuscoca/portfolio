import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/navbar";
import { ThemeToggle } from "@/components/theme/theme-toggle";

const montserrat = Montserrat({ subsets: ["latin"], weight: "200" });

export const metadata: Metadata = {
  title: "Kevin | Personal Portfolio",
  description: "Kevin is a react developer with 4 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} relative -z-50 transition-colors duration-300 ease-in-out`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Navbar />
          <LeftBackgroundDecorator />
          <RightBackgroundDecorator />
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}

function LeftBackgroundDecorator() {
  return (
    <div className="absolute left-10 -z-50 h-[24rem] w-3/6 rounded-[8rem] bg-rose-200 opacity-40 blur-3xl" />
  );
}
function RightBackgroundDecorator() {
  return (
    <div className="absolute right-10 -z-50 h-[24rem] w-3/6 rounded-[8rem] bg-sky-200 opacity-40 blur-3xl" />
  );
}
