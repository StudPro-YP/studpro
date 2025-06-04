export interface Speaker {
	name: string;
	title: string;
	company: string;
}

export interface Session {
	title: string;
	date: string;
	time: string; // e.g., "14:00 - 16:00"
	topic: string;
	description?: string; // Optional detailed description
	images: string[]; // array of paths or URLs to event images
	speaker: Speaker;
	venue: string; // Location where the event is held
}

export interface StudProCommunity {
	version: string; // e.g., "StudPro 6.0"
	year: number;
	description: string;
	sessions: Session[];
}

export const events: StudProCommunity[] = [
	{
		version: "StudPro 5.0",
		year: 2022,
		description:
			"StudPro 5.0 introduced students to the fundamentals of web development and programming concepts, laying the foundation for their tech careers.",
		sessions: [
			{
				title: "Programming Fundamentals",
				date: "March 15, 2022",
				time: "10:00 - 12:30",
				topic: "Introduction to Programming Logic and Algorithms",
				description:
					"A foundational session exploring core programming concepts essential for any aspiring developer.",
				images: ["/images/events/javascript-intro.jpg"], // Using an existing image
				speaker: {
					name: "John Anderson",
					title: "Senior Software Engineer",
					company: "CodeFoundation",
				},
				venue: "Tech Auditorium, 123 Innovation Street, San Francisco, USA",
			},
			{
				title: "HTML & CSS Basics",
				date: "May 20, 2022",
				time: "14:00 - 16:30",
				topic: "Building Your First Web Pages",
				description:
					"Learn how to structure web content with HTML and style it with CSS.",
				images: ["/images/events/html-css-basics.jpg"], // This image exists
				speaker: {
					name: "Emily Rodriguez",
					title: "Frontend Developer",
					company: "WebCrafters",
				},
				venue: "Digital Learning Center, 456 Web Avenue, Boston, USA",
			},
			{
				title: "JavaScript Introduction",
				date: "July 18, 2022",
				time: "11:00 - 14:00",
				topic: "Making Websites Interactive",
				description:
					"Discover how to bring websites to life with JavaScript interactivity.",
				images: ["/images/events/javascript-intro.jpg"], // This image exists
				speaker: {
					name: "Michael Thompson",
					title: "JavaScript Developer",
					company: "InteractiveTech",
				},
				venue: "Code Campus, 789 Script Boulevard, Austin, USA",
			},
			{
				title: "Basic Git & Version Control",
				date: "September 12, 2022",
				time: "09:30 - 12:00",
				topic: "Collaborating with Code",
				description:
					"Learn essential version control skills for team collaboration using Git.",
				images: ["/images/events/git-version-control.jpg"], // This image exists
				speaker: {
					name: "Lisa Chen",
					title: "DevOps Engineer",
					company: "VersionControl Inc",
				},
				venue: "Collaboration Hub, 101 Repository Road, Seattle, USA",
			},
		],
	},
	{
		version: "StudPro 6.0",
		year: 2023,
		description:
			"StudPro 6.0 focused on foundational skills in modern web development, advanced frameworks and deployment strategies, preparing students for real-world development scenarios.",
		sessions: [
			{
				title: "Introduction to Web Development",
				date: "March 10, 2023",
				time: "10:00 - 13:00",
				topic: "HTML, CSS, and JavaScript Fundamentals",
				description:
					"A comprehensive introduction to the core technologies of the web.",
				images: [
					"/images/events/web-development-intro.jpg", // This image exists
				],
				speaker: {
					name: "Sarah Johnson",
					title: "Senior Frontend Developer",
					company: "TechCorp",
				},
				venue: "Digital Innovation Center, 500 Technology Park, Chicago, USA",
			},
			{
				title: "Building Your First React App",
				date: "May 17, 2023",
				time: "13:30 - 17:00",
				topic: "React Components and State Management",
				description:
					"Learn to build dynamic user interfaces with React's component architecture.",
				images: ["/images/events/react-app.jpg"], // This image exists
				speaker: {
					name: "Mike Chen",
					title: "React Specialist",
					company: "WebSolutions",
				},
				venue: "Framework Academy, 202 Component Street, Portland, USA",
			},
			{
				title: "Career Preparation Workshop",
				date: "July 24, 2023",
				time: "14:00 - 16:00",
				topic: "Resume Building and Interview Skills",
				description:
					"Prepare for tech interviews and build an impressive portfolio.",
				images: [
					"/images/events/javascript-intro.jpg", // Using existing image
				],
				speaker: {
					name: "Jessica Brown",
					title: "HR Director",
					company: "StartupHub",
				},
				venue: "Career Center, 303 Opportunity Avenue, Denver, USA",
			},
			{
				title: "Portfolio Development",
				date: "September 15, 2023",
				time: "09:00 - 12:00",
				topic: "Showcasing Your Work Effectively",
				description:
					"Learn how to create a portfolio that gets you noticed by employers.",
				images: ["/images/events/html-css-basics.jpg"], // Using existing image
				speaker: {
					name: "David Wilson",
					title: "UX Designer",
					company: "DesignStudio",
				},
				venue: "Showcase Hall, 404 Portfolio Place, Miami, USA",
			},
		],
	},
	{
		version: "StudPro 7.0",
		year: 2024,
		description:
			"StudPro 7.0 expanded into mobile development and emerging technologies, keeping pace with industry trends and modern development practices.",
		sessions: [
			{
				title: "React Native Fundamentals",
				date: "February 8, 2024",
				time: "10:30 - 14:00",
				topic: "Cross-Platform Mobile Development",
				description:
					"Build mobile apps for iOS and Android with a single codebase.",
				images: [
					"/images/events/react-app.jpg", // Using existing image
				],
				speaker: {
					name: "James Martinez",
					title: "Mobile App Developer",
					company: "MobileFirst",
				},
				venue: "Mobile Innovation Lab, 505 App Street, San Diego, USA",
			},
			{
				title: "TypeScript for JavaScript Developers",
				date: "April 15, 2024",
				time: "13:00 - 16:30",
				topic: "Type Safety and Advanced TypeScript Features",
				description:
					"Enhance your JavaScript applications with TypeScript's robust type system.",
				images: ["/images/events/javascript-intro.jpg"], // Using existing image
				speaker: {
					name: "Anna Kowalski",
					title: "TypeScript Expert",
					company: "TypeSafe Solutions",
				},
				venue: "Type Academy, 606 Interface Drive, Atlanta, USA",
			},
			{
				title: "GraphQL and Modern APIs",
				date: "June 22, 2024",
				time: "09:00 - 12:30",
				topic: "Building Efficient Data Layers",
				description: "Design flexible and efficient APIs using GraphQL.",
				images: [
					"/images/events/web-development-intro.jpg", // Using existing image
				],
				speaker: {
					name: "Kevin Zhang",
					title: "API Architect",
					company: "GraphQL Labs",
				},
				venue: "API Center, 707 Query Road, Dallas, USA",
			},
			{
				title: "Testing Strategies",
				date: "August 29, 2024",
				time: "14:00 - 17:00",
				topic: "Unit Testing, Integration Testing, and E2E Testing",
				description:
					"Implement comprehensive testing strategies for your applications.",
				images: ["/images/events/git-version-control.jpg"], // Using existing image
				speaker: {
					name: "Maria Gonzalez",
					title: "QA Engineer",
					company: "TestDriven",
				},
				venue: "Test Labs, 808 Quality Assurance Way, Phoenix, USA",
			},
			{
				title: "AI Integration Workshop",
				date: "October 16, 2024",
				time: "10:00 - 15:00",
				topic: "Integrating AI/ML Models in Web Applications",
				description:
					"Learn to incorporate AI capabilities into your web applications.",
				images: [
					"/images/events/html-css-basics.jpg", // Using existing image
				],
				speaker: {
					name: "Dr. Samuel Lee",
					title: "AI Research Scientist",
					company: "AI Innovations",
				},
				venue:
					"AI Research Center, 909 Neural Network Boulevard, Pittsburgh, USA",
			},
		],
	},
	{
		version: "StudPro 8.0",
		year: 2025,
		description:
			"The latest StudPro iteration focuses on cutting-edge technologies, scalable architectures, and professional development in the modern tech landscape.",
		sessions: [
			{
				title: "Micro-frontends Architecture",
				date: "February 9, 2025",
				time: "09:30 - 13:00",
				topic: "Building Scalable Frontend Applications",
				description:
					"Learn how to break down monolithic frontends into smaller, manageable pieces.",
				images: [
					"/images/events/react-app.jpg", // Using existing image
				],
				speaker: {
					name: "Rachel Green",
					title: "Principal Frontend Architect",
					company: "ScaleUp Tech",
				},
				venue: "Architecture Hall, 1010 Scalable Drive, New York, USA",
			},
			{
				title: "Web3 and Blockchain Basics",
				date: "April 16, 2025",
				time: "13:30 - 16:30",
				topic: "Decentralized Applications and Smart Contracts",
				description:
					"Explore the foundations of blockchain technology and Web3 development.",
				images: [
					"/images/events/javascript-intro.jpg", // Using existing image
				],
				speaker: {
					name: "Chris Anderson",
					title: "Blockchain Developer",
					company: "CryptoBuilders",
				},
				venue:
					"Blockchain Center, 1111 Distributed Ledger Lane, San Francisco, USA",
			},
			{
				title: "Performance Optimization Masterclass",
				date: "June 23, 2025",
				time: "10:00 - 14:00",
				topic: "Advanced Techniques for High-Performance Web Apps",
				description:
					"Master techniques to optimize web performance for better user experience.",
				images: ["/images/events/web-development-intro.jpg"], // Using existing image
				speaker: {
					name: "Taylor Smith",
					title: "Performance Engineer",
					company: "SpeedDemon",
				},
				venue: "Performance Lab, 1212 Optimization Court, Austin, USA",
			},
			{
				title: "Cloud-Native Development",
				date: "August 1, 2025",
				time: "09:00 - 12:30",
				topic: "Kubernetes, Serverless, and Microservices",
				description:
					"Build resilient, scalable applications using cloud-native approaches.",
				images: [
					"/images/events/git-version-control.jpg", // Using existing image
				],
				speaker: {
					name: "Jordan Smith",
					title: "Cloud Solutions Architect",
					company: "CloudNative Corp",
				},
				venue: "Cloud Computing Center, 1313 Container Road, Seattle, USA",
			},
			{
				title: "Leadership in Tech",
				date: "September 8, 2025",
				time: "14:00 - 16:30",
				topic: "Technical Leadership and Team Management",
				description:
					"Develop the skills needed to lead technical teams effectively.",
				images: ["/images/events/html-css-basics.jpg"], // Using existing image
				speaker: {
					name: "Dr. Patricia Williams",
					title: "VP of Engineering",
					company: "TechLeaders Inc",
				},
				venue: "Leadership Forum, 1414 Management Avenue, Boston, USA",
			},
			{
				title: "Final Projects & Networking",
				date: "October 15, 2025",
				time: "10:00 - 16:00",
				topic: "Project Presentations and Industry Networking",
				description:
					"Showcase your projects and connect with industry professionals.",
				images: [
					"/images/events/react-app.jpg", // Using existing image
				],
				speaker: {
					name: "StudPro Alumni Panel",
					title: "Various Roles",
					company: "Industry Partners",
				},
				venue: "Conference Center, 1515 Connection Plaza, Chicago, USA",
			},
		],
	},
];
