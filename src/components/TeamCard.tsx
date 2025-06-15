// Team card with image, member name, role, contact button, and social links
import Image from "next/image";
import Link from "next/link";
import { TeamMember } from "@/data/team";
import { Card } from "@/components/ui/card";
import { Linkedin, Mail, Phone } from "lucide-react";
import { getSafeTeamImageUrl } from "@/lib/image-utils";

export interface TeamCardProps {
	member: TeamMember;
}

export const TeamCard = ({ member }: TeamCardProps) => {
	return (
		<Card className="bg-white hover:bg-gray-100 rounded-lg py-6 m-8 flex flex-col gap-2 items-center w-64 border-none shadow-none">
			<div className="w-64 h-64 mb-4 relative">
				<Image
					src={getSafeTeamImageUrl(
						`/images/team/${member.name.split(" ")[0].toLowerCase()}.png`,
					)}
					alt={member.name}
					fill={true}
					className="rounded-full object-cover aspect-square"
				/>
			</div>
			<h3 className="text-lg font-bold uppercase text-gray-900 dark:text-white mb-2">
				{member.name}
			</h3>
			<p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
				{member.role}
			</p>
			<div className="flex gap-6">
				{member.contactNo && (
					<Link
						href={`tel:${member.contactNo}`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Phone size={20} />
					</Link>
				)}
				{member.email && (
					<Link href={member.email} target="_blank" rel="noopener noreferrer">
						<Mail size={20} />
					</Link>
				)}
				{member.linkedIn && (
					<Link
						href={member.linkedIn}
						target="_blank"
						rel="noopener noreferrer"
					>
						<Linkedin size={20} />
					</Link>
				)}
			</div>
		</Card>
	);
};
