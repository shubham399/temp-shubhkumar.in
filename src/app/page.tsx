import { Navigation } from './components/nav';
import { Card } from './components/card';
import ScrollUp from './components/ScrollUp';
import Hero from './components/Hero';

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-tl from-black via-zinc-600/20 to-black overflow-hidden snap-end	">
      <ScrollUp />
      <Navigation isHome={true} />
      <Hero />
    </div>
  );
}