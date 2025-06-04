import {Button} from "@/components/ui/button";
import Link from "next/link";

export const Hero = () => {
    return (
        <main className="flex flex-col gap-[32px] items-center justify-center row-start-2  sm:items-start h-screen bg-secondary text-white">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold w-full">StudPro Program</h1>
                <p className="text-lg max-w-2xl">
                    Welcome to StudPro - A comprehensive program series designed to advance your skills
                    in modern web development, emerging technologies, and professional growth.
                </p>
            </div>

            <div className="flex gap-4 items-center flex-col sm:flex-row">
                <Button asChild size="lg">
                    <Link href="/events">
                        View Event Timeline
                    </Link>
                </Button>
                <Button variant="outline" asChild size="lg">
                    <Link href="https://nextjs.org/docs" target="_blank" rel="noopener noreferrer">
                        Learn More
                    </Link>
                </Button>
            </div>

        </main>
    );
};