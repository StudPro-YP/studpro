// Team card with image, member name, role, contact button, and social links
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { TeamMember } from "@/data/team";

export interface TeamCardProps {
    member: TeamMember;
}

export const TeamCard = ({ member }: TeamCardProps) => {
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="w-24 h-24 mb-4 relative">
                <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="rounded-full object-cover"
                />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{member.name}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{member.role}</p>
            {member.contactLink && (
                <Link href={member.contactLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="mb-2">Contact</Button>
                </Link>
            )}
            <div className="flex space-x-3">
                {member.socialLinks?.github && (
                    <Link href={member.socialLinks.github} target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/github.svg" alt="GitHub" width={24} height={24} />
                    </Link>
                )}
                {member.socialLinks?.linkedin && (
                    <Link href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                    </Link>
                )}
                {member.socialLinks?.twitter && (
                    <Link href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
                        <Image src="/icons/twitter.svg" alt="Twitter" width={24} height={24} />
                    </Link>
                )}
            </div>
        </div>
    );
};