import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
	return (
		<main className="relative z-0 pt-16 flex flex-col gap-16 justify-center items-center row-start-2 sm:items-start h-screen bg-[url('/images/hero-bg.jpg')] bg-cover bg-center ">
			<div className="absolute inset-0 bg-gradient-to-b to-secondary/80 from-blue-950/60 z-0" />
			<div className="relative z-10 text-center mx-auto space-y-4 text-white">
				<h1 className="text-6xl font-bold drop-shadow-md">
					Welcome to StudPro
				</h1>
				<p className="text-lg font-bold max-w-2xl drop-shadow-md">
					Bridging Academia and Industry for Over 7 Years
					{/*Photo by <a href="https://unsplash.com/@productschool?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Product School</a> on <a href="https://unsplash.com/photos/crowd-of-people-in-building-lobby-nOvIa_x_tfo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>*/}
				</p>
			</div>
			<div className="relative z-10 flex gap-8 items-center justify-center flex-col sm:flex-row w-full">
				<Button asChild size="lg">
					<Link href="/events">View Events</Link>
				</Button>
				<Button variant="outline" asChild size="lg">
					<Link
						href="https://nextjs.org/docs"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn More
					</Link>
				</Button>
			</div>
		</main>
	);
};
