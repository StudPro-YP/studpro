import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-inter)]">
			<main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
				<div className="text-center space-y-4">
					<h1 className="text-4xl font-bold text-foreground">StudPro Program</h1>
					<p className="text-lg text-muted-foreground max-w-2xl">
						Welcome to StudPro - A comprehensive program series designed to advance your skills 
						in modern web development, emerging technologies, and professional growth.
					</p>
				</div>

				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<Button asChild size="lg">
						<Link href="/events">
							View Event Timeline
						</Link>
					</Button>
					<Button variant="outline" asChild size="lg">
						<Link href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
							Learn More
						</Link>
					</Button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
					<div className="text-center p-6 border rounded-lg">
						<h3 className="font-semibold text-lg mb-2">StudPro 5.0</h3>
						<p className="text-sm text-muted-foreground">Foundation building</p>
					</div>
					<div className="text-center p-6 border rounded-lg">
						<h3 className="font-semibold text-lg mb-2">StudPro 6.0</h3>
						<p className="text-sm text-muted-foreground">Advanced frameworks</p>
					</div>
					<div className="text-center p-6 border rounded-lg">
						<h3 className="font-semibold text-lg mb-2">StudPro 7.0</h3>
						<p className="text-sm text-muted-foreground">Mobile & emerging tech</p>
					</div>
					<div className="text-center p-6 border rounded-lg">
						<h3 className="font-semibold text-lg mb-2">StudPro 8.0</h3>
						<p className="text-sm text-muted-foreground">Cutting-edge technologies</p>
					</div>
				</div>
			</main>
			<footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org/learn"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/file.svg"
						alt="File icon"
						width={16}
						height={16}
					/>
					Learn
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://vercel.com/templates?framework=next.js"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/window.svg"
						alt="Window icon"
						width={16}
						height={16}
					/>
					Examples
				</a>
				<a
					className="flex items-center gap-2 hover:underline hover:underline-offset-4"
					href="https://nextjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					<Image
						aria-hidden
						src="/globe.svg"
						alt="Globe icon"
						width={16}
						height={16}
					/>
					Go to nextjs.org →
				</a>
			</footer>
		</div>
	);
}
