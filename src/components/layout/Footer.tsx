import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const usefulLinks = [
	{ href: "/", label: "Home" },
	{ href: "/about-us", label: "About Us" },
	{ href: "/about-us#team", label: "Team" },
	{ href: "/events", label: "Event Timeline" },
	{ href: "/partners", label: "Partners" },
];

const nationalProjects = [
	{ href: "https://letstalk.ieeeyp.lk/", label: "Let's Talk" },
	{ href: "https://slinspire.lk/", label: "SL Inspire" },
	{ href: "https://aidriven.ieeeyp.lk/", label: "AIDSL" },
	{ href: "https://y2npro.ieeeyp.lk/", label: "Y2NPro" },
	{ href: "https://insl.ieeeyp.lk/", label: "INSL" },
];

const ieeeLinks = [
	{ href: "https://www.ieee.org/", label: "IEEE" },
	{ href: "https://ieee.lk/", label: "IEEE Sri Lanka" },
	{ href: "https://yp.ieee.org/", label: "IEEE YPSL" },
	{ href: "https://www.ieeer10.org/", label: "IEEE R10" },
];

export const FooterSocialLinks = () => (
	<div className="flex gap-4 items-center justify-center">
		<Link
			href="https://www.instagram.com/ieee.studpro/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Instagram
				className="text-white hover:text-primary transition-colors"
				size={24}
			/>
		</Link>
		<Link
			href="https://www.linkedin.com/company/ieee-studpro/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Linkedin
				className="text-white hover:text-primary transition-colors"
				size={24}
			/>
		</Link>
		<Link
			href="https://www.facebook.com/ieeestudpro/"
			target="_blank"
			rel="noopener noreferrer"
		>
			<Facebook
				className="text-white hover:text-primary transition-colors"
				size={24}
			/>
		</Link>
	</div>
);

interface FooterLinksSectionProps {
	title: string;
	links: { href: string; label: string }[];
	bold?: boolean;
}

const FooterLinksSection = ({ title, links }: FooterLinksSectionProps) => (
	<div className="flex flex-col gap-2 w-48">
		<h3 className="text-white font-bold uppercase">{title}</h3>
		{links.map((link) => (
			<Link
				key={link.href}
				href={link.href}
				className="text-white hover:text-primary transition-colors"
			>
				{link.label}
			</Link>
		))}
	</div>
);

export const Footer = () => (
	<footer className="row-start-3 flex flex-col gap-10 items-center justify-center w-full bg-secondary">
		<div className="flex flex-row justify-around w-full px-16 py-8 mt-8">
			<div className="flex flex-col gap-6 w-fit">
				<div className="bg-white p-4 w-fit rounded-lg">
					<Image
						src="/images/studpro-logo.png"
						alt="StudPro Logo"
						height={40}
						width={200}
					/>
				</div>
				<FooterSocialLinks />
			</div>
			<div className="flex gap-12">
				<FooterLinksSection title="Useful Links" links={usefulLinks} />
				<FooterLinksSection
					title="National Projects"
					links={nationalProjects}
				/>
				<FooterLinksSection title="IEEE Links" links={ieeeLinks} />
				<div className="flex flex-col gap-2">
					<h3 className="text-white font-bold uppercase">Contact Us</h3>
					<p className="text-white">Tel: +1234567890</p>
					<p className="text-white">
						Email:{" "}
						<Link
							className="hover:text-primary transition-colors"
							href="mailto:studpro@gmail.com"
						>
							studpro@gmail.com
						</Link>
					</p>
				</div>
			</div>
		</div>
		<div className="py-4 mx-8 border-t border-gray-700 w-full flex justify-center text-gray-300">
			<p className="text-gray-300">
				All rights reserved &copy; {new Date().getFullYear()}
			</p>
		</div>
	</footer>
);
