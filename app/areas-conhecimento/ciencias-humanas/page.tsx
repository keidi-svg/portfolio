'use client'

//import { Metadata } from 'next';

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';

/* --------------------------- Logos for projects --------------------------- */
import logoForms from '@/public/logos/Google_Forms_logo.svg';
import logoDocs from '@/public/logos/Google_Docs_logo_(2014-2020).svg';

import screenshotAmericanProgress from '@/public/assets/projects/American_Progress_(John_Gast_painting).jpg';
import screenshotDoutrina from '@/public/assets/projects/doutrina.png';
import screenshotFilme from '@/public/assets/projects/filme.jpg';
import screenshotTorres from '@/public/assets/projects/torres.jpg';

const professionalProjects = [
  {
    name: 'Enigma',
    description:
      'Foi realizado um enigma abordando os assuntos em aula em especifico sobre a queda das torres gêmeas. Há exatos 22 anos, em 11 de setembro de 2001, o mundo ficou estarrecido com um dos maiores ataques terroristas da história moderna. Quatro aviões, no espaço aéreo dos Estados Unidos, foram sequestrados por extremistas islâmicos e jogados contra prédios-símbolo do poder americano. Para mais informações acesse o Link.',
    tags: [
      {
        name: 'C3',
        color: 'text-sunglow',
      },
      {
        name: 'H15',
        color: 'text-blue-400',
      },
      {
        name: 'H16',
        color: 'text-aquamarine',
      },
    ],
    image: screenshotTorres,
    logo: logoForms,
    appLink: 'https://forms.gle/PTpG8w1KhHBkizJ7A',
  },
  {
    name: 'Análise pintura',
    description:
      'Foi realizada uma análise da pintura Progresso Americano (1872), de John Gast. Consolidação do território norte-americano, bem como os princípios e doutrinas que o legitimaram, compreendendo a sociedade estadunidense ao longo do século XIX e o seu papel no imperialismo pós 2ª Revolução Industrial. Para mais informações acesse o Link.',
    tags: [
      {
        name: 'C3',
        color: 'text-purple-400',
      },
      {
        name: 'H15',
        color: 'text-violet-400',
      },
      {
        name: 'H16',
        color: 'text-cyan-600',
      },
    ],
    image: screenshotAmericanProgress,
    logo: logoDocs,
    appLink: 'https://docs.google.com/document/d/1ztpPW2qzlzTlFB4IWBDL6Xn5Y0MhAlotnh5AWbEMHhw/edit?usp=sharing',
  },

  {
    name: 'Análise gravura',
    description:
      'Foi realizada uma análise da gravura do início do século XX representando aspectos da Doutrina Monroe. Consolidação do território norte-americano, bem como os princípios e doutrinas que o legitimaram, compreendendo a sociedade estadunidense ao longo do século XIX e o seu papel no imperialismo pós 2ª Revolução Industrial. Para mais informações acesse o Link.',
    tags: [
      {
        name: 'C3',
        color: 'text-purple-400',
      },
      {
        name: 'H15',
        color: 'text-violet-400',
      },
      {
        name: 'H16',
        color: 'text-cyan-600',
      },
    ],
    image: screenshotDoutrina,
    logo: logoDocs,
    appLink: 'https://docs.google.com/document/d/1sf0i0jPNoPtsXfYcUBhzZBBSmnryEEY-IyPAr1SOWQM/edit?usp=sharing',
  },

  {
    name: 'Filme 1917',
    description:
      'Análise e impretação sobre Corrida o filme que abordou o tempo imperialista e a fase neocolonialista, com a escalada de tensões que culminou na Grande Guerra mundial. Para mais informações acesse o Link.',
    tags: [
      {
        name: 'C3',
        color: 'text-purple-400',
      },
      {
        name: 'H15',
        color: 'text-violet-400',
      },
      {
        name: 'H16',
        color: 'text-cyan-600',
      },
    ],
    image: screenshotFilme,
    logo: logoDocs,
    appLink: 'https://docs.google.com/document/d/1n8TBYhkAEGh4hnrzS-7mB8YjNlgkoczBc-b_Vpkn-h0/edit?usp=sharing',
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
//  description: `Projetos do primeiro trimestre de ciências humanas`,
//};

export default function Projects() {
  return (
    <SimpleLayout
      HighlightedWord={HighLightedWord()}
      title="Algum dos assuntos trabalhados no primeiro trimestre de ciências humanas"
      intro="Imperialismo no século XIX e ocupação da Ásia e da África e EUA no século XIX e imperialismo"
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
