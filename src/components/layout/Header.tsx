import Link from "next/link";
import Image from "next/image";

export const Header = () => {
	return (
		<div className="fixed top-0 left-0 right-0 flex justify-center mt-4 z-50">
			<nav className="h-16 px-16 flex justify-between items-center bg-gray-50/65 backdrop-blur rounded-lg shadow-md w-full max-w-10/12 mx-auto">
				<Link href="/" className="flex items-center">
					<Image
						src="/images/studpro-logo.png"
						alt="StudPro Logo"
						width={110}
						height={0}
						className="h-full"
					/>
				</Link>
				<div className="flex gap-8">
					<Link href="/" className="hover:text-primary transition-colors">
						Home
					</Link>	
					<Link href="/events" className="hover:text-primary transition-colors">
						Events 
					</Link>
					<Link href="/partners" className="hover:text-primary transition-colors">
						Partners
					</Link>
					<Link href="/about-us" className="hover:text-primary transition-colors">
						About Us
					</Link>
				</div>
			</nav>
		</div>
	);
};
