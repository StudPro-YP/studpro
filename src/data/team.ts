export interface TeamMember {
    name: string;
    role: string;
    image: string;
    contactLink?: string;
    socialLinks?: {
        github?: string;
        linkedin?: string;
        twitter?: string;
    };
}

export const teamMembers: TeamMember[] = [
    {
        name: "John Doe",
        role: "Chairperson",
        image: "/images/team/john_doe.jpg",
        contactLink: "mailto:"
    },
    {
        name: "Jane Smith",
        role: "Vice Chairperson",
        image: "/images/team/jane_smith.jpg",
        contactLink: "mailto:"
    },
    {
        name: "Jane Smith",
        role: "Vice Chairperson",
        image: "/images/team/jane_smith.jpg",
        contactLink: "mailto:"
    },
    {
        name: "Jane Smith",
        role: "Vice Chairperson",
        image: "/images/team/jane_smith.jpg",
        contactLink: "mailto:"
    },
    {
        name: "Alice Johnson",
        role: "Secretary",
        image: "/images/team/alice_johnson.jpg",
        contactLink: "mailto:",
        socialLinks: {}
    },
    {
        name: "Bob Brown",
        role: "Member Coordinator",
        image: "/images/team/bob_brown.jpg",
        contactLink: "mailto:",
    },
    {
        name: "Charlie Davis",
        role: "Member Coordinator",
        image: "/images/team/charlie_davis.jpg",
        contactLink: "mailto:",
    },
    {
        name: "David Wilson",
        role: "Member Coordinator",
        image: "/images/team/david_wilson.jpg",
        contactLink: "mailto:",
    },
    {
        name: "Eve White",
        role: "Member Coordinator",
        image: "/images/team/eve_white.jpg",
        contactLink: "mailto:",
    },
    {
        name: "Frank Green",
        role: "Member Coordinator",
        image: "/images/team/frank_green.jpg",
        contactLink: "mailto:",
    }
]