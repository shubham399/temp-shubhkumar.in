"use client";
import { ArrowLeft, Home } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Links from '@/configs/NavLinks';
interface NavigationType {
	isHome?: boolean;
}
export const Navigation: React.FC<NavigationType> = ({ isHome = false }) => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>

			<div
				className={`fixed inset-x-0 top-0 w-screen backdrop-blur  duration-200 border-b  ${isIntersecting
					? "bg-zinc-900/0 border-transparent"
					: "bg-zinc-900/500  border-zinc-800 "
					}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-6 mx-auto">
					<div className="flex justify-between gap-8">
						{Links.map((item) => (
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
					</div>

					<Link
						href="/"
						className="duration-200 text-zinc-300 hover:text-zinc-100"
					>
						{isHome == true
							? <Home className="w-6 h-6 " />
							: <ArrowLeft className="w-6 h-6 " />
						}
					</Link>
				</div>
			</div>
		</header>
	);
};