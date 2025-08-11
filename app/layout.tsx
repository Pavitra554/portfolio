import './globals.css';
import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { PERSONAL_INFO } from '@/lib/constants';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: `Hi, Pavitra here :) `,
  description: PERSONAL_INFO.about,
  keywords: [
    'Pavitra Behara',
    'Software Engineer',
    'Autodesk',
    'Full Stack Developer',
    'Backend Developer',
    'Frontend Developer',
    'Mobile Developer',
    'React',
    'Next.js',
    'TypeScript',
    'Python',
    'FastAPI',
    'PostgreSQL',
    'React Native',
    'Tailwind CSS',
    'AWS',
    'Cloud Infrastructure',
    'AI',
    'LLMs',
    'Developer Portfolio',
    'Web Development',
    'Mobile App Development',
    'API Development',
    'Database Design',
    'UI/UX',
    'Responsive Design',
    'Freelance Developer',
    'Hackathon Winner',
    'Flow Blockchain',
    'NFT Development',
    'Healthcare Technology',
    'Mental Health Apps',
    'Portfolio',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased font-sans`}>
        <div className="h-full w-full flex flex-col items-center justify-center">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
            storageKey="portfolio-theme"
          >
            <Toaster />
            {children}
          </ThemeProvider>
        </div>
      </body>
    </html>
  );
}
