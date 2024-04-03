'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

import {
  Container,
  OuterContainer,
  InnerContainer,
} from '@/components/Container';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children?: ReactNode;
}

function NavLink({ href, children }: NavLinkProps) {
  let isActive = usePathname() === href;

  return (
    <Link
      href={href}
      className={clsx(
        'transition',
        isActive ? 'text-aquamarine' : 'hover:text-aquamarine'
      )}
    >
      {children}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="mt-32">
      <OuterContainer>
        <div className="border-t border-bright-pink pt-10 pb-16">
          <InnerContainer>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                2024 © Portfólio Keidi 
              </p>
            </div>
          </InnerContainer>
        </div>
      </OuterContainer>
    </footer>
  );
}
