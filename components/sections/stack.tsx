import { GridPattern } from '../magicui/grid-pattern';
import { cn } from '@/lib/utils';

export default function Stack() {
  const skills = [
    'Next.js',
    'React Native',
    'Expo',
    'React.js',
    'Express.js',
    'FastAPI',
    'Node.js',
    'GraphQL',
    'TypeScript',
    'JavaScript',
    'Python',
    'Java',
    'PostgreSQL',
    'MongoDB',
    'Tailwind CSS',
    'Supabase',
    'Snowflake',
    'Cursor',
    'Claude Code',
    'Postman',
  ];

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
      <div className=" text-sm font-sans font-medium">Tech Stack / Tools</div>

      {/* Skills */}
      <div className="relative z-10 flex flex-wrap gap-2 text-muted-foreground">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 text-sm font-medium bg-muted dark:bg-zinc-900 border border-dashed rounded-md"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
