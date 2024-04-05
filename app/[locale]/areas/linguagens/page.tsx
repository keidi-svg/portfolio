'use client'

//import { Metadata } from 'next';

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';

/* --------------------------- Logos for projects --------------------------- */
import logoDocs from '@/public/logos/Google_Docs_logo_(2014-2020).svg';
import logoSlides from '@/public/logos/Google_Slides_2020_Logo.svg';

import screenshotMiniconto from '@/public/assets/projects/miniconto.jpg';
import screenshotModernismo from '@/public/assets/projects/modernismo.jpg';

const professionalProjects = [
  {
    name: 'Miniconto',
    description:
      'Como legenda para a fotografia que seria "postada" no instagram, o grupo deve criar uma micro-narrativa (em inglês) inspirada na imagem, utilizando majoritariamente o tempo verbal estudado (simple past). Para mais informações acesse o Link.',
    tags: [
      { 
        name: 'H11',
        color: 'text-sunglow',
      },
      {
        name: 'H25',
        color: 'text-blue-400',
      },
      {
        name: 'H10',
        color: 'text-sunglow',
      },
      {
        name: 'H24',
        color: 'text-emerald-500',
      },
    ],
    image: screenshotMiniconto,
    logo: logoDocs,
    appLink: 'https://docs.google.com/document/d/1aX_7HY6CaedP6nUco4zPnTmlTSG6S5ZLze1upd1-F7Y/edit?usp=sharing',
  },
  {
    name: 'Pré-modernismo',
    description:
      'Pesquisa sobre itens relativos a obra estudada. Contexto sócio-histórico da época; Breve biografia do autor; Elementos da narrativa da obra e autor. Para mais informações acesse o Link.',
    tags: [
      {
        name: 'H3',
        color: 'text-sunglow',
      },
      {
        name: 'H4',
        color: 'text-blue-400',
      },
      {
        name: 'H22',
        color: 'text-emerald-500',
      },
      {
        name: 'H24',
        color: 'text-bright-pink',
      }, 
    ],
    image: screenshotModernismo,
    logo: logoSlides,
    appLink: 'https://docs.google.com/presentation/d/1NzOQUUjzH8gbrUIGNAmijnezUkBeul00hr7DU_h-HbA/edit?usp=sharing',
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
//  description: `Projetos do primeiro trimestre de linguagens`,
//};

export default function Projects() {
  return (
    <SimpleLayout
      HighlightedWord={HighLightedWord()}
      title="Algum dos assuntos trabalhados no primeiro trimestre de linguagens"
      intro="Pré-modernismo e Past simple (verb to be)"
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
