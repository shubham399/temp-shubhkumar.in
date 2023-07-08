import Link from "next/link";

export default function Hero() {
    return (
        <section className='scroll-snap-align-start w-screen h-screen flex flex-col items-center justify-center'>
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
        </section>)
}