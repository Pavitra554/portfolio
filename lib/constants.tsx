import { SiAutodesk } from 'react-icons/si';
import Image from 'next/image';

// Personal Information
export const PERSONAL_INFO = {
  name: 'Pavitra Behara',
  title: 'Software Engineer',
  company: 'Autodesk',
  companyUrl: 'https://www.autodesk.com/',
  location: 'India',
  email: 'pavitraredmi@gmail.com',
  about: `Hey there, I'm Pavitra — a developer who codes with instinct, flow, and a bit of vibecoding. I'm currently diving into complex backend systems, AI, cloud infrastructure, and LLMs. In my downtime, you'll find me grinding on the PS5.`,
  profileImage: '/me.png',
};

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/Pavitra554',
  linkedin: 'https://www.linkedin.com/in/pavitra-behara/',
  twitter: 'https://x.com/pavitrabehara',
  email: 'pavitraredmi@gmail.com',
};

// Experience Data
export const EXPERIENCE = [
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

// Hackathons Data
export const HACKATHONS = [
  {
    icon: <SiAutodesk size={24} />,
    link: 'href',
    companyname: 'Electrothon 4.0 by NIT Hamirpur',
    time: 'Feb 2022',
    title: 'Winner under Pandemic Theme',
    description:
      'Built "Svaasthy", Which enables us to ease up the emergency medical situations by providing the best and the fastest way to reach your nearest hospitals or medical centers.',
    points: [],
  },
];

// Work/Portfolio Images
export const WORK_IMAGES = ['/work/w1.png', '/work/w3.png', '/work/w2.png'];
