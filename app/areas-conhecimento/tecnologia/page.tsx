'use client'

//import { Metadata } from 'next';

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';

/* --------------------------- Logos for projects --------------------------- */
import logoDrive from '@/public/logos/Google_Drive_icon_(2020).svg';

import screenshotCalculadora from '@/public/assets/projects/calculadora.jpg';
import screenshotApi from '@/public/assets/projects/api-rest.png';

const professionalProjects = [
  {
    name: 'Calculadora',
    description:
      'Projeto de uma calculadora em JavaScript para treinar os assuntos abordados no segundo ano. Para mais informações acesse o Link.',
    tags: [
      { 
        name: 'JavaScript',
        color: 'text-sunglow',
      },
    ],
    image: screenshotCalculadora,
    logo: logoDrive,
    appLink: 'https://drive.google.com/file/d/1gI14R6hbcjpbs4rDoblM4eS2uAOFOOtK/view?usp=sharing',
  },
  {
    name: 'API',
    description:
      'Projeto de uma API de cadastro de veículos com o SpringBoot. Utilizando H2 e PostgreSQL. Para mais informações acesse o Link.',
    tags: [
      {
        name: 'PostgreSQL',
        color: 'text-sunglow',
      },
      {
        name: 'API',
        color: 'text-blue-400',
      },
      {
        name: 'SpringBoot',
        color: 'text-aquamarine',
      },
    ],
    image: screenshotApi,
    logo: logoDrive,
    appLink: 'https://drive.google.com/drive/folders/10byMaXge-RjY_SDBl-Ld9p28QW5j31dX?usp=sharing',
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
//  description: `Projetos do primeiro trimestre de Desenvolvimento de Sistemas`,
//};

export default function Projects() {
  return (
    <SimpleLayout
      HighlightedWord={HighLightedWord()}
      title="Algum dos assuntos trabalhados no primeiro trimestre de Desenvolvimento de Sistemas"
      intro="API, JavaScript, UML..."
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
