'use client'

import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/Button';
import { Container } from '@/components/Container';
import React, { Suspense } from 'react';
//import { Metadata } from 'next';
import Image from 'next/image';

import clsx from 'clsx';

import { ReactNode } from 'react';

//export const metadata: Metadata = {
//    title: 'Áreas conhecimento',
//    description:
//      'Keidi Teixeira. Desenvolvedora Full Stack.',
//  };
  
  function GetHumanas() {
    const trimestre = useSearchParams().get('trimestre');

    return (
        <div className="rounded-2xl border border-sunglow bg-space-cadet bg-topography-sunglow p-6">
          
        <Button
            href={`/areas-conhecimento/ciencias-humanas?trimestre=${trimestre}`}
            variant="primary"
            text="Humanas"
            type="button"
            className="mt-6 w-full"
          />
         </div>
    );
  }

  function GetNatureza() {
    const trimestre = useSearchParams().get('trimestre');
    return (
        <div className="rounded-2xl border border-aquamarine bg-space-cadet bg-topography-aquamarine p-6">
          
        <Button
            href={`/areas-conhecimento/ciencias-natureza?trimestre=${trimestre}`}
            variant="primary"
            text="Natureza"
            type="button"
            className="mt-6 w-full"
          />
         </div>
    );
  }

  function GetLinguagens() {
    const trimestre = useSearchParams().get('trimestre');
    return (
        <div className="rounded-2xl border border-bright-pink bg-space-cadet bg-topography-bright-pink p-6">
          
        <Button
            href={`/areas-conhecimento/linguagens?trimestre=${trimestre}`}
            variant="primary"
            text="Linguagens"
            type="button"
            className="mt-6 w-full"
          />
         </div>
    );
  }

  function GetMatematica() {
    const trimestre = useSearchParams().get('trimestre');
    return (
        <div className="rounded-2xl border border-sunglow bg-space-cadet bg-topography-sunglow p-6">
          
        <Button
            href={`/areas-conhecimento/matematica?trimestre=${trimestre}`}
            variant="primary"
            text="Matematica"
            type="button"
            className="mt-6 w-full"
          />
         </div>
    );
  }

    function GetTecnologia() {
      const trimestre = useSearchParams().get('trimestre');
    return (
        <div className="rounded-2xl border border-bright-pink bg-space-cadet bg-topography-bright-pink p-6">
          
        <Button
            href={`/areas-conhecimento/tecnologia?trimestre=${trimestre}`}
            variant="primary"
            text="Tecnologia da Informação"
            type="button"
            className="mt-6 w-full"
          />
         </div>
    );
  }


export default function AreasConhecimento() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
          <Container className="mt-12 md:mt-14">
                <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col space-y-10">
        <GetHumanas />
            <GetNatureza />
            <GetTecnologia />
            
            </div>
                    <div className="flex flex-col space-y-10">
            <GetLinguagens />
            <GetMatematica />
           
          </div>
        </div>
      </Container>
      </Suspense>
      );
}
