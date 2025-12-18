'use client';

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { GridPattern } from '../magicui/grid-pattern';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { PiArrowUpRight } from 'react-icons/pi';
import { PERSONAL_INFO } from '@/lib/constants';

export default function Me() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="relative w-full flex flex-col gap-4 justify-center items-center border border-dashed border-t-0 p-5">
      <GridPattern
        width={38}
        height={39}
        x={-1}
        y={-1}
        strokeDasharray={'4 2'}
        className={cn(
          '[mask-image:radial-gradient(400px_circle_at_center,transparent,white)] opacity-15',
        )}
      />
      <div className="hidden md:flex flex-col items-center justify-center rounded-3xl bg-muted dark:bg-black z-10 border border-dashed pb-1 px-0.5">
        <video
          key={mounted ? theme : 'server'}
          id="avatar"
          autoPlay
          muted
          loop
          className="w-24 h-24 rounded-3xl object-cover"
        >
          {mounted && (
            <>
              <source
                src={theme === 'dark' ? '/dark_me.webm' : '/light_me.webm'}
                type="video/webm"
              />
              <source
                src={theme === 'dark' ? '/dark_me.mp4' : '/light_me.mp4'}
                type="video/mp4"
              />
            </>
          )}
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="flex md:hidden flex-col items-center justify-center rounded-3xl bg-muted dark:bg-black z-10 border border-dashed p-2 px-4">
        <Image
          src={PERSONAL_INFO.profileImage}
          alt={PERSONAL_INFO.name}
          width={68}
          height={68}
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center">
        <div className="font-semibold text-xl">{PERSONAL_INFO.name}</div>
        <div className="font-medium text-muted-foreground ml-4">
          {PERSONAL_INFO.title}{' '}
          <span className="inline-flex items-center group">
            <Link
              href="https://www.autodesk.com/"
              target="_blank"
              className="inline-flex items-center gap-[2px] relative hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
            >
              @{PERSONAL_INFO.company}
              <span className="inline-flex transform -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                <PiArrowUpRight size={18} />
              </span>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
