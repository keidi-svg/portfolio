'use client'

//import { Metadata } from 'next';

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';

/* --------------------------- Logos for projects --------------------------- */
import logoYoutube from '@/public/logos/YouTube-White-Full-Color-Logo.wine.svg';

import screenshotTesouro from '@/public/assets/projects/tesouro.jpg';

const professionalProjects = [
  {
    name: 'Caça ao tesouro',
    description:
      'Breve história apresentando uma trilha com um mapa dentro do ambiente da escola utilizando os conceitos de arcos e ângulos que foram abordados em aula para elaborar uma caça ao tesouro. Utilizando uma bússola digital. Para mais informações acesse o Link.',
    tags: [
      {
        name: 'C2',
        color: 'text-sunglow',
      },
      {
        name: 'H5',
        color: 'text-blue-400',
      },
      {
        name: 'H16',
        color: 'text-aquamarine',
      },
    ],
    image: screenshotTesouro,
    logo: logoYoutube,
    appLink: 'https://youtu.be/QD5ObRhKrgc?si=iZYhuxxbzdw2mqCM',
  },
];

function HighLightedWord() {
  return (
    <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
      Projetos:
    </span>
  );
}

//export const metadata: Metadata = {
//  title: 'Projetos',
//  description: `Projetos do primeiro trimestre de matemática`,
//};

export default function Projects() {
  return (
    <SimpleLayout
      HighlightedWord={HighLightedWord()}
      title="Algum dos assuntos trabalhados no primeiro trimestre de matemática"
      intro="Arcos e ângulos: unidades de medida"
    >
      <h2 className="text-4xl font-semibold text-aquamarine sm:text-5xl">
        Projetos obrigatórios
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
        {professionalProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SimpleLayout>
  );
}
