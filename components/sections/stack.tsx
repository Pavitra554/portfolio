import { GridPattern } from '../magicui/grid-pattern';
import { cn } from '@/lib/utils';
import { WordRotate } from '../magicui/word-rotate';

export default function Stack() {
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
      <div className=" text-sm font-sans font-medium">Tech Stack ?</div>
      <div className="w-full min-h-36 text-5xl font-bold tracking-tigh flex items-center justify-center pb-10">
        <WordRotate
          className="text-6xl font-bold text-black dark:text-white"
          words={['Learn.', 'Build.', 'Ship.']}
        />
      </div>
    </div>
  );
}
