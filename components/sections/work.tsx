import Image from 'next/image';
import { GridPattern } from '../magicui/grid-pattern';
import { cn } from '@/lib/utils';

export default function Work() {
  return (
    <div className="relative w-full flex flex-col gap-4 border border-dashed border-t-0 p-5">
      <GridPattern
        width={38}
        height={39}
        x={-1}
        y={-1}
        strokeDasharray={'4 2'}
        className={cn(
          '[mask-image:linear-gradient(to_bottom,transparent_0%,transparent_10%,white_40%,white_100%)] opacity-15',
        )}
      />
      <div className="flex flex-col gap-10">
        <div className="text-sm font-medium tracking-wider">Work</div>

        <div className=" h-full w-full flex flex-row gap-4">
          <div className="h-60 w-full border border-dashed bg-muted dark:bg-zinc-900 z-10 rounded-xl overflow-hidden">
            <Image
              src={'/work/w1.png'}
              alt="app1"
              height={500}
              width={500}
              className="object-cover object-bottom w-full h-full"
            />
          </div>
          <div className="h-60 w-full border border-dashed bg-muted dark:bg-zinc-900 z-10 rounded-xl overflow-hidden">
            <Image
              src={'/work/w2.png'}
              alt="app1"
              height={500}
              width={500}
              className="object-cover object-bottom w-full h-full"
            />
          </div>
          <div className="h-60 w-full border border-dashed bg-muted dark:bg-zinc-900 z-10 rounded-xl overflow-hidden">
            <Image
              src={'/work/w3.png'}
              alt="app1"
              height={500}
              width={500}
              className="object-cover object-bottom w-full h-full"
            />
          </div>
        </div>
        <div>view more on github</div>
      </div>
    </div>
  );
}
