import { Button } from "@/components/ui/button";
import Link from "next/link";
import { partnersByYear, calculatePartnerYears, getPartnerByPartnerRecord } from "@/data/partners";
import { PartnerCard } from "@/components/partners/PartnerCard";

export const Partners = () => {
	const currentYear = new Date().getFullYear(); // Current year

	// Find partners from the current year
	const currentYearGroup = partnersByYear.find(
		(yearGroup) => yearGroup.year === currentYear,
	);
	const currentPartners = currentYearGroup?.partners || [];
	// Define level priority for sorting
	const levelOrder = {
		Platinum: 1,
		Gold: 2,
		Silver: 3,
		Bronze: 4,
		undefined: 5,
	};
	// Sort partners by level (Platinum first, then Gold, then Silver, then Bronze, then partners with no level)
	const sortedPartners = [...currentPartners].sort(
		(a, b) =>
			levelOrder[a.partnerLevel as keyof typeof levelOrder ?? "undefined"] -
			levelOrder[b.partnerLevel as keyof typeof levelOrder ?? "undefined"],
	);

	// Check if we have any partners
	const hasPartners = sortedPartners.length > 0; // For backwards compatibility with the JSX
	const partnersByLevel = {
		Platinum: sortedPartners.filter((p) => p.partnerLevel === "Platinum"),
		Gold: sortedPartners.filter((p) => p.partnerLevel === "Gold"),
		Silver: sortedPartners.filter((p) => p.partnerLevel === "Silver"),
		Bronze: sortedPartners.filter((p) => p.partnerLevel === "Bronze"),
		Undefined: sortedPartners.filter((p) => p.partnerLevel === undefined),
	};

	// Limit to 12 partners total
	const limitedPartners = [...sortedPartners].slice(0, 12);

	return (
		<div
			id="partners"
			className="min-h-screen py-24 flex flex-col justify-center items-center"
		>
			<div className="max-w-6xl mx-auto px-4 w-full">
				{" "}
				<div className="text-center mb-16">
					<h2 className="text-4xl uppercase font-bold text-secondary mb-4">
						Featured Partners
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						StudPro proudly partners with industry leaders to provide students
						with the best learning experience and career opportunities.
					</p>
				</div>{" "}
				{/* All Partners Grid - Sorted by Level */}
				{hasPartners ? (
					<div>
						{" "}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
							{/* Limited to 12 partners including those with undefined levels */}
							{limitedPartners.map((partner, index) => {
								const company = getPartnerByPartnerRecord(partner)
								const years = calculatePartnerYears(partner);
								return (
									<div key={`${partner.companyId}-${index}`} className="group">
										<PartnerCard partner={company} years={years} />
									</div>
								)
							})}
						</div>
					</div>
				) : (
					<div className="text-center py-10">
						<div className="text-secondary mb-4">
							<svg
								className="w-16 h-16 mx-auto"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={1.5}
									d="M12 6v6m0 0v6m0-6h6m-6 0H6"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-medium text-black mb-2">
							No partners yet for {currentYear}
						</h3>
						<p className="text-gray-500">
							Check back soon for our newest partners!
						</p>
					</div>
				)}
				<div className="text-center mt-16">
					<Link href="/partners">
						<Button
							variant="default"
							className="bg-primary hover:bg-primary/90 text-white"
						>
							View All Partners
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};
