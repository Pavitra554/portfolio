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
  const Hackathons: hackathons[] = [
    {
      icon: <SiAutodesk size={24} />,
      link: 'href',
      companyname: 'Electrothon 4.0 by NIT Hamirpur',
      time: 'Feb 2022',
      title: 'Winner under Pandemic Theme',
      description:
        'Built “Svaasthy”, Which enables us to ease up the emergency medical situations by providing the best and the fastest way to reach your nearest hospitals or medical centers.',
      points: [],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 border border-dashed border-t-0 p-5 font-sans">
      <div className=" text-sm font-sans font-medium tracking-wider">
        Hackathons
      </div>
      <div className="flex flex-col gap-4">
        {Hackathons.map((e, i) => (
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
