"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Partner } from "@/data/partners";
import Image from "next/image";
import Link from "next/link";

interface PartnerCardProps {
	partner: Partner;
	years?: number;
}

export function PartnerCard({ partner, years }: PartnerCardProps) {
	return (
		<Link
			href={partner.website || "#"}
			target="_blank"
			rel="noopener noreferrer"
			className="block h-full"
		>
			<Card className="h-full transition-all duration-200 hover:shadow-lg hover:scale-[1.02] bg-white overflow-hidden pt-0 cursor-pointer">
				<div className="w-full h-[150px] relative flex items-center justify-center pt-10 p-6 ">
					<Image
						src={`/images/partners/${partner.logo || partner.id + ".png"}`}
						alt={partner.name}
						width={180}
						height={100}
						className="object-contain max-h-[150px] rounded-md"
					/>
				</div>

				<CardContent className="px-6 pb-6 text-center">
					<div className="space-y-2 flex flex-col items-center">
						<div className="flex flex-col items-center">
							<h3 className="text-lg font-semibold text-black mb-2">
								{partner.name}
							</h3>
							{years && (
								<p className="text-sm text-secondary">
									{years} {years === 1 ? "year" : "years"} with us
								</p>
							)}
						</div>{" "}
						<div className="flex justify-center pt-2">
							<div
								className={`flex gap-2 items-center ${
									partner.partnerLevel === "Platinum"
										? "text-purple-500"
										: partner.partnerLevel === "Gold"
											? "text-amber-500"
											: partner.partnerLevel === "Silver"
												? "text-gray-400"
												: partner.partnerLevel === "Bronze"
													? "text-amber-700"
													: "text-blue-500"
								}`}
							>
								<div className="w-4 h-4">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 24 24"
									>
										<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
									</svg>
								</div>
								<span className="text-sm">
									{partner.partnerLevel || ""} Partner
								</span>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</Link>
	);
}
