import FigureCard from '@/components/card/figure-card';
import { ThemeToggle } from '@/components/theme-toggle';
import { cn } from '@/lib/utils';

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <FigureCard>
        <div className="p-6">
          <ThemeToggle />
        </div>
      </FigureCard>
    </div>
  );
}
