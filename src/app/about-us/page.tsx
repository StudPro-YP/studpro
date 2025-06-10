import LenisWrapper from "@/components/LenisWrapper";
import { teamMembers } from "@/data/team";
import { AboutUsCard } from "@/components/AboutUsCard";
import { TeamCard } from "@/components/TeamCard";

export default function PartnersPage() {

    const vssion = "Our vision is to create a platform that connects students with opportunities, resources, and each other, fostering a community of growth and collaboration.";
    const mission = "Our mission is to empower students by providing them with the tools, resources, and connections they need to succeed academically and professionally.";

    return (
        <div className="min-h-screen bg-background">
            <LenisWrapper>
                <div className="max-w-6xl mx-auto px-4 py-32">
                    <div>
                        <AboutUsCard title={"Vision"} description={vssion} />
                        <AboutUsCard title={"Mission"} description={mission} />
                    </div>
                    <div>
                        <h1> Our Team </h1>
                        <div>
                            {teamMembers.map((member, index) => (
                                <TeamCard key={index} member={member} />
                            ))}
                        </div>
                    </div>
                </div>
            </LenisWrapper>
        </div>
    );
}
