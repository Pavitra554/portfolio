import { useState } from 'react';

interface CopyToClipboardState {
  copied: boolean;
  copyToClipboard: (text: string) => Promise<boolean>;
}

export function useCopyToClipboard(duration = 1200): CopyToClipboardState {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string): Promise<boolean> => {
    if (!text) return false;

    try {
      // Modern API approach
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), duration);
        return true;
      }

      // Fallback for mobile browsers
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.cssText = 'position:fixed;pointer-events:none;opacity:0;';
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();

      // @ts-ignore: Fallback for mobile browsers
      const success = document.execCommand('copy');
      document.body.removeChild(textarea);

      if (success) {
        setCopied(true);
        setTimeout(() => setCopied(false), duration);
        return true;
      }
      return false;
    } catch (error) {
      console.warn('Copy failed:', error);
      setCopied(false);
      return false;
    }
  };

  return { copied, copyToClipboard };
}
