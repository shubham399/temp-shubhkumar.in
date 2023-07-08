import { Navigation } from './components/nav';
import ScrollUp from './components/ScrollUp';
import Feature from './Sections/Feature';
import Hero from './Sections/Hero';

export default function Home() {
  return (
    <>
      <Navigation isHome={true} />
      <div className=" m-0 p-0 flex flex-col h-full w-full overflow-y-scroll overflow-x-hidden items-center justify-center bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        <ScrollUp />
        <Hero />
        <Feature />
      </div>
    </>
  );
}