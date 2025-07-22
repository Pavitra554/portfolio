import Image from 'next/image';
import { GridPattern } from '../magicui/grid-pattern';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { PiArrowUpRight } from 'react-icons/pi';

export default function Me() {
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
      <div className="flex flex-col items-center justify-center rounded-2xl bg-muted dark:bg-zinc-900 z-10 border border-dashed">
        <Image
          src="/me.png"
          alt="Picture of the author"
          width={80}
          height={80}
        />
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="font-semibold text-xl">Pavitra Behara</div>
        <div className="font-medium text-muted-foreground ml-4">
          Software Engineer{' '}
          <span className="inline-flex items-center group">
            <Link
              href="https://www.autodesk.com/"
              target="_blank"
              className="inline-flex items-center gap-[2px] relative hover:text-zinc-950 dark:hover:text-zinc-50 transition-colors"
            >
              @Autodesk
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
