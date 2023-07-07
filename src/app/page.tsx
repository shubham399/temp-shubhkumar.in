import Link from 'next/link'
import { Github, Mail, Twitter } from "lucide-react";
import Particles from './components/practicles';
import { Navigation } from './components/nav';
import { Card } from './components/card';
const navigation = [
  { name: "Projects", href: "https://github.com/shubham399/", target: "_blank", rel: "noopener noreferrer" },
  { name: "Contact", href: "/contact" },
];

const socials = [
  {
    icon: <Twitter size={20} />,
    href: "https://twitter.com/chronark_",
    label: "Twitter",
    handle: "@chronark_",
  },
  {
    icon: <Mail size={20} />,
    href: "mailto:dev@chronark.com",
    label: "Email",
    handle: "dev@chronark.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/chronark",
    label: "Github",
    handle: "chronark",
  },
];
export default function Home() {
  return (
    <>
     <Navigation isHome={true}/>
      <section className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
        {/* <nav className="my-16 animate-fade-in">
          <ul className="flex items-center justify-center gap-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                target={item?.target}
                rel={item?.rel}
                className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
              >
                {item.name}
              </Link>
            ))}
          </ul>
        </nav> */}
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <h1 className="z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
          Shubham Kumar
        </h1>

        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
        <div className="my-16 text-center animate-fade-in">
          <h2 className="text-sm text-zinc-500 ">
            Hi, my name is Shubham Kumar, I &#39;  m building software
            solutions at{" "}
            <Link
              target="_blank"
              href="https://airfi.aero"
              className="underline duration-500 hover:text-zinc-300"
            >
              airfi.aero
            </Link>

            <br />
          </h2>
        </div>
      </section>
    </>
  );
}