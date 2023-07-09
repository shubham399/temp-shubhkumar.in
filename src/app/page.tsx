import { Navigation } from './components/nav';
import ScrollUp from './components/ScrollUp';
import Feature from './Sections/Feature';
import Hero from './Sections/Hero';



export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-screen min-h-screen overflow-y-auto overflow-x-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <Navigation isHome={true} />
        <ScrollUp />
        <Hero />
        <Feature />
      </div>
    </>
  );
}