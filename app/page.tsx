import About from '@/components/sections/about';
import Header from '@/components/sections/header';
import Me from '@/components/sections/me';

export default function Home() {
  return (
    <div className="max-w-screen-sm w-full">
      <Header />
      <Me />
      <About />
    </div>
  );
}
