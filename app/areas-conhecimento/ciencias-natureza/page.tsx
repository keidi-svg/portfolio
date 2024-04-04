'use client'

//import { Metadata } from 'next';

import ProjectCard from '@/components/ProjectCard';
import { SimpleLayout } from '@/components/SimpleLayout';

/* --------------------------- Logos for projects --------------------------- */
import logoYoutube from '@/public/logos/YouTube-White-Full-Color-Logo.wine.svg';
import logoDocs from '@/public/logos/Google_Docs_logo_(2014-2020).svg';
import logoSlides from '@/public/logos/Google_Slides_2020_Logo.svg';

import screenshotEvolucionismo from '@/public/assets/projects/evolucionismo.jpg';
import screenshotCircuitos from '@/public/assets/projects/circuitos.jpg';
import screenshotOrganica from '@/public/assets/projects/organica.jpg';
import screenshotSolar from '@/public/assets/projects/solar.jpg';

const professionalProjects = [
  {
    name: 'Meme evolucionismo',
    description:
      'Foi realizado um meme de acordo com os assuntos abordados em aula respectivamente: Ideias evolucionistas, os principais cientistas que trabalharam nessa área e alguns conceitos dentro do evolucionismo. Para mais informações acesse o Link.',
    tags: [
      {
        name: 'C2',
        color: 'text-sunglow',
      },
      {
        name: 'H11',
        color: 'text-blue-400',
      },
    ],
    image: screenshotEvolucionismo,
    logo: logoYoutube,
    appLink: 'https://youtube.com/shorts/IYz5yj_RfPc?feature=share',
  },
  {
    name: 'Atividade prática e relatório circuitos',
    description:
      'Experimentamos as diferenças entre circuitos de resistores em série e em paralelo, explorando como a resistência total é afetada em cada configuração. Utilizamos: Fonte de alimentação (2 pilhas AA) Resistor (3 unidades) Led (3 unidades) Multímetro Fios de conexão de cobre. Fizemos dois testes práticos com um circuitos de Resistores em Série e outro circuitos de Resistores em Paralelo o último acendeu o led. Para mais informações acesse o Link.',
    tags: [
      {
        name: 'C2',
        color: 'text-sunglow',
      },
      {
        name: 'C6',
        color: 'text-blue-400',
      },
      {
        name: 'H6',
        color: 'text-emerald-500',
      },
      {
        name: 'H34',
        color: 'text-bright-pink',
      }, 
    ],
    image: screenshotCircuitos,
    logo: logoDocs,
    appLink: 'https://docs.google.com/document/d/15Sui-01Yn19le9-uBEwjFzac8LSNTgf3rrpyTYb8GWw/edit?usp=sharing',
  },
  {
    name: 'Slides revisão orgânica',
    description:
      'Slide para revisar os seguintes assuntos de orgânica abordados em aula: Carbono(Tetravalência), Petróleo(Combustíveis fósseis-energia não renovável-pré sal), Hidrocarbonetos(Primeira função só Carbonos e Hidrogênios), Representações(Molecular, Estrutural e em Linha), Classificação Carbono(N° de carbonos ligados, tipo de ligação), Ligação Sigma e Pi(Todas ligações orgânicas). Para mais informações acesse o Link.',
    tags: [
      {
        name: 'C1',
        color: 'text-sunglow',
      },
      {
        name: 'H3',
        color: 'text-blue-400',
      },
      {
        name: 'H3',
        color: 'text-emerald-500',
      },
      {
        name: 'H5',
        color: 'text-bright-pink',
      },
    ],
    image: screenshotOrganica,
    logo: logoSlides,
    appLink: 'https://docs.google.com/presentation/d/18w8wvpV96XQaoF1xElHYXlB1n6H_CvOigL-qs-L5DZg/edit?usp=sharing',
  },
];

const personalProjects = [
  {
    name: 'Energia solar',
    description:
      'Estudo sobre potência e energia elétrica investimentos. Impactos socioambientais e o uso da energia solar. Para mais informações acesse o Link.',
    tags: [
      {
        name: 'C2',
        color: 'text-aquamarine',
      },
      {
        name: 'C6',
        color: 'text-emerald-500',
      },
      {
        name: 'H6',
        color: 'text-bright-pink',
      },
      {
        name: 'H34',
        color: 'text-indigo-300',
      },
    ],
    image: screenshotSolar,
    logo: logoDocs,
    sourceCodeLink: 'https://docs.google.com/document/d/1mBCj_JitgRzLnwJGG7YtQ-fddisd7I8l6tvFSvC4_zw/edit?usp=sharing',
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
//  description: `Projetos do primeiro trimestre de ciências da natureza`,
//};

export default function Projects() {
  return (
    <SimpleLayout
      HighlightedWord={HighLightedWord()}
      title="Algum dos assuntos trabalhados no primeiro trimestre de ciências da natureza"
      intro="Introdução ao estudo da Química Orgânica, Teorias evolucionistas e Potência elétrica e energia"
    >
      <h2 className="text-4xl font-semibold text-aquamarine sm:text-5xl">
        Projetos obrigatórios
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
        {professionalProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <h2 className="mt-10 text-4xl font-semibold text-bright-pink sm:text-5xl">
        Projeto de autoria escolhido
      </h2>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-16 tablet:grid-cols-2 xl:grid-cols-3">
        {personalProjects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SimpleLayout>
  );
}
