import { Card, CardContent } from "@/components/ui/card";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from "@/components/ui/carousel";
import type { Session } from "@/data/events";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useRef } from "react";
import { useRouter } from "next/navigation";

interface EventCardProps {
	session: Session;
	version?: string;
}

export function EventCard({ session, version }: EventCardProps) {
	const router = useRouter();
	const autoplayPlugin = useRef(
		Autoplay({ delay: 4000, stopOnInteraction: false }),
	);

	// Get version from context if not provided directly
	const getVersionSlug = () => {
		if (version) {
			return version.replace(/\s+/g, "-");
		}
		return "unknown-version";
	};

	const handleCardClick = () => {
		const versionSlug = getVersionSlug();
		const encodedTitle = encodeURIComponent(session.title);
		router.push(`/events/${versionSlug}/${encodedTitle}`);
	};

	return (
		<Card
			className="h-full min-w-[370px] transition-all duration-200 hover:shadow-lg hover:scale-[1.02] bg-white cursor-pointer overflow-hidden pt-0"
			onClick={handleCardClick}
		>
			{session.images && session.images.length > 0 && (
				<div className="w-full h-[250px] relative overflow-hidden">
					{session.images.length === 1 ? (
						<Image
							src={session.images[0]}
							alt={session.title}
							width={350}
							height={200}
							className="object-cover w-full h-full"
						/>
					) : (
						<Carousel
							opts={{ loop: true }}
							plugins={[autoplayPlugin.current]}
							className="h-full"
						>
							<CarouselContent className="h-full">
								{session.images.map((image, index) => (
									<CarouselItem key={index} className="h-full">
										<Image
											src={image}
											alt={`${session.title} - image ${index + 1}`}
											width={350}
											height={200}
											className="object-cover w-full h-full"
										/>
									</CarouselItem>
								))}
							</CarouselContent>
						</Carousel>
					)}
				</div>
			)}
			<CardContent className="px-6">
				<div className="space-y-4">
					<div>
						<h3 className="text-lg font-semibold text-black mb-2">
							{session.title}
						</h3>
						<p className="text-sm text-secondary leading-relaxed">
							{session.topic}
						</p>
						{session.description && (
							<p className="text-xs text-black/80 mt-2 leading-relaxed">
								{session.description}
							</p>
						)}
					</div>

					<div className="pt-4 border-t border-secondary/20">
						<div className="space-y-1">
							<p className="font-medium text-black">{session.speaker.name}</p>
							<p className="text-sm">{session.speaker.title}</p>
							<p className="text-sm font-medium">{session.speaker.company}</p>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
