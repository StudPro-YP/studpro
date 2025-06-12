import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
    return (
        <footer className="row-start-3 flex flex-col gap-10 items-center justify-center w-full bg-secondary">
            <div className="flex flex-row justify-between w-full px-16 mt-8">
                <div className="flex flex-col gap-6 w-fit">
                    <div className="bg-white p-4 w-fit rounded-lg">
                        <Image src={"/images/studpro-logo.png"} alt="StudPro Logo" height={40} width={200}/>
                    </div>
                    <div className="flex gap-4 items-center justify-center">
                        <Link href={"https://www.instagram.com/ieee.studpro/"} target="_blank"
                              rel="noopener noreferrer">
                            <Instagram className="text-white hover:text-primary transition-colors" size={24}/>
                        </Link>
                        <Link href={"https://www.linkedin.com/company/ieee-studpro/"} target="_blank"
                              rel="noopener noreferrer">
                            <Linkedin className="text-white hover:text-primary transition-colors" size={24}/>
                        </Link>
                        <Link href={"https://www.facebook.com/ieeestudpro/"} target="_blank" rel="noopener noreferrer">
                            <Facebook className="text-white hover:text-primary transition-colors" size={24}/>
                        </Link>
                    </div>
                </div>
                <div className="flex-1 flex justify-around">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white font-bold uppercase">Useful Links</h3>
                        <Link href="/" className="text-white hover:text-primary transition-colors">Home</Link>
                        <Link href="/about-us" className="text-white hover:text-primary transition-colors">About Us</Link>
                        <Link href="/about-us#team" className="text-white hover:text-primary transition-colors">Team</Link>
                        <Link href="/events" className="text-white hover:text-primary transition-colors">Event
                            Timeline</Link>
                        <Link href="/partners"
                              className="text-white hover:text-primary transition-colors">Partners</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white font-semibold uppercase">National Projects</h3>
                        <Link href="https://letstalk.ieeeyp.lk/"
                              className="text-white hover:text-primary transition-colors">Let's Talk</Link>
                        <Link href="https://slinspire.lk/" className="text-white hover:text-primary transition-colors">SL
                            Inspire</Link>
                        <Link href="https://aidriven.ieeeyp.lk/"
                              className="text-white hover:text-primary transition-colors">AIDSL</Link>
                        <Link href="https://y2npro.ieeeyp.lk/"
                              className="text-white hover:text-primary transition-colors">Y2NPro</Link>
                        <Link href="https://insl.ieeeyp.lk/"
                              className="text-white hover:text-primary transition-colors">INSL</Link>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white font-bold uppercase">IEEE Links</h3>
                        <Link href="https://www.ieee.org/"
                              className="text-white hover:text-primary transition-colors">IEEE</Link>
                        <Link href="https://ieee.lk/" className="text-white hover:text-primary transition-colors">IEEE
                            Sri Lanka</Link>
                        <Link href="https://yp.ieee.org/" className="text-white hover:text-primary transition-colors">IEEE
                            YPSL</Link>
                        <Link href="https://www.ieeer10.org/"
                              className="text-white hover:text-primary transition-colors">IEEE R10</Link>
                    </div>
                </div>
            </div>
            <div className="py-4 mx-8 border-t border-gray-700 w-full flex justify-center text-gray-300">
                <p className="text-gray-300">All rights reserved &copy; {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
};
