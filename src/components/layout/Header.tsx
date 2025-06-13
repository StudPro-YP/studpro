import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 h-16 px-16 flex justify-between items-center bg-gray-50 rounded-b-lg shadow-md">
            <Link href="/" className="flex items-center">
                <Image
                    src="/images/strudpro-logo.png"
                    alt="StudPro Logo"
                    width={0}
                    height={0}
                    sizes="5vw"
                    style={{width: "100%"}}
                    className="h-8"
                />
            </Link>
            <div className="flex gap-8">
                <Link href="/about-us" className="hover:text-primary transition-colors">About Us</Link>
                <Link href="/events" className="hover:text-primary transition-colors">Events</Link>
                <Link href="/partners" className="hover:text-primary transition-colors">Partners</Link>
            </div>
        </nav>
    );
};
