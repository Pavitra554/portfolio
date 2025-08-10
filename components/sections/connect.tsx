import { cn } from '@/lib/utils';
import { GridPattern } from '../magicui/grid-pattern';
import Link from 'next/link';

export default function Connect() {
  return (
    <div className="relative w-full flex flex-col gap-4 border border-dashed border-t-0 p-5 font-inter">
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
      <div className="min-h-42 flex justify-center items-center text-muted-foreground">
        <div className="flex flex-col items-center justify-center sm:flex-row ">
          <div>Please feel free to shoot me a DM on</div>
          <Link
            className="ml-1 underline underline-offset-2 cursor-pointer text-primary font-medium"
            href={'https://x.com/pavitrabehara'}
            target="_blank"
          >
            @pavitrabehara
          </Link>
        </div>
      </div>
    </div>
  );
}
