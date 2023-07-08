"use client"
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Feature() {
    const ref = useRef<HTMLElement>(null);
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        if (!ref.current) return;
        const observer = new IntersectionObserver(([entry]) =>
            setIntersecting(entry.isIntersecting),
        );

        observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return (<section ref={ref} className="min-w-screen min-h-screen snap-start	flex flex-col  items-center justify-center">
        <div className={`my-16 text-center ${isIntersecting ? "animate-fade-in" : "hidden"}`}

        >
            <h2 className="text-md text-zinc-500 ">
                Hi, my name is Shubham Kumar, I &#39;  m building software
                solutions at{" "}
                <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://airfi.aero"
                    className="underline duration-500 hover:text-zinc-300"
                >
                    airfi.aero
                </Link>

                <br />
            </h2>
        </div>
    </section>)
}