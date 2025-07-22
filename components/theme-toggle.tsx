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
  const { setTheme, theme } = useTheme();
  const [isToggling, setIsToggling] = React.useState(false);

  const handleToggle = () => {
    setIsToggling(true);
    setTimeout(() => {
      setTheme(theme === 'dark' ? 'light' : 'dark');
      setIsToggling(false);
    }, 100); // Match the duration-300 in your classes
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="size-7 cursor-pointer"
          onClick={handleToggle}
          aria-label="Toggle theme"
        >
          <span
            className={`absolute transition-transform duration-300 ${
              isToggling ? 'scale-0 rotate-90' : 'scale-100 rotate-0'
            }`}
          >
            {theme === 'dark' ? (
              <PiSunDuotone size={16} />
            ) : (
              <PiMoonDuotone size={16} />
            )}
          </span>
          <span
            className={`absolute transition-transform duration-300 ${
              isToggling ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'
            }`}
          >
            {theme === 'dark' ? (
              <PiMoonDuotone size={16} />
            ) : (
              <PiSunDuotone size={16} />
            )}
          </span>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-sans font-medium font-xs">
          {theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
