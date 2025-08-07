import { PERSONAL_INFO } from '@/lib/constants';

export default function About() {
  return (
    <div className="w-full flex flex-col gap-4 border border-dashed border-t-0 p-5">
      <div className=" text-sm font-medium tracking-wider">About</div>
      <div className="text-muted-foreground">{PERSONAL_INFO.about}</div>
    </div>
  );
}
