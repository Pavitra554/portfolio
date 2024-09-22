import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function FigureCard({ children }: { children: ReactNode }) {
  return (
    <figure
      className={cn(
        'relative mx-auto min-h-fit cursor-pointer overflow-hidden rounded-2xl p-6',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        // light styles
        'bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        // dark styles
        'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
      )}
    >
      {children}
    </figure>
  );
}
