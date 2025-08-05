'use client';

import { BlurFade } from '@/components/magicui/blur-fade';
import About from '@/components/sections/about';
import Experience from '@/components/sections/experience';
import Hackathons from '@/components/sections/hackathons';
import Header from '@/components/sections/header';
import Me from '@/components/sections/me';
import Work from '@/components/sections/work';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';

export default function Home() {
  return (
    <div className=" max-w-screen-sm w-full selection:bg-zinc-300 dark:selection:bg-zinc-700">
      <ScrollArea className="relative h-screen overflow-hidden scrollbar-hide">
        <BlurFade delay={0.1} inView>
          <Header />
        </BlurFade>
        <BlurFade delay={0.1} inView>
          <Me />
        </BlurFade>
        <BlurFade delay={0.1} inView>
          <About />
        </BlurFade>
        <BlurFade delay={0.1} inView>
          <Experience />
        </BlurFade>
        <BlurFade delay={0.1} inView>
          <Work />
        </BlurFade>
        <BlurFade delay={0.1} inView>
          <Hackathons />
        </BlurFade>
        <ProgressiveBlur position="bottom" height="12%" />
      </ScrollArea>
    </div>
  );
}
