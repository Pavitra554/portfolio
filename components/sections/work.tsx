import Image from 'next/image';
import { GridPattern } from '../magicui/grid-pattern';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { PiGithubLogoDuotone } from 'react-icons/pi';
import { WORK_IMAGES } from '@/lib/constants';

export default function Work() {
  return (
    <div className="relative w-full flex flex-col gap-4 border border-dashed border-t-0 p-5">
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        strokeDasharray={'4 2'}
        className={cn(
          '[mask-image:linear-gradient(to_bottom,transparent_0%,transparent_10%,white_30%,white_70%,transparent_90%,transparent_100%)] opacity-20',
        )}
      />
      <div className="flex flex-col gap-10">
        <div className="text-sm font-medium tracking-wider">Work</div>

        <div className=" h-full w-full flex flex-col sm:flex-row gap-4">
          {WORK_IMAGES.map((image, index) => (
            <div className="h-60 w-full border border-dashed bg-muted dark:bg-zinc-900 z-10 rounded-xl overflow-hidden">
              <Image
                key={index}
                src={image}
                alt="app1"
                height={500}
                width={500}
                className="object-cover object-bottom w-full h-full"
              />
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <Button
            variant="outline"
            size="sm"
            className="cursor-pointer border-dashed dark:bg-zinc-950"
          >
            Explore more on
            <PiGithubLogoDuotone size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
