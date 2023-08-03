"use client"
import { useEffect, useRef, useState } from "react";

export default function Hero() {
    const ref = useRef<HTMLHeadingElement>(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);
    return (
        <section className='min-h-screen flex flex-col items-center justify-center'>

            <div className={`hidden h-px w-screen bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 ${isIntersecting && "animate-glow md:block animate-fade-left"}`} />
            <h1 ref={ref} className={`z-10 opacity-0 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ${isIntersecting && "animate-title"}`}>
                Shubham Kumar
            </h1>

            <div className={`hidden h-px w-screen md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0 ${isIntersecting && "animate-glow md:block animate-fade-right"}`} />
        </section>)
}