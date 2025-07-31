import { GridPattern } from '../magicui/grid-pattern';
import { cn } from '@/lib/utils';

export default function Work() {
  return (
    <div className="relative min-h-96 w-full flex flex-col gap-4 border border-dashed border-t-0 p-5">
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
      <div className="text-sm font-medium tracking-wider">Work</div>

      <div></div>
    </div>
  );
}
