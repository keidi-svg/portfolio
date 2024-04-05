import { Metadata } from 'next';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons';
import { ReactNode } from 'react';

interface SocialLinkTypes {
  className?: string;
  href: string;
  children: ReactNode;
  Icon: React.JSXElementConstructor<any>;
}

function SocialLink({ className, href, children, Icon }: SocialLinkTypes) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        target="_blank"
        rel="noopener noreferrer"
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-aquamarine dark:text-zinc-200"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

function MailIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

export const metadata: Metadata = {
  title: 'Sobre',
  description:
    'Keidi Teixeira Barbieri',
};

export default function About() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Nome{' '}
              <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
                Keidi Teixeira Barbieri
              </span>
              , atualmente moro em Florianópolis.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                {``}
              </p>
              <p>
                {``}
              </p>
              <p>
                {``}
              </p>
              <p>
                {``}
              </p>
              <p>
                {``}
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list" className="border-t border-aquamarine pt-8">
              <SocialLink
                href="https://github.com/Keidi-Teixeira"
                Icon={GitHubIcon}
                className="mt-4"
              >
                @Keidi-Teixeira
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/keidi-teixeira-barbier"
                Icon={LinkedInIcon}
                className="mt-4"
              >
                @keidi-teixeira-barbieri
              </SocialLink>
              <SocialLink
                href="mailto:keidi.t.b@gmail.com"
                Icon={MailIcon}
                className="mt-8 border-t border-aquamarine pt-8"
              >
                keidi.t.b@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
