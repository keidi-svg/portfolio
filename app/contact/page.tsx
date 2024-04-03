import { Metadata } from 'next';

// Components
import ContactForm from '@/components/ContactForm';
import { Container } from '@/components/Container';
import Earth from '@/components/canvas/Earth';

export const metadata: Metadata = {
  title: 'Contato',
  description: `Entre em contato comigo! Eu estou sempre aberta a trabalhar com pessoas em coisas novas incríveis.`,
};

export default function Contact() {
  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Entre em{' '}
            <span className="bg-gradient-to-r from-aquamarine to-bright-pink bg-clip-text text-6xl text-transparent sm:text-8xl">
              Contato
            </span>{' '}
            Comigo se você quiser 😁
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {`Estou sempre aberta a novas oportunidades de trabalho ou colaborando em algum
             novos projetos incríveis. Basta preencher o formulário e retornarei para
             você.`}
          </p>
        </div>
      </Container>
      <Container className="mt-8 sm:mt-16">
        <div className="flex flex-col gap-10 overflow-hidden xl:flex-row-reverse xl:items-center">
          <Earth />
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
