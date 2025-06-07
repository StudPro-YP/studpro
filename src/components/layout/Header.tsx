import Link from "next/link";
import Image from "next/image";

export const Header = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 h-16 px-16 flex justify-between items-center bg-gray-50">
            <Link href="/" className="flex items-center">
                <Image src="/images/strudpro-logo.png" alt="StudPro Logo" width={40} height={40} className="h-10" />
            </Link><div className="flex gap-8">
                <Link href="/#about">About Us</Link>
                <Link href="/events">Event Timeline</Link>
                <Link href="/partners">Partners</Link>
            </div>
        </nav>
    );
};