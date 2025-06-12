export interface Speaker {
	name: string;
	title: string;
	company?: string; // Making company optional as it's not in the schema
}

export interface Event {
	title: string;
	description?: string;
	date: string; // Using string for now, can be converted to Date when used with a database
	time: string; // e.g., "14:00 - 16:00"
	venue: string;
	images: string[]; // array of paths or URLs to event images
	speaker: Speaker;
	topic?: string; // Adding topic as optional to maintain compatibility
}

export interface EventSeries {
	title: string;
	description?: string;
	events: Event[];
}

export interface StudProVersion {
	version: string; // e.g., "StudPro 6.0" - keeping as string for readability
	year: number;
	description?: string;
	eventSeries: EventSeries[];
}

export const events: StudProVersion[] = [
	{
		version: "StudPro 5.0",
		year: 2022,
		description:
			"StudPro 5.0 introduced students to the fundamentals of web development and programming concepts, laying the foundation for their tech careers.",
		eventSeries: [
			{
				title: "Mastering the Art of CV & LinkedIn",
				description: "Craft your resume and upgrade your LinkedIn to the next level!",
				events: [
					{
						title: "Upgrade Your LinkedIn to the Next Level",
						date: "May 22, 2022",
						time: "6.00 PM Onwards",
						topic: "",
						description:
							"Mr. Amithe Gamage is a Personal Branding Strategist and CEO Coach who has helped over 35000" +
							"Professionals and Business Owners nurture. With his expertise in LinkedIn Marketing, he will guide you in" +
							"optimising your digital presence and communicating online consistently with confidence in order to establish" +
							"your personal brand.",
						images: [
							"/images/events/5.0/upgrade-linkedin.webp",
						],
						speaker: {
							name: "Mr. Amithe Gamage",
							title: "Co-founder",
							company: "Quantum Leap (Pvt) Ltd",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Create Your Job Winning CV - Session 1",
						date: "May 29, 2022",
						time: "5.00 PM Onwards",
						topic: "",
						description:
							"Ms. Zahra Marzook is an expert in Electrical Engineering with 8 years of work experience." +
							"She is ready to give you the ultimate guidance on achieving a job at Electrical Engineering field with your CV.",
						images: ["/images/events/5.0/cv-session1.webp"],
						speaker: {
							name: "Ms. Zahra Marzook",
							title: "Electrical Engineer",
							company: "Ceylon Electricity Board",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Create Your Job Winning CV - Session 2",
						date: "May 29, 2022",
						time: "5.00 PM Onwards",
						topic: "",
						description:
							"Mr. Maas Savanghan currently oversees the HR function at attune Lanka - SAP and Technology consulting " +
							"company owned by MAS holdings. He will share with you the knowledge he has gained through over 18 years of" +
							"experience in the Human Resources field!",
						images: ["/images/events/5.0/cv-session2.webp"],
						speaker: {
							name: "Mr. Maas Savanghan",
							title: "Global COE Leader",
							company: "Rizing Lanka",
						},
						venue: "Live via Zoom",
					}
				]
			},
			{
				title: "Know Your Industry",
				description: "Learn how to apply what you learn at your university practically! Learn about the industry essentials" +
				"directly from industry Experts!",
				events: [
					{
						title: "Telecommunications and Electronics Stream",
						date: "June 19, 2022",
						time: "5.00 PM - 6.00 PM",
						topic: "",
						description:
							"An expert in the field of Telecom and Technology, Mr. Anuradha Udunuwara is currently working as a" + 
							"Senior Enterprise Solutions Architect at Sri Lanka Telecom with 19+ years of industry experience. " +
							"He is also a guest lecturer at the University of Peradeniya and a faculty at CTO, UK.",
						images: ["/images/events/5.0/know-your-industry1.webp"],
						speaker: {
							name: "Mr. Anuradha Udunuwara",
							title: "Senior Enterprise Solutions Architect",
							company: "Sri Lanka Telecom",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Telecommunications and Electronics Stream",
						date: "June 19, 2022",
						time: "5.00 PM - 6.00 PM",
						topic: "",
						description:
							"An Application Engineer at Synopsys, an undergraduate of the University of Ruhuna, Mr. Ruchira Lakshan is" + 
							"also an expert in the fields of Electronics and is highly skilled in PCB Designing, FlatCAM, 3D modelling and much more.",
						images: ["/images/events/5.0/know-your-industry2.webp"],
						speaker: {
							name: "Mr. Ruchira Lakshan",
							title: "Application Engineer",
							company: "Synopsys",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Electrical Stream",
						date: "June 19, 2022",
						time: "6.00 PM Onwards",
						topic: "",
						description:
							"Mr. Pasan Pethiyagode is a reputed Electrical Design Engineer at Duo Operations Ltd and also a founder of " +
							"several infamous projects presented by the IEEE Young Professionals, Sri Lanka section. He is willing to " +
							"contribute his expertise comprising useful pieces of advice on how to get a job in the field of Electrical Engineering.",
						images: ["/images/events/5.0/know-your-industry3.webp"],
						speaker: {
							name: "Mr. Pasan Pethiyagode",
							title: "Electrical Design Engineer",
							company: "Duo Operations Ltd",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Computer Science Stream",
						date: "June 26, 2022",
						time: "5.00 PM - 6.00 PM",
						topic: "",
						description:
							"Mr. Yohan Gunathilaka will be joining us with 'Know Your Industry' on the 26th of June to tell you " +
							"everything you need to know in order to bridge your knowledge gap before entering the IT industry.",
						images: ["/images/events/5.0/know-your-industry4.webp"],
						speaker: {
							name: "Mr. Yohan Gunathilaka",
							title: "Senior Tech Lead",
							company: "99x",
						},
						venue: "Live via Zoom",
					}
				]
			},
			{
				title: "Know Your Niche",
				description: "Know nothing about the industry you will be stepping into? This is a session series exclusively for you!",
				events: [
					{
						title: "Computing Session",
						date: "July 09, 2022",
						time: "5.30 PM Onwards",
						topic: "",
						description:
							"Mr. Jehan Wijesinghe is a Tech Entrepreneur, Product Development Specialist, a Startup Coach and a Business " +
							"Consultant. He currently works at Surge Global and has experience in building innovative products for local and " +
							"international markets. He also co-founded IgniterSpace in 2016 and was the CEO from 2016-2021.",
						images: ["/images/events/5.0/know-your-niche1.webp"],
						speaker: {
							name: "Mr. Jehan Wijesinghe",
							title: "Head of Product",
							company: "Surge Global",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Electrical Session",
						date: "July 10, 2022",
						time: "5.00 PM Onwards",
						topic: "",
						description:
							"Mr. E.K.Indranatha is the Chief Electrical Engineer of Distribution Maintenance, at Ceylon Electricity Board. " +
							"He was a Senior Consultant of the Sounthern Construction, Sripali Construction and some reputed companies in Sri Lanka. ",
						images: ["/images/events/5.0/know-your-niche2.webp"],
						speaker: {
							name: "Mr. E.K.Indranatha",
							title: "Chief Electrical Engineer",
							company: "Ceylon Electricity Board",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Telecommunications Session",
						date: "July 10, 2022",
						time: "5.30 PM Onwards",
						topic: "",
						description:
							"Mr.Yasitha Harshanath currently serves as Supervisory Engineer - Radio Network Planning at Mobitel Pvt Ltd " +
							"Sri Lanka. He also has been an active volunteer for IEEE since 2015 and currently serves as the Secretary of IEEE Communications Society Sri Lanka Chapter.",
						images: ["/images/events/5.0/know-your-niche3.webp"],
						speaker: {
							name: "Mr.Yasitha Harshanath",
							title: "Supervisory Engineer",
							company: "Mobitel Pvt Ltd Sri Lanka",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Electronics Session",
						date: "July 10, 2022",
						time: "6.00 PM Onwards",
						topic: "",
						description:
							"Mr. Thilina Bandara is a Senior Consultant at Zone24x7, a Product Owner, a Certified Trainer and a Visiting Lecture. He’s an individual skilled in solution architecture, product management while being a life coach, career coach and trainer.",
						images: ["/images/events/5.0/know-your-niche4.webp"],
						speaker: {
							name: "Mr. Thilina Bandara",
							title: "Senior Consultant",
							company: "Zone24x7",
						},
						venue: "Live via Zoom",
					}
				]
			},
			{
				title: "Groom Yourself",
				description: "Are you all prepped up to continue on with honing the professional inside you? 'Groom Yourself' organized by " +
				"the IEEE Young Professionals Sri Lanka!",
				events: [
					{
						title: "Workshop on Personal Grooming",
						date: "September 15, 2022",
						time: "6.00 PM Onwards",
						topic: "",
						description:
							"Mr. Sampath Soysa is a Senior Executive and Marketing & Business Promotions in Sri Lanka, Maldives and " +
							"South East Asia. He is a lecturer, a mentor, facilitator on Soft Skills and Leadership Development.",
						images: ["/images/events/5.0/groom-yourself1.webp"],
						speaker: {
							name: "Mr. Sampath Soysa",
							title: "Head of Marketing",
							company: "ICBS",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Workshop on Personal Grooming",
						date: "September 18, 2022",
						time: "6.30 PM Onwards",
						topic: "",
						description:
							"Ms. Rasini Bandara is an International Wellbeing Consultant at ITF as well as an experienced Visiting Lecturer. " +
							"She also works as a Psychologist at Mind Heals Pvt Ltd and is skilled in public speaking and personality development coaching.",
						images: ["/images/events/5.0/groom-yourself2.webp"],
						speaker: {
							name: "Ms. Rasini Bandara",
							title: "International Wellbeing Consultant",
							company: "ITF",
						},
						venue: "Live via Zoom",
					},
				]
			},
			{
				title: "Interviews 101",
				description: "Unveil the true secret behind actually acing your interviews successfully with more tactics and more techniques.",
				events: [
					{
						title: "General Interviews",
						date: "October 01, 2022",
						time: "4.00 PM - 5.00 PM",
						topic: "",
						description:
							"Satchin Semage is a professional who has over 5 years of experience in varied industries. Having worked in " +
							"two multinational organizations as an HR executive and as a pre-sales engineer, he has seen the recruitment " +
							"cycle in the shoes of a recruiter. Satchin is currently based in Bristol UK following his master's degree in " +
							"business analytics at the university of Bristol. Before moving to England, he was also a forum member of the " +
							"SLASSCOM HR forum. He is a Toastmaster and a trainer whose goal is to inspire young professionals to achieve " +
							"career success in life.",
						images: ["/images/events/5.0/interviews1.webp"],
						speaker: {
							name: "Mr. Sachin Semage",
							title: "Senior Executive",
							company: "hSenid Business Solutions",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Technical Interviews",
						date: "October 02, 2022",
						time: "6.00 PM - 6.30 PM",
						topic: "",
						description:
							"Tharaka Madushanka is a dedicated leader who is the CEO & the Founder of METHRAX. He is also an Associate " +
							"Technical lead at 99X and a Visiting Lecturer. He holds a Bachelor’s degree in Information Technology from the University of Moratuwa. ",
						images: ["/images/events/5.0/interviews2.webp"],
						speaker: {
							name: "Mr. Tharaka Madushanka",
							title: "Founder & CEO",
							company: "METHRAX",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Technical Interviews",
						date: "October 02, 2022",
						time: "6.30 PM - 7.00 PM",
						topic: "",
						description:
							"Mr. Indike Gunathilake is a distinguished professional in the field of Information Technology and " +
							"Software Engineering. He is the Senior Vice President of Arimac Lanka digital product development company. " +
							"He has a Bachelor’s degree in Information Technology from the University of Colombo and a Masters degree in " +
							"Business Administration from the University of Moratuwa.",
						images: ["/images/events/5.0/interviews3.webp"],
						speaker: {
							name: "Mr. Indike Gunathilake",
							title: "Senior Vice President",
							company: "Arimac Lanka",
						},
						venue: "Live via Zoom",
					}
				]
			},
			{
				title: "Know Your Ethics",
				description: "Afraid of what the industry will expect of you? Wondering how the industry will look at you? Know " +
				"Your Ethics session is here for the rescue!",
				events: [
					{
						title: "Know Your Ethics",
						date: "October 23, 2022",
						time: "6.00 PM - 7.00 PM",
						topic: "",
						description:
							"Zamreen Zarook is a distinguished professional who is a Motivational Speaker and People & Organizational " +
							"Transformation Specialist. He is the Director of Glinmax Holdings (Pvt) and Tolmark Training & Consulting (Pvt) Ltd " + 
							"and he also works at the Universal College of Applied & General Studies. He owns a BBA double major in MGMT & MKT , " +
							"Business Management , Marketing and related support services from Edith Cowan University.",
						images: ["/images/events/5.0/know-your-ethics.webp"],
						speaker: {
							name: "Mr. Zamreen Zarook",
							title: "Director",
							company: "Glinmax Holdings (Pvt) Ltd",
						},
						venue: "Live via Zoom",
					},
				]
			},
			{
				title: "'Ask Me Anything' Series",
				description: "Afraid of what the industry will expect of you? Wondering how the industry will look at you? Know " +
				"Your Ethics session is here for the rescue!",
				events: [
					{
						title: "Ask Me Anything",
						date: "October 25, 2022",
						time: "11.00 AM Onwards",
						topic: "",
						description:
							"Fortude is a leading global enterprise and digital services company that connects technology solutions to business, " + 
							"with the vision To build sustainable technology solutions, products and tools that support tracking ESG goals. " +
							"It is of the largest Infor M3 certified resource bases in the world utilizing Microsoft Dynamics, BI and Analytics " +
							"Certified resources.",
						images: ["/images/events/5.0/ask-me-anything3.webp"],
						speaker: {
							name: "Fortude Team",
							title: "",
							company: "Enterprise and Digital Services Company",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Ask Me Anything",
						date: "October 26, 2022",
						time: "6.00 PM Onwards",
						topic: "",
						description:
							"Attune, a Rizing Company is a global consultancy that helps the world’s most leading fashion and lifestyle " +
							"companies transform with SAP technology. attune is a leading SAP partner and collaborator, attune has been " +
							"extensively involved in SAP offerings for the fashion industry and has a global presence across 8 countries.",
						images: ["/images/events/5.0/ask-me-anything4.webp"],
						speaker: {
							name: "Attune (Rizing) Team",
							title: "",
							company: "SAP Consultancy Company",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Ask Me Anything",
						date: "October 27, 2022",
						time: "6.00 PM Onwards",
						topic: "",
						description:
							"Azend Technologies is a leading enterprise and digital services company with an experienced set of ideators and " +
							"technologists from diverse industries including fintech, agriculture, automotive, power solutions, industrial " +
							"engineering, retail, logistics and more. Taking advantage of the latest cloud, IoT, blockchain, and machine " +
							"learning technologies, Azend Technologies enables businesses to realise their true potential using next-generation " +
							"digital infrastructure and solutions.",
						images: ["/images/events/5.0/ask-me-anything1.webp"],
						speaker: {
							name: "Azend Technologies Team",
							title: "",
							company: "Enterprise and Digital Services Company",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Ask Me Anything",
						date: "October 28, 2022",
						time: "6.00 PM Onwards",
						topic: "",
						description:
							"DirectFN Sri Lanka is also known as Mubasher Development Centre is a pioneer in providing world class software " +
							"solutions to the Financial Service Industry. Targeted in catering micro and macro level organizational and " +
							"information needs of stock brokerage firms.",
						images: ["/images/events/5.0/ask-me-anything2.webp"],
						speaker: {
							name: "DirectFN Team",
							title: "",
							company: "FinTech Services Company",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Ask Me Anything",
						date: "October 30, 2022",
						time: "4.00 PM Onwards",
						topic: "",
						description:
							"Different is a group of people from companies like Google, Uber, ThoughtWorks, Sysco LABS, 99x, WSO2 and LSEG " +
							"Technology who have come together to create a 'digital assistant for your home'. They are in the process of " +
							"building a multi-billion dollar global tech company, backed by VC funds such as Antler Global and the Australian " +
							"Commonwealth Bank x15 fund.",
						images: ["/images/events/5.0/ask-me-anything5.webp"],
						speaker: {
							name: "Different Engineering Team",
							title: "",
							company: "Global Technology Company",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Ask Me Anything",
						date: "November 01, 2022",
						time: "6.00 PM Onwards",
						topic: "",
						description:
							"Dialog Axiata Group, a subsidiary of Axiata Group Berhad (Axiata), operates Sri Lanka’s Leading Quad-Play " +
							"Connectivity Provider. Dialog Axiata PLC, listed on the Colombo Stock Exchange, supplements its market leading " + 
							"position in the Mobile Telecommunications sector with a robust footprint and market presence in Sri Lanka’s Fixed " +
							"Telecommunications, Digital Pay Television, Digital Services, Financial Services, and IT services markets through " +
							"its subsidiaries, Dialog Broadband Networks (Private) Limited (DBN), Dialog Television (Private) Limited (DTV), " +
							"Digital Holdings Lanka (Private) Limited, Dialog Finance PLC, and H One (Private) Limited. Dialog Axiata Group is "+
							"Sri Lanka's largest Foreign Direct Investor (FDI).",
						images: ["/images/events/5.0/ask-me-anything6.webp"],
						speaker: {
							name: "Dialog Axiata Team",
							title: "",
							company: "Telecommunications Company",
						},
						venue: "Live via Zoom",
					},
				]
			},
			{
				title: "A Better Way",
				description: "Learn the best practices for successful job hunting at our comprehensive workshop, A Better Way!",
				events: [
					{
						title: "A Better Way",
						date: "January 29, 2023",
						time: "5.00 PM - 6.00 PM",
						topic: "",
						description:
							"Mohamed Zaharan Liyabdeen is a highly qualified and experienced professional with a strong background in finance " +
							"and management. He holds an MBA from the University of Colombo, and a Bachelor of Arts in Sustainable Performance " +
							"Management from Manchester Metropolitan University. He is an Associate Member of the Chartered Institute of "  +
							"Management Accountants in the United Kingdom. With over 15 years of post-qualification experience, he has a " +
							"wealth of knowledge in auditing, management consulting, and corporate finance. He has global exposure, having " +
							"worked in the USA, the United Kingdom, the Middle East, Africa, India, and Sri Lanka. Currently, he is employed " +
							"as the Head of Finance for a leading conglomerate in Sri Lanka.",
						images: ["/images/events/5.0/a-better-way.webp"],
						speaker: {
							name: "Mr. Zaharan Liyabdeen",
							title: "Visiting Lecturer",
							company: "ICBS",
						},
						venue: "Live via Zoom",
					},
				]
			},
		]
	},
	{
		version: "StudPro 6.0",
		year: 2023,
		description:
			"StudPro 6.0 focused on foundational skills in modern web development, advanced frameworks and deployment strategies, preparing students for real-world development scenarios.",
		eventSeries: [
			{
				title: "Branding Yourself",
				description: "Branding Yourself is a three-day webinar series designed to equip graduates and undergraduates with essential " +
				"skills and knowledge to effectively brand themselves for career advancement.",
				events: [
					{
						title: "Personal Branding",
						date: "May 18, 2023",
						time: "6.00 PM Onwards",
						topic: "",
						description:
							"Mr. Aishan Bamunawita, Lead Consultant - Global Talent Acquisition at 99x He describes himself as a talented " +
							"individual with experience ranging from sourcing talent for companies based out of Europe, North America, and " +
							"Asia. Currently, he is in the process of expanding the 99x talent base to other parts of the world, and " +
							"providing career guidance to the community. ",
						images: [
							"/images/events/6.0/branding-yourself1.webp",
						],
						speaker: {
							name: "Mr. Aishan Bamunawita",
							title: " Lead Consultant - Global Talent Acquisition",
							company: "99x",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Crafting Your LinkedIn Profile",
						date: "May 20, 2023",
						time: "6.00 PM Onwards",
						topic: "",
						description:
							"Mr. Niresh Samaranayake, Head of people, performance & culture GSDC at CAMMS Are you ready to take your " +
							"career to new heights? We are thrilled to present an extraordinary session that will transform the way you " +
							"approach your professional journey. Get ready to meet our exceptional speaker, an industry expert with invaluable insights!",
						images: ["/images/events/6.0/branding-yourself2.webp"],
						speaker: {
							name: "Mr. Niresh Samaranayake",
							title: "Head of People, Performance & Culture GSDC",
							company: "Cammas",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Creating a Winning CV",
						date: "May 27, 2023",
						time: "6.00 PM Onwards",
						topic: "",
						description:
							"Are you prepared to embark on a thrilling journey that will elevate your career to dazzling new heights? " +
							"We are thrilled to present an extraordinary session that will transform the way you approach your professional " +
							"journey. Get ready to meet our exceptional speaker, an industry expert with invaluable insights on tailoring " +
							"your CV to different cultural norms and job expectations in foreign countries.",
						images: ["/images/events/6.0/branding-yourself3.webp"],
						speaker: {
							name: "Mr. Praneeth Peiris",
							title: "Software Engineering Lead",
							company: "Trivago (Germany)",
						},
						venue: "Live via Zoom",
					}
				]
			},
			{
				title: "Know Your Industry",
				description: "'Know Your Industry' aimed to provide a comprehensive understanding of the Engineering and Computing domains in Sri Lanka.",
				events: [
					{
						title: "Know Your Industry",
						date: "June 27, 2023",
						time: "6 PM Onwards",
						topic: "Resume Building and Interview Skills",
						description:
							"Are you eager to gain a comprehensive understanding of the industry you are about to step into? ",
						images: [
							"/images/events/javascript-intro.jpg",
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
						images: ["/images/events/html-css-basics.jpg"],
						speaker: {
							name: "David Wilson",
							title: "UX Designer",
							company: "DesignStudio",
						},
						venue: "Showcase Hall, 404 Portfolio Place, Miami, USA",
					}
				]
			}
		],
	},
	{
		version: "StudPro 7.0",
		year: 2024,
		description:
			"StudPro 7.0 expanded into mobile development and emerging technologies, keeping pace with industry trends and modern development practices.",
		eventSeries: [
			{
				title: "Mobile and Advanced Development",
				description: "Cross-platform and TypeScript development",
				events: [
					{
						title: "React Native Fundamentals",
						date: "February 8, 2024",
						time: "10:30 - 14:00",
						topic: "Cross-Platform Mobile Development",
						description:
							"Build mobile apps for iOS and Android with a single codebase.",
						images: [
							"/images/events/react-app.jpg",
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
						images: ["/images/events/javascript-intro.jpg"],
						speaker: {
							name: "Anna Kowalski",
							title: "TypeScript Expert",
							company: "TypeSafe Solutions",
						},
						venue: "Type Academy, 606 Interface Drive, Atlanta, USA",
					}
				]
			},
			{
				title: "API and Testing",
				description: "Modern API design and testing strategies",
				events: [
					{
						title: "GraphQL and Modern APIs",
						date: "June 22, 2024",
						time: "09:00 - 12:30",
						topic: "Building Efficient Data Layers",
						description: "Design flexible and efficient APIs using GraphQL.",
						images: [
							"/images/events/web-development-intro.jpg",
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
						images: ["/images/events/git-version-control.jpg"],
						speaker: {
							name: "Maria Gonzalez",
							title: "QA Engineer",
							company: "TestDriven",
						},
						venue: "Test Labs, 808 Quality Assurance Way, Phoenix, USA",
					}
				]
			},
			{
				title: "AI and Web Technologies",
				description: "Integrating AI into web applications",
				events: [
					{
						title: "AI Integration Workshop",
						date: "October 16, 2024",
						time: "10:00 - 15:00",
						topic: "Integrating AI/ML Models in Web Applications",
						description:
							"Learn to incorporate AI capabilities into your web applications.",
						images: [
							"/images/events/html-css-basics.jpg",
						],
						speaker: {
							name: "Dr. Samuel Lee",
							title: "AI Research Scientist",
							company: "AI Innovations",
						},
						venue:
							"AI Research Center, 909 Neural Network Boulevard, Pittsburgh, USA",
					}
				]
			}
		],
	},
	{
		version: "StudPro 8.0",
		year: 2025,
		description:
			"The latest StudPro iteration focuses on cutting-edge technologies, scalable architectures, and professional development in the modern tech landscape.",
		eventSeries: [
			{
				title: "Modern Architecture",
				description: "Advanced frontend architectures and blockchain technologies",
				events: [
					{
						title: "Micro-frontends Architecture",
						date: "February 9, 2025",
						time: "09:30 - 13:00",
						topic: "Building Scalable Frontend Applications",
						description:
							"Learn how to break down monolithic frontends into smaller, manageable pieces.",
						images: [
							"/images/events/react-app.jpg",
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
							"/images/events/javascript-intro.jpg",
						],
						speaker: {
							name: "Chris Anderson",
							title: "Blockchain Developer",
							company: "CryptoBuilders",
						},
						venue:
							"Blockchain Center, 1111 Distributed Ledger Lane, San Francisco, USA",
					}
				]
			},
			{
				title: "Performance and Cloud",
				description: "Optimizing web applications and cloud-native development",
				events: [
					{
						title: "Performance Optimization Masterclass",
						date: "June 23, 2025", 
						time: "10:00 - 14:00",
						topic: "Advanced Techniques for High-Performance Web Apps",
						description:
							"Master techniques to optimize web performance for better user experience.",
						images: ["/images/events/web-development-intro.jpg"],
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
							"/images/events/git-version-control.jpg",
						],
						speaker: {
							name: "Jordan Smith",
							title: "Cloud Solutions Architect",
							company: "CloudNative Corp",
						},
						venue: "Cloud Computing Center, 1313 Container Road, Seattle, USA",
					}
				]
			},
			{
				title: "Professional Development",
				description: "Leadership skills and final project showcase",
				events: [
					{
						title: "Leadership in Tech",
						date: "September 8, 2025",
						time: "14:00 - 16:30",
						topic: "Technical Leadership and Team Management",
						description:
							"Develop the skills needed to lead technical teams effectively.",
						images: ["/images/events/html-css-basics.jpg"],
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
							"/images/events/react-app.jpg",
						],
						speaker: {
							name: "StudPro Alumni Panel",
							title: "Various Roles",
							company: "Industry Partners",
						},
						venue: "Conference Center, 1515 Connection Plaza, Chicago, USA",
					}
				]
			}
		],
	},
];
