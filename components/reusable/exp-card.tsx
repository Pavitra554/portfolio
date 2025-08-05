import Link from 'next/link';
import { SiAutodesk } from 'react-icons/si';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

type experience = {
  icon: React.ReactNode;
  link: string;
  companyname: string;
  time: string;
  title: string;
  description: string;
  points: string[];
  isOpenByDefault?: boolean;
};

export default function ExpCard({
  icon,
  link,
  companyname,
  time,
  title,
  description,
  points,
  isOpenByDefault = false,
}: experience) {
  return (
    <div className="w-full flex flex-row gap-2">
      <Link href={link || ''} target="_blank" className="cursor-pointer">
        <div className=" w-10 h-10 mt-0.5 flex flex-col items-center justify-center rounded-lg bg-muted dark:bg-zinc-900 z-10 border border-dashed p-2">
          {icon}
        </div>
      </Link>
      <div className="flex flex-col items-start justify-center gap-4 w-full">
        <Accordion
          type="single"
          collapsible
          className="w-full"
          defaultValue={isOpenByDefault ? 'experience-details' : undefined}
        >
          <AccordionItem value="experience-details" className="border-none">
            <AccordionTrigger className="py-0 hover:no-underline cursor-pointer">
              <div className=" font-medium text-left">
                <div>{title}</div>
                <div className="text-sm tracking-wider text-muted-foreground">
                  {companyname} • {time}
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-base mt-4">
              <div className="flex flex-col gap-3">
                <div>{description}</div>
                <ul className="list-disc pl-4 flex flex-col gap-3">
                  {points.map((e, i) => (
                    <li key={i}>{e}</li>
                  ))}
                </ul>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
