import Link from "next/link";

export const Header = () => {
    return (
        <div className="fixed top-0 left-0 w-full z-50 h-16 px-16 flex justify-between items-center bg-gray-50">
            <img src="/images/strudpro-logo.png" alt="StudPro Logo" className="h-10" />
            <div className="flex gap-8">
                <Link href="/#about">About Us</Link>
                <Link href="/events">Event Timeline</Link>
                <Link href="/#partners">Partners</Link>
            </div>
        </div>
    );
};