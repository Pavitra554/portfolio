'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { PiMoonDuotone, PiSunDuotone } from 'react-icons/pi';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isToggling, setIsToggling] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  // Prevent hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const handleToggle = () => {
    setIsToggling(true);
    setTimeout(() => {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
      setIsToggling(false);
    }, 100);
  };

  // Use resolvedTheme for more reliable theme detection
  const currentTheme = mounted ? resolvedTheme : 'dark';

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-7 cursor-pointer relative"
          onClick={handleToggle}
          aria-label="Toggle theme"
        >
          <span
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
              isToggling ? 'scale-0 rotate-90' : 'scale-100 rotate-0'
            }`}
          >
            {currentTheme === 'dark' ? (
              <PiSunDuotone size={16} />
            ) : (
              <PiMoonDuotone size={16} />
            )}
          </span>
          <span
            className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${
              isToggling ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'
            }`}
          >
            {currentTheme === 'dark' ? (
              <PiMoonDuotone size={16} />
            ) : (
              <PiSunDuotone size={16} />
            )}
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-sans font-medium text-xs">
          {currentTheme === 'dark'
            ? 'Switch to light mode'
            : 'Switch to dark mode'}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
