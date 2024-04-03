'use client';

// Dependencies
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import Image from 'next/image';

// Logos
import logoIF from '../public/logos/Imagem_Filmes_logo_p_b.svg';
import logoGL from '../public/logos/grupo_lhasa.svg';

// Stylesheets
import 'react-vertical-timeline-component/style.min.css';

// Pattern
import topographyAquamarine from '@/public/patterns/topography-aquamarine.svg';

const experiences = [
  {
    title: 'Estagiária em desenvolvimento de software',
    company_name: 'Grupo Lhasa',
    icon: logoGL,
    iconBg: '#20271f',
    date: 'Maio 2022 - Dezembro 2022',
    points: [
      'Trabalhei no Grupo Lhasa empresa do setor financeiro, lá atuei na área de automação de tarefas web e testes automatizados em .NET, integração de banco de dados, SQL, desenvolvimento com excel, api, sockets, entre outros.',
    ],
  },
  {
    title: 'Estagiária em desenvolvimento de software',
    company_name: 'Imagem Filmes',
    icon: logoIF,
    iconBg: '#ffffff',
    date: 'Janeiro 2023 - Janeiro 2024',
    points: [
      'Trabalhei na Imagem Filmes empresa distribuidora de filmes, atuei na área de programação web com foco em Java, SQL, Google Cloud, Vaadin, TDD e Java Web.',
      'Hábil em análise de dados, abrangendo coleta, limpeza e estruturação. Adepto da análise de desenvolvimento de sistemas, incluindo TDD, front-end, back-end, SQL, sistemas embarcados e integração de API. Experiência prática na implementação de sistemas, utilizando pipelines, CI/CD, logs e gerenciamento de sistemas operacionais.',
      'A experiência abrangente garante uma contribuição eficaz em todo o ciclo de vida de desenvolvimento de software',
    ],
  },
];

interface ExperienceTypes {
  title: string;
  company_name: string;
  icon: any;
  iconBg: string;
  date: string;
  points: string[];
}

function ExperienceCard({ experience }: { experience: ExperienceTypes }) {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#FB6A82',
        color: '#fff',
        backgroundImage: `url(${topographyAquamarine.src})`,
      }}
      contentArrowStyle={{ borderRight: '7px solid #fb6a82' }}
      date={experience.date}
      dateClassName="rounded-md bg-[#ffffff33] p-2 backdrop-blur-[10px] text-zinc-100 lg:text-zinc-800 dark:text-zinc-100 text-bold opacity-100"
      iconStyle={{ background: experience.iconBg, borderColor: '#00FFAB' }}
      icon={
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            className="h-[60%] w-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="mb-2 rounded-md bg-[#ffffff33] p-2 backdrop-blur-[10px]">
        <div className="py-5">
          <h3 className="text-xl font-semibold leading-6 text-zinc-100">
            {experience.title}
          </h3>
          <p
            className="mt-1 max-w-2xl text-sm font-thin text-zinc-100"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>

        <div className="border-t border-aquamarine px-4 py-5 sm:p-0">
          <ul className="mt-5 ml-5 list-disc space-y-2">
            {experience.points.map((point, index) => (
              <li
                key={`experience-point-${index}`}
                className="text-white-100 pl-1 text-[14px] tracking-wider"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </VerticalTimelineElement>
  );
}

export default function ExperienceTimeline() {
  return (
    <VerticalTimeline lineColor="#00FFAB">
      {experiences.map((experience, index) => (
        <ExperienceCard key={`experience-${index}`} experience={experience} />
      ))}
    </VerticalTimeline>
  );
}
