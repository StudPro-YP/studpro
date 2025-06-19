import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
	const bgRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!bgRef.current) return;
		const ctx = gsap.context(() => {
			gsap.to(bgRef.current, {
				ease: "none",
				scrollTrigger: {
					trigger: bgRef.current,
					start: "top top",
					end: "bottom bottom",
					scrub: true,
					onLeave: () => {
						if (bgRef.current) {
							bgRef.current.style.transition = "opacity 0.5s ease";
							bgRef.current.style.opacity = "0";
						}
					},
					onEnterBack: () => {
						if (bgRef.current) {
							bgRef.current.style.transition = "opacity 0.5s ease";
							bgRef.current.style.opacity = "100";
						}
					},
				},
			});
		}, bgRef);

		return () => ctx.revert();
	}, []);

	return (
		<main
			ref={bgRef}
			className="relative z-0 pt-16 h-[120vh] bg-[url('/images/hero-bg.jpg')] bg-cover bg-center ">
			<div

				className="absolute inset-0 bg-gradient-to-b from-blue-950/60 z-0 to-secondary/100 "
				style={{opacity: 1, transition: "opacity 0.2s"}}
			/>
			<div className="h-screen w-full flex flex-col gap-6 sm:gap-10 md:gap-16 justify-center items-center px-4 sm:px-8">
				<div className="relative z-10 text-center mx-auto space-y-2 sm:space-y-4 text-white">
					<h1 className="text-4xl sm:text-5xl md:text-6xl font-bold drop-shadow-md">
						Welcome to StudPro
					</h1>
					<p className="text-base sm:text-lg font-bold text-center max-w-2xl mx-auto px-2 drop-shadow-md">
						Bridging Academia and Industry for Over 7 Years
					</p>
				</div>
				<div className="relative z-10 flex gap-4 sm:gap-8 items-center justify-center flex-col sm:flex-row w-full">
					<Button asChild size="lg" className="w-full sm:w-auto">
						<Link href="/events">View Events</Link>
					</Button>
					<Button
						variant="outline"
						asChild
						size="lg"
						className="w-full sm:w-auto"
					>
						<Link
							href="/about-us"
						>
							Learn More
						</Link>
					</Button>
				</div>
			</div>
		</main>
	);
};
