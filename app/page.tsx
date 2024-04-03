// Dependencies
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

// Components
import { Button } from '@/components/Button';
import { Container, OuterContainer } from '@/components/Container';
import {
  GitHubIcon,
  LinkedInIcon
} from '../components/SocialIcons';

// Logos
import logoIF from '../public/logos/Imagem_Filmes_logo_p_b.svg';
import logoGL from '../public/logos/grupo_lhasa.svg';
import logoSenai from '../public/logos/senai.svg';

interface IconProps {
  className?: string;
}

function MailIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-sunglow"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-sunglow"
      />
    </svg>
  );
}

function BriefcaseIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-bright-pink"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-bright-pink"
      />
    </svg>
  );
}

function AcademicCap(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth={1.5}
      stroke="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        className="fill-zinc-100 stroke-aquamarine"
        d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
      />
    </svg>
  );
}

function ArrowDownIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SocialLink({
  Icon,
  href,
}: {
  Icon: React.JSXElementConstructor<any>;
  href: string;
}) {
  return (
    <Link target="_blank" rel="noopener noreferrer" className="group -m-1 p-1" href={href}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-aquamarine dark:fill-zinc-400" />
    </Link>
  );
}

function GetInContact() {
  return (
    <div className="rounded-2xl border border-sunglow bg-space-cadet bg-topography-sunglow p-6">
      <h2 className="flex rounded-md bg-[#ffffff33] p-2 text-sm font-semibold text-zinc-100 backdrop-blur-[10px]">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Entre em contato</span>
      </h2>
      <p className="mt-2 rounded-md bg-[#ffffff33] p-2 text-sm text-zinc-300 backdrop-blur-[10px]">
        {`Se você gostaria de me contatar siga o link abaixo e preencha o formulário
        😁.`}
      </p>
      <p className="mt-2 rounded-md bg-[#ffffff33] p-2 text-sm text-zinc-300 backdrop-blur-[10px]">
        {`Ou me envie um email diretamente keidi.t.b@gmail.com`}
      </p>
      <Button
        href="/contact"
        variant="primary"
        text="Contato"
        type="button"
        className="mt-6 w-full"
      ></Button>
    </div>
  );
}

function Resume() {
  let resume = [
    {
      company: 'Imagem Filmes',
      title: 'Estágio em desenvolvimento de software Java',
      logo: logoIF,
      start: '2023',
      end: {
        label: '2024',
        dateTime: '2024',
      },
    },
    {
      company: 'Grupo Lhasa',
      title: 'Estágio automação e desenvolvimento de software',
      logo: logoGL,
      start: '2022',
      end: {
        label: '2023',
        dateTime: '2023',
      },
    },
  ];

  return (
    <div className="rounded-2xl border border-bright-pink bg-space-cadet bg-topography-bright-pink p-6">
      <h2 className="flex rounded-md bg-[#ffffff33] p-2 text-sm font-semibold text-zinc-100 backdrop-blur-[10px]">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Trabalho</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li
            key={roleIndex}
            className="flex gap-4 rounded-md bg-[#ffffff33] p-2 backdrop-blur-[10px]"
          >
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-wrap gap-x-2">
              <dt className="sr-only">Company</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-200">
                {role.company}
              </dd>
              <dt className="sr-only">Role</dt>
              <dd className="text-xs text-zinc-300">{role.title}</dd>
              <dt className="sr-only">Date</dt>
              <dd
                className="ml-auto text-xs text-zinc-400"
                aria-label={`${role.start} until ${role.end.label ?? role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end.dateTime ?? role.end}>
                  {role.end.label ?? role.end}
                </time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button
        href="./CV/Keidi_TeixeiraBarbieri_Curriculo.pdf"
        download="Keidi_TeixeiraBarbieri_Curriculo.pdf"
        variant="primary"
        className="group mt-6 w-full"
        text="Download CV"
        newTab={true}
        icon={ArrowDownIcon({
          className:
            'h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50',
        })}
      ></Button>
    </div>
  );
}

function Education() {
  let education = [
    {
      school: 'SENAI Florianópolis (CTAI)',
      course: 'Técnico em Desenvolvimento de Sistemas',
      grade: 'A',
      logo: logoSenai,
      start: '2022',
      end: '2024',
    },
  ];

  return (
    <div className="rounded-2xl border border-aquamarine bg-space-cadet bg-topography-aquamarine p-6">
      <h2 className="flex rounded-md bg-[#ffffff33] p-2 text-sm font-semibold text-zinc-100 backdrop-blur-[10px]">
        <AcademicCap className="h-6 w-6 flex-none" />
        <span className="ml-3">Educação</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {education.map((role, roleIndex) => (
          <li
            key={roleIndex}
            className="flex gap-4 rounded-md bg-[#ffffff33] p-2 shadow-md backdrop-blur-[10px]"
          >
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-col flex-wrap gap-x-2">
              <dt className="sr-only">Educação</dt>
              <dd className="w-full flex-none text-sm font-medium text-zinc-100">
                {role.school}
              </dd>
              <dt className="sr-only">Curso</dt>
              <dd className="text-xs text-zinc-300">{role.course}</dd>
              <dt className="sr-only">Nota</dt>
              <dd className="text-xs text-zinc-300">{role.grade}</dd>
              <dt className="sr-only">Data</dt>
              <dd
                className="block text-xs text-zinc-400"
                aria-label={`${role.start} until ${role.end}`}
              >
                <time dateTime={role.start}>{role.start}</time>{' '}
                <span aria-hidden="true">—</span>{' '}
                <time dateTime={role.end}>{role.end}</time>
              </dd>
            </dl>
          </li>
        ))}
      </ol>
    </div>
  );
}

export const metadata: Metadata = {
  title: 'Home',
  description:
    'Keidi Teixeira Barbieri. Desenvolvedora Full Stack.',
};

export default function Home() {
  return (
    <>
      <Container className="mt-12 md:mt-14">
        <div className="overflow-hidden">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                Keidi Teixeira Barbieri <br />
                <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-7xl">
                  Desenvolvedora de Software Full Stack
                </span>
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {`Eu sou Keidi T., uma profissional dedicada ao crescimento pessoal e à busca constante por conhecimento. Minha jornada é marcada por uma paixão 
                 por aprender e evoluir constantemente, sempre buscando novos desafios e  oportunidades de crescimento.
                 `}
              </p>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {`
                  Atualmente, estou focada em me tornar uma desenvolvedora full stack, com formação
                 em Desenvolvimento de Sistemas pelo Senai. Minha experiência inclui trabalhos com
                 automação e programação web, onde utilizo uma variedade de tecnologias como C#, SQL, DotNet,
                 Google Cloud, Java, Javascript, GIT e GITHUB.
                 `}
              </p>

              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {`
                  Ao longo do tempo, tenho investido em minha educação através de cursos, bootcamps
                 e projetos nas áreas de C#, Java, Javascript, SQL, Spring Boot, JDBC, Maven, Rest API,
                 CSS e Bootstrap. Além disso, busco constantemente ampliar meu conhecimento técnico através
                 da leitura de livros, tanto técnicos quanto de lazer. 
                 `}
              </p>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {`
                  Minha trajetória profissional inclui estágios em empresas como Imagem Filmes e Grupo Lhasa,
                 onde pude desenvolver minhas habilidades em programação web, análise de dados, desenvolvimento
                 de sistemas e implantação de sistemas. Nestas experiências, trabalhei com uma variedade de
                 tecnologias e metodologias, incluindo Java, SQL, Google Cloud, Vaadin, TDD e Java Web.
                 `}
              </p>

              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {`
                  Além disso, possuo certificações que validam minhas habilidades técnicas, como o Professional 
                 Scrum Master™ I (PSM I) pela Scrum.org, o Lean Six Sigma White Belt Professional Certification pela
                 CertiProf International, e o Business Intelligence Foundation Professional Certification pela mesma 
                 instituição.
                 `}
              </p>

              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                {`
                  Sou uma pessoa comprometida, organizada e focada em resultados. Estou sempre em busca de novos
                 desafios e oportunidades para crescer profissionalmente, contribuindo de forma significativa para 
                 os projetos e equipes com as quais trabalho. Com uma base sólida em desenvolvimento de software e uma 
                 paixão pelo aprendizado contínuo, estou pronta para enfrentar os desafios que o futuro me reserva e 
                 continuar evoluindo como profissional.
                 `}
              </p>

              <div className="mt-6 flex gap-6">
                <SocialLink
                  href="https://github.com/Keidi-Teixeira"
                  aria-label="Siga-me no GitHub!"
                  Icon={GitHubIcon}
                />
                <SocialLink
                  href="https://www.linkedin.com/in/keidi-teixeira-barbieri"
                  aria-label="Conecte-se comigo no Linkedin!"
                  Icon={LinkedInIcon}
                />
              </div>
        </div>
      </Container>
      <Container className="mt-12 md:mt-14">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <Education />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <GetInContact />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  );
}
