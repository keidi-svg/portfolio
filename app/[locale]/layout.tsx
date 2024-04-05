import './globals.css';
import 'devicon/devicon.min.css';

import type { Metadata } from 'next';
import Script from 'next/script';
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

// Components
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { StarsCanvas } from '@/components/canvas/Stars';

export const metadata: Metadata = {
  title: {
    default: 'Keidi',
    template: '%s',
  },
  description:
    'Keidi Teixeira Barbieri. Full Stack Developer',
  openGraph: {
    title: 'Keidi',
    description:
      'Keidi Teixeira Barbieri. Full Stack Developer',
    url: 'https://keidi.dev',
    siteName: 'Keidi',
    locale: 'pt-BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({children}: {children: React.ReactNode;}) {
  return (
    <html lang="pt" className="w-full">
      <head>
        <Script id="set-theme">{`
          let darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

          updateMode()
          darkModeMediaQuery.addEventListener('change', updateModeWithoutTransitions)
          window.addEventListener('storage', updateModeWithoutTransitions)

          function updateMode() {
          let isSystemDarkMode = darkModeMediaQuery.matches
          let isDarkMode = window.localStorage.isDarkMode === 'true' || (!('isDarkMode' in window.localStorage) && isSystemDarkMode)

            if (isDarkMode) {
              document.documentElement.classList.add('dark')
            } else {
              document.documentElement.classList.remove('dark')
            }

            if (isDarkMode === isSystemDarkMode) {
              delete window.localStorage.isDarkMode
            }
          }

          function disableTransitionsTemporarily() {
            document.documentElement.classList.add('[&_*]:!transition-none')
            window.setTimeout(() => {
              document.documentElement.classList.remove('[&_*]:!transition-none')
            }, 0)
          }

          function updateModeWithoutTransitions() {
            disableTransitionsTemporarily()
            updateMode()}
          `}</Script>
      </head>
      <body className="flex h-full flex-col bg-[#12071f]">
        <StarsCanvas />
        <div className="fixed inset-0 flex w-screen justify-center overflow-x-hidden sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-white ring-1 ring-aquamarine dark:bg-zinc-900"></div>
          </div>
        </div>
        <div className="relative overflow-x-visible">
          <Header />
          <main className="w-screen">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
