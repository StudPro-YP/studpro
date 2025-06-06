import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { partners } from "@/data/partners";

export const Partners = () => {
    // Get the featured partners (first 4 in our data)
    const featuredPartners = partners.flatMap(yearGroup => 
        yearGroup.partners.slice(0, 2)
    ).slice(0, 4);

    return (
        <div id="partners" className="min-h-screen py-24 flex flex-col justify-center items-center">
            <div className="max-w-6xl mx-auto px-4 w-full">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-black mb-4">
                        <span className="text-primary">Our</span>
                        <span className="text-secondary"> Partners</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        StudPro proudly partners with industry leaders to provide students with the best learning experience and career opportunities.
                    </p>
                </div>

                {/* Featured Partners Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {featuredPartners.map((partner, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center justify-center">
                            <div className="w-full h-[100px] relative flex items-center justify-center">
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={150}
                                    height={80}
                                    className="object-contain max-h-[80px]"
                                />
                            </div>
                            <h3 className="mt-4 font-medium text-black">{partner.name}</h3>
                            <p className="text-sm text-gray-500 mt-1">{partner.partnerLevel} Partner</p>
                        </div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="/partners">
                        <Button variant="default" className="bg-primary hover:bg-primary/90 text-white">
                            View All Partners
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};