'use client';
import { Button } from '../ui/button';
import {
  PiEnvelopeDuotone,
  PiGithubLogoDuotone,
  PiLinkedinLogoDuotone,
  PiMapPinDuotone,
  PiXLogoDuotone,
} from 'react-icons/pi';
import { ThemeToggle } from '../theme-toggle';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import * as React from 'react';
import { toast } from 'sonner';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { SOCIAL_LINKS } from '@/lib/constants';

export default function Header() {
  const { copied, copyToClipboard } = useCopyToClipboard();

  const handleCopyEmail = async () => {
    const success = await copyToClipboard(SOCIAL_LINKS.email);
    toast(success ? 'Email copied to clipboard' : 'Failed to copy email');
  };

  return (
    <div className="w-full flex flex-row justify-between items-center border border-dashed p-4">
      <div className="flex flex-row items-center gap-1 text-sm text-muted-foreground select-none">
        <PiMapPinDuotone size={16} />
        <div className="text-sm font-medium tracking-wider">India</div>
      </div>
      <div className="flex flex-row items-center gap-1 text-sm text-muted-foreground">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="size-7 cursor-pointer"
              onClick={handleCopyEmail}
            >
              <PiEnvelopeDuotone size={16} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-sans font-medium font-xs">
              {copied ? 'Copied!' : 'Mail'}
            </p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="size-7 cursor-pointer"
              >
                <PiGithubLogoDuotone size={16} />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-sans font-medium font-xs">GitHub</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="size-7 cursor-pointer"
              >
                <PiLinkedinLogoDuotone size={16} />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-sans font-medium font-xs">LinkedIn</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Link
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="size-7 cursor-pointer"
              >
                <PiXLogoDuotone size={16} />
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p className="font-sans font-medium font-xs">X (Twitter)</p>
          </TooltipContent>
        </Tooltip>
        <ThemeToggle />
      </div>
    </div>
  );
}
