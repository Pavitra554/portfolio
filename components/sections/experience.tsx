import ExpCard from '../reusable/exp-card';
import { EXPERIENCE } from '@/lib/constants';

export default function Experience() {
  return (
    <div className="w-full flex flex-col gap-4 border border-dashed border-t-0 p-5 font-sans">
      <div className=" text-sm font-sans font-medium tracking-wider">
        Experience
      </div>
      <div className="flex flex-col gap-4">
        {EXPERIENCE.map((e, i) => (
          <ExpCard
            key={i}
            icon={e.icon}
            link={e.link}
            companyname={e.companyname}
            time={e.time}
            title={e.title}
            description={e.description}
            points={e.points}
            isOpenByDefault={e.isOpenByDefault || false}
          />
        ))}
      </div>
    </div>
  );
}
