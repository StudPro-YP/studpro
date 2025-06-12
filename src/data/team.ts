export interface TeamMember {
	name: string;
	role: string;
	image?: string;
	contactNo?: string;
	email?: string;
	linkedIn?: string;
}

export const teamMembers: TeamMember[] = [
	{
		name: "John Doe",
		role: "Chairperson",
		// image: "/images/team/john_doe.jpg",
		email: "mailto:",
		linkedIn: "https://www.linkedin.com/in/johndoe",
		contactNo: "+1234567890",
	},
	{
		name: "Jane Smith",
		role: "Vice Chairperson",
		// image: "/images/team/jane_smith.jpg",
		email: "mailto:",
		linkedIn: "https://www.linkedin.com/in/janesmith",
		contactNo: "+0987654321",
	},
	{
		name: "Jane Smith",
		role: "Vice Chairperson",
		// image: "/images/team/jane_smith.jpg",
		email: "mailto:",
	},
	{
		name: "Jane Smith",
		role: "Vice Chairperson",
		// image: "/images/team/jane_smith.jpg",
		email: "mailto:",
	},
	{
		name: "Alice Johnson",
		role: "Secretary",
		// image: "/images/team/alice_johnson.jpg",
		email: "mailto:",
	},
	{
		name: "Bob Brown",
		role: "Member Coordinator",
		// image: "/images/team/bob_brown.jpg",
		email: "mailto:",
	},
	{
		name: "Charlie Davis",
		role: "Member Coordinator",
		// image: "/images/team/charlie_davis.jpg",
		email: "mailto:",
	},
	{
		name: "David Wilson",
		role: "Member Coordinator",
		// image: "/images/team/david_wilson.jpg",
		email: "mailto:",
	},
	{
		name: "Eve White",
		role: "Member Coordinator",
		// image: "/images/team/eve_white.jpg",
		email: "mailto:",
	},
	{
		name: "Frank Green",
		role: "Member Coordinator",
		// image: "/images/team/frank_green.jpg",
		email: "mailto:",
	},
];
