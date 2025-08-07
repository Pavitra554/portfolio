import { HACKATHONS } from '@/lib/constants';
import ExpCard from '../reusable/exp-card';
import { SiAutodesk } from 'react-icons/si';

type hackathons = {
  icon: React.ReactNode;
  link: string;
  companyname: string;
  time: string;
  title: string;
  description: string;
  points: string[];
};

export default function Hackathons() {
  return (
    <div className="w-full flex flex-col gap-4 border border-dashed border-t-0 p-5 font-sans">
      <div className=" text-sm font-sans font-medium tracking-wider">
        Hackathons
      </div>
      <div className="flex flex-col gap-4">
        {HACKATHONS.map((e, i) => (
          <ExpCard
            key={i}
            icon={e.icon}
            link={e.link}
            companyname={e.companyname}
            time={e.time}
            title={e.title}
            description={e.description}
            points={e.points}
          />
        ))}
      </div>
    </div>
  );
}
