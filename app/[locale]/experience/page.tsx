// Dependencies
import { Metadata } from 'next';

// Components
import { Container } from '@/components/Container';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import TechSection from '@/components/techSection/TechSection';

export const metadata: Metadata = {
  title: 'Experiência',
  description: 'Minha experiência como uma desenvolvedora de software',
  openGraph: {
    title: 'Experiência',
    description: 'Minha experiência como uma desenvolvedora de software',
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

export default function Experience() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            {`Todas as coisas legais que eu `}
            <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
              experenciei
            </span>{' '}
            ao longo do caminho
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {`Um pouco sobre minha educação e experiência.`}
          </p>
        </div>
      </Container>
      <Container className="mt-20 flex flex-col">
        <ExperienceTimeline />
      </Container>
      <Container className="mt-16">
        <TechSection />
      </Container>
    </>
  );
}
