import Image from 'next/image';
import ExpCard from '../reusable/exp-card';
import { SiAutodesk } from 'react-icons/si';

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

export default function Experience() {
  const experience: experience[] = [
    {
      icon: <SiAutodesk size={24} />,
      link: 'https://www.autodesk.com/',
      companyname: 'Autodesk',
      time: 'July 2024 - Present',
      title: 'SDE 1',
      description:
        'Working on internal platforms that drive automation, improve operational efficiency, and support data-informed decisions across teams.',
      points: [
        'Contributed to the development of an internal platform that automates software license provisioning and deprovisioning across teams. Helped reduce manual effort and cost by up to 90% by streamlining workflows and eliminating redundant product assignments. Delivered insights through dynamic usage analytics and role-based dashboards.',
        'Helped build a centralized portal for accessing third-party services, with smart search, filtering, and categorization to improve discoverability and decision-making.',
        'Supported the development of a survey system to assess application maturity, enhance data flow clarity, and provide actionable insights via visual summaries.',
      ],
      isOpenByDefault: true,
    },
    {
      icon: <SiAutodesk size={24} />,
      link: 'https://www.autodesk.com/',
      companyname: 'Autodesk',
      time: 'Jan 2024 - June 2024',
      title: 'SDE Intern',
      description:
        'Built a PoC system to track software usage and generate insights, which later served as the foundation for a production platform focused on cost optimization and usage visibility.',
      points: [
        'Designed and developed full-stack features using FastAPI, PostgreSQL, Next.js, and TypeScript, integrating data from multiple product APIs.',
        'Deployed backend on AWS EC2 and handled data processing for stakeholder-facing dashboards',
      ],
    },
    {
      icon: (
        <Image
          width={100}
          height={100}
          alt="futurebit"
          src={'./logo/futurebit.svg'}
        />
      ),
      link: 'https://www.futurebits.tech/',
      companyname: 'Futurebits',
      time: 'Sept 2022 - Oct 2022',
      title: 'SDE Intern - Frontend',
      description:
        'Contributed to UI development and issue resolution across frontend projects.',
      points: [
        'Built 8+ responsive UI pages and reusable components based on design specs.',

        `Fix'ed 50+ UI bugs and participated in code reviews to improve code quality.`,

        `Tech Stack: Next.js, TypeScript, React.js, Tailwind CSS`,
      ],
    },
  ];

  return (
    <div className="w-full flex flex-col gap-4 border border-dashed border-t-0 p-5 font-sans">
      <div className=" text-sm font-sans font-medium tracking-wider">
        Experience
      </div>
      <div className="flex flex-col gap-4">
        {experience.map((e, i) => (
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
