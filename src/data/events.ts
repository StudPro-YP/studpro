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
				description:
					"Craft your resume and upgrade your LinkedIn to the next level!",
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
						images: ["/images/events/5.0/upgrade-linkedin.webp"],
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
					},
				],
			},
			{
				title: "Know Your Industry",
				description:
					"Learn how to apply what you learn at your university practically! Learn about the industry essentials" +
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
					},
				],
			},
			{
				title: "Know Your Niche",
				description:
					"Know nothing about the industry you will be stepping into? This is a session series exclusively for you!",
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
					},
				],
			},
			{
				title: "Groom Yourself",
				description:
					"Are you all prepped up to continue on with honing the professional inside you? 'Groom Yourself' organized by " +
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
				],
			},
			{
				title: "Interviews 101",
				description:
					"Unveil the true secret behind actually acing your interviews successfully with more tactics and more techniques.",
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
					},
				],
			},
			{
				title: "Know Your Ethics",
				description:
					"Afraid of what the industry will expect of you? Wondering how the industry will look at you? Know " +
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
				],
			},
			{
				title: "'Ask Me Anything' Series",
				description:
					"Afraid of what the industry will expect of you? Wondering how the industry will look at you? Know " +
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
							"Digital Holdings Lanka (Private) Limited, Dialog Finance PLC, and H One (Private) Limited. Dialog Axiata Group is " +
							"Sri Lanka's largest Foreign Direct Investor (FDI).",
						images: ["/images/events/5.0/ask-me-anything6.webp"],
						speaker: {
							name: "Dialog Axiata Team",
							title: "",
							company: "Telecommunications Company",
						},
						venue: "Live via Zoom",
					},
				],
			},
			{
				title: "A Better Way",
				description:
					"Learn the best practices for successful job hunting at our comprehensive workshop, A Better Way!",
				events: [
					{
						title: "A Better Way",
						date: "January 29, 2023",
						time: "5.00 PM - 6.00 PM",
						topic: "",
						description:
							"Mohamed Zaharan Liyabdeen is a highly qualified and experienced professional with a strong background in finance " +
							"and management. He holds an MBA from the University of Colombo, and a Bachelor of Arts in Sustainable Performance " +
							"Management from Manchester Metropolitan University. He is an Associate Member of the Chartered Institute of " +
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
				],
			},
		],
	},
	{
		version: "StudPro 6.0",
		year: 2023,
		description:
			"StudPro 6.0 focused on foundational skills in modern web development, advanced frameworks and deployment strategies, preparing students for real-world development scenarios.",
		eventSeries: [
			{
				title: "Branding Yourself",
				description:
					"Branding Yourself is a three-day webinar series designed to equip graduates and undergraduates with essential " +
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
						images: ["/images/events/6.0/branding-yourself1.webp"],
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
					},
				],
			},
			{
				title: "Know Your Industry",
				description:
					"Know Your Industry aimed to provide a comprehensive understanding of the Engineering and Computing domains in Sri Lanka.",
				events: [
					{
						title: "Know Your Industry",
						date: "June 27, 2023",
						time: "6 PM Onwards",
						topic: "",
						description:
							"Are you eager to gain a comprehensive understanding of the industry you are about to step into? ",
						images: ["/images/events/6.0/know-your-industry1.webp"],
						speaker: {
							name: "Helani Wanniarachchi",
							title: "Head of Project Management",
							company: "SimCentric",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Know Your Industry",
						date: "June 27, 2023",
						time: "6.00 PM Onwards",
						topic: "",
						description:
							"Are you eager to gain a comprehensive understanding of the industry you are about to step into? 🤔",
						images: ["/images/events/6.0/know-your-industry2.webp"],
						speaker: {
							name: "Jude Shilan Wijesekera",
							title: "Lead TechOps Professional",
							company: "CodeGen International",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Know Your Industry",
						date: "June 27, 2023",
						time: "6.00 PM Onwards",
						topic: "",
						description:
							"Are you eager to gain a comprehensive understanding of the industry you are about to step into? 🤔",
						images: ["/images/events/6.0/know-your-industry3.webp"],
						speaker: {
							name: "Chamara Jayaweera",
							title: "Managing Director",
							company: "Itechro (Pvt) Ltd",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Know Your Industry",
						date: "June 27, 2023",
						time: "6.00 PM Onwards",
						topic: "",
						description:
							"Are you eager to gain a comprehensive understanding of the industry you are about to step into? 🤔",
						images: ["/images/events/6.0/know-your-industry4.webp"],
						speaker: {
							name: "Chandana Ranasinghe",
							title: "Founder & CEO",
							company: "Acentura Inc.",
						},
						venue: "Live via Zoom",
					},
				],
			},
			{
				title: "Career Pathways",
				description:
					"Career Pathways informs fresh graduates about the wide range of roles and responsibilities within the computing, electrical and electronic industries.",
				events: [
					{
						title: "Computing Stream",
						date: "July 27, 2023",
						time: "7 PM Onwards",
						topic: "",
						description:
							"Discover the magical fusion of computing and engineering that will unlock new dimensions for your future. 🌐✨" +
							"Join us as we dive into the exciting job roles, uncover hidden opportunities, and pave the way to your dream career.👩🏽‍💻",
						images: ["/images/events/6.0/career-pathways1.webp"],
						speaker: {
							name: "Selvarantnam Uthaiyashankar",
							title: "Senior Vice President - Engineering",
							company: "WSO2",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Computing Stream",
						date: "July 27, 2023",
						time: "7.00 PM Onwards",
						topic: "",
						description:
							"Discover the magical fusion of computing and engineering that will unlock new dimensions for your future. 🌐✨ " +
							"Join us as we dive into the exciting job roles, uncover hidden opportunities, and pave the way to your dream career.👩🏽‍💻",
						images: ["/images/events/6.0/career-pathways2.webp"],
						speaker: {
							name: "Harshan Nishantha",
							title: "Lead Consultant - Technology",
							company: "Virtusa (Pvt) Ltd",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Engineering Stream",
						date: "July 27, 2023",
						time: "7.00 PM Onwards",
						topic: "",
						description:
							"Discover the magical fusion of computing and engineering that will unlock new dimensions for your future. 🌐✨ " +
							"Join us as we dive into the exciting job roles, uncover hidden opportunities, and pave the way to your dream career.👩🏽‍💻",
						images: ["/images/events/6.0/career-Pathways3.webp"],
						speaker: {
							name: "Lilantha Samaranayake",
							title: "Professor in Electrical & Electronic Engineering",
							company: "University of Peradeniya",
						},
						venue: "Live via Zoom",
					},
				],
			},
			{
				title: "Interview Mastery",
				description:
					"Say goodbye to interview jitters! Learn from the pros, gain expert insights, and discover the keys to confidently " +
					"showcasing your skills and experience.",
				events: [
					{
						title: "Interview Mastery",
						date: "August 30, 2023",
						time: "7 PM Onwards",
						topic: "",
						description:
							"Ready to Nail Your Next Interview? 🚀 Curious about the magic behind crushing tough questions while leaving a " +
							"lasting mark? 🤔 Unveil the art of interview with us in our power-packed session – 'Interview Mastery' ! 🔑 " +
							"Unlock the door to acing interview questions with finesse and confidence. From decoding the trickiest questions " +
							"to mastering the art of storytelling.✨",
						images: ["/images/events/6.0/interview-mastery1.webp"],
						speaker: {
							name: "Udaya Chathuranga",
							title: "Technical Lead",
							company: "Fortude",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Interview Mastery",
						date: "August 30, 2023",
						time: "7.00 PM Onwards",
						topic: "",
						description:
							"Ready to Nail Your Next Interview? 🚀 Curious about the magic behind crushing tough questions while leaving a " +
							"lasting mark? 🤔 Unveil the art of interview with us in our power-packed session – 'Interview Mastery' ! 🔑 " +
							"Unlock the door to acing interview questions with finesse and confidence. From decoding the trickiest questions " +
							"to mastering the art of storytelling.✨",
						images: ["/images/events/6.0/interview-mastery2.webp"],
						speaker: {
							name: "Hozni Feroz",
							title: "Head of Global Talent Acquisition",
							company: "Fortude",
						},
						venue: "Live via Zoom",
					},
				],
			},
		],
	},
	{
		version: "StudPro 7.0",
		year: 2024,
		description:
			"StudPro 7.0 expanded into mobile development and emerging technologies, keeping pace with industry trends and modern development practices.",
		eventSeries: [
			{
				title: "Industry Connect with StudPro",
				description:
					"Industry Connect with StudPro is a platform that links students with industry professionals, offering valuable " +
					"insights, networking opportunities, and real-world exposure to bridge the gap between academia and the professional world.",
				events: [
					{
						title: "IFS Champions Day",
						date: "June 28, 2024",
						time: "9.00 AM Onwards",
						topic: "",
						description:
							"IFS Champions Day is a special event organized to celebrate and recognize the winning undergraduates of the " +
							"Xtream Hackathon. It honors their creativity, innovation, and dedication shown throughout the competition. " +
							"The event offers a unique opportunity for these young tech talents to connect with industry leaders, explore " +
							"real-world applications of their skills, and gain valuable insights into the world of enterprise technology and " +
							"innovation.",
						images: ["/images/events/7.0/ifs-visit.png"],
						speaker: {
							name: "IFS Team",
							title: "",
							company: "Multinational Enterprise Software Company",
						},
						venue: "IFS, Orion City",
					},
					{
						title: "Dialog Axiata",
						date: "July 29, 2024",
						time: "10.00 AM Onwards",
						topic: "",
						description:
							"The Dialog Axiata Industry Visit provides undergraduates with a valuable opportunity to explore the operations " +
							"of a leading telecom and digital service provider. Through guided tours and interactive sessions, students gain " +
							"insights into industry practices, emerging technologies, and corporate culture. This experience helps bridge " +
							"academic knowledge with real-world applications, inspiring and preparing students for future careers in tech.",
						images: ["/images/events/7.0/dialog-visit.png"],
						speaker: {
							name: "Dialog Axiata Team",
							title: "",
							company: "Telecommunications Service Provider",
						},
						venue: "Dialog Axiata, Colombo",
					},
					{
						title: "SLT Mobitel",
						date: "August 30, 2024",
						time: "9.30 AM Onwards",
						topic: "",
						description:
							"The SLT-Mobitel Industry Visit offers undergraduates a valuable opportunity to explore the operations of " +
							"Sri Lanka’s national ICT and telecommunications service provider. Through guided tours and expert-led sessions, " +
							"students gain insights into cutting-edge technologies, network infrastructure, and industry practices. " +
							"This experience bridges the gap between theory and practice, preparing students for future careers in the " +
							"tech and telecom sectors.",
						images: ["/images/events/7.0/slt-visit.png"],
						speaker: {
							name: "SLT Data Center Team",
							title: "",
							company: "Telecommunications Service Provider",
						},
						venue: "Dialog Axiata, Colombo",
					},
					{
						title: "Virtusa",
						date: "October 08, 2024",
						time: "9.30 AM Onwards",
						topic: "",
						description:
							"The Virtusa Industry Visit offers undergraduates an exciting opportunity to explore the dynamic world of a " +
							"global IT services and consulting company. Students gain first-hand insights into software development, " +
							"digital engineering, and real-world project management. Through interactive sessions and expert guidance, " +
							"the visit bridges academic learning with industry practices, inspiring future professionals in technology and " +
							"innovation.",
						images: ["/images/events/7.0/virtusa-visit.png"],
						speaker: {
							name: "Virtusa Team",
							title: "",
							company: "Global IT Services Company",
						},
						venue: "Virtusa Sri Lanka, Colombo",
					},
					{
						title: "Zone24x7",
						date: "December 04, 2024",
						time: "11.00 AM Onwards",
						topic: "",
						description:
							"The Zone24x7 Industry Visit provides undergraduates with a valuable opportunity to experience the innovative " +
							"environment of a leading technology company. Students gain insights into cutting-edge solutions in AI, IoT, " +
							"and software engineering. Through interactive sessions and hands-on exposure, the visit bridges academic " +
							"knowledge with real-world applications, inspiring students to pursue careers in advanced technology and " +
							"innovation.",
						images: ["/images/events/7.0/zone-visit.jpg"],
						speaker: {
							name: "Zone24x7 Team",
							title: "",
							company: "Global Digital Solutions Provider",
						},
						venue: "Zone24x7 Sri Lanka, Colombo",
					},
					{
						title: "Calcey",
						date: "December 06, 2024",
						time: "10.00 AM Onwards",
						topic: "",
						description:
							"The Calcey Industry Visit immerses undergraduates in the culture of an award‑winning software product engineering " +
							"firm. Participants tour collaborative workspaces, meet engineers driving agile development, and observe live " +
							"demonstrations of cloud, mobile, and UX projects for global clients. Interactive Q&A sessions reveal career " +
							"pathways, best practices, and innovation strategies, linking classroom theory to real‑world technology " +
							"challenges and inspiring future ambitions.",
						images: ["/images/events/7.0/calcey-visit.jpg"],
						speaker: {
							name: "Calcey Team",
							title: "",
							company: "Global IT Services Company",
						},
						venue: "Trace Expert City, Colombo",
					},
					{
						title: "Codegen International",
						date: "January 10, 2025",
						time: "10.00 AM Onwards",
						topic: "",
						description:
							"The CodeGen International Industry Visit immerses undergraduates in a global leader of travel tech and AI " +
							"innovation. Hosted at their TRACE Expert City headquarters in Colombo, students explore agile software " +
							"development, reservation systems, and emerging AI-driven solutions. Through guided tours and expert Q&A, " +
							"they bridge academic theory with real-world industry practices, gain career insights, and get inspired to " +
							"shape future technology solutions.",
						images: ["/images/events/7.0/codegen-visit.jpg"],
						speaker: {
							name: "CodeGen Team",
							title: "",
							company: "Global Travel Technology Solutions Provider",
						},
						venue: "Trace Expert City, Colombo",
					},
				],
			},
		],
	},
	{
		version: "StudPro 8.0",
		year: 2025,
		description:
			"The latest StudPro iteration focuses on cutting-edge technologies, scalable architectures, and professional development in the modern tech landscape.",
		eventSeries: [
			{
				title: "Forge Your Icon",
				description:
					"Forge Your Icon is a career development series by IEEE YP Sri Lanka and StudPro, aimed at empowering young " +
					"professionals with essential skills like LinkedIn mastery, personal branding, and interview success to thrive in " +
					"today’s job market.",
				events: [
					{
						title: "LinkedIn Mastery",
						date: "March 22, 2025",
						time: "7.00 PM Onwards",
						topic: "Unlock the power of the LinkedIn",
						description:
							"LinkedIn Mastery, the kickoff session of the Forge Your Icon series, successfully took place on 22nd March 2025, " +
							"featuring esteemed speaker Mr. Amithe Gamage. Attendees gained valuable insights on optimizing their LinkedIn " +
							"profiles, building professional networks, and leveraging the platform for career growth. The session empowered " +
							"participants to take their personal branding to the next level.s.",
						images: ["/images/events/8.0/linkedin-mastery.png"],
						speaker: {
							name: "Mr. Amithe Gamage",
							title: "Co-Founder",
							company: "Quantum Leap (Pvt) Ltd",
						},
						venue: "Live via Zoom",
					},
					{
						title: "CV That Gets You Noticed",
						date: "April 29, 2025",
						time: "7.00 PM Onwards",
						topic: "Crafting a Winning First Impression on Paper",
						description:
							"The second session of the Forge Your Icon series, CV That Gets You Noticed, was held on 29th April 2025 with " +
							"Ms. Sonia ChinnaIyah Thayakaran, CEO of Recruiting By Sonia. As an HR gold medalist, she shared expert " +
							"strategies on crafting impactful CVs that stand out in competitive job markets. The session offered actionable " +
							"tips to highlight strengths and secure interview calls.",
						images: ["/images/events/8.0/cv-get-noticed.png"],
						speaker: {
							name: "Ms. Sonia ChinnaIyah Thayakaran",
							title: "CEO and HR Gold Medalist",
							company: "Recruiting By Sonia",
						},
						venue: "Live via Zoom",
					},
					{
						title: "Personal Branding For Career Growth",
						date: "May 17, 2025",
						time: "7.00 PM Onwards",
						topic: "Crafting a Personal Brand for Career Success",
						description:
							"A strong personal brand sets you apart in a competitive job market. In this session, Ms. Shamilka Samaranayake, " +
							"HR Manager - Talent Acquisition & L&D at Acenture Inc., will share practical insights on how to build and present a compelling professional " +
							"identity. Learn how to align your strengths, values, and online presence to create lasting impressions and unlock " +
							"new career opportunities.",
						images: ["/images/events/8.0/personal-branding.png"],
						speaker: {
							name: "Ms. Shamilka Samaranayake",
							title: "HR Manager - Talent Acquisition & L&D",
							company: "Acentura Inc.",
						},
						venue: "Live via Zoom",
					},
				],
			},
			{
				title: "Industry Connect With StudPro",
				description:
					"Industry Connect with StudPro is a platform that links students with industry professionals, offering valuable " +
					"insights, networking opportunities, and real-world exposure to bridge the gap between academia and the professional world.",
				events: [
					{
						title: "Cambio Software",
						date: "April 11, 2025",
						time: "11.00 AM Onwards",
						topic: "Industry Exposure through StudPro 8.0",
						description:
							"As part of the StudPro 8.0 initiative, IEEE Young Professionals Sri Lanka, in collaboration with Cambio " +
							"Sri Lanka, organized an engaging industry connect session. This visit provided participants with valuable " +
							"insights into real-world technological innovations and corporate practices, fostering professional growth " +
							"and inspiration among future tech leaders.",
						images: ["/images/events/8.0/cambio-visit.jpg"],
						speaker: {
							name: "Cambio Software Team",
							title: "",
							company: "E-HealthCare Solutions Providers",
						},
						venue: "Cambio Sri Lanka, Colombo",
					},
					{
						title: "Acentura Inc.",
						date: "April 22, 2025",
						time: "02.00 PM Onwards",
						topic: "Industry Exposure through StudPro 8.0",
						description:
							"In StudPro 8.0’s “Industry Connect” session, IEEE Young Professionals Sri Lanka and CINEC Campus welcomed " +
							"Acentura, a leading digital transformation and SAP-focused technology partner. Participants gained hands-on " +
							"insights into enterprise software solutions, bridging academic learning with real-world tech practices.",
						images: ["/images/events/8.0/acentura-visit.png"],
						speaker: {
							name: "Acentura Team",
							title: "",
							company: " Globel Digital Solutions Providers",
						},
						venue: "Acentura Inc, Colombo",
					},
					{
						title: "Altrium Sri Lanka",
						date: "May 28, 2025",
						time: "02.00 PM Onwards",
						topic: "Industry Exposure through StudPro 8.0",
						description:
							"As part of StudPro 8.0’s Industry Connect session, IEEE Young Professionals Sri Lanka joined Altrium for an " +
							"immersive visit. Students experienced Altrium’s vibrant workspace and gained firsthand knowledge about " +
							"technology-driven corporate culture and innovation practices through direct interaction with industry " +
							"professionals.",
						images: ["/images/events/8.0/altrium-visit.png"],
						speaker: {
							name: "Altrium Sri Lanka Team",
							title: "",
							company: "Global IT Services Company",
						},
						venue: "Altrium Sri Lanka, Colombo",
					},
					{
						title: "WSO2 Sri Lanka",
						date: "June 18, 2025",
						time: "9.30 PM Onwards",
						topic: "Industry Exposure through StudPro 8.0",
						description:
							"The Industry Connect session with WSO2 as part of StudPro 8.0 was an enriching experience for all participants." +
							"Held on 18th June 2025, the visit offered an exclusive look into WSO2’s innovative tech landscape, where students " +
							"explored real-world applications of API management, integration platforms, and open-source solutions. The " +
							"session fostered meaningful discussions, hands-on learning, and valuable networking, making it a truly " +
							"inspiring and insightful journey into the world of enterprise software.",
						images: ["/images/events/8.0/wso2-visit.png"],
						speaker: {
							name: "WSO2 Team",
							title: "",
							company: "Enterprise Software & IT Services Providers",
						},
						venue: "WSO2 Sri Lanka, Colombo",
					},
				],
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
						images: ["/images/events/react-app.jpg"],
						speaker: {
							name: "StudPro Alumni Panel",
							title: "Various Roles",
							company: "Industry Partners",
						},
						venue: "Conference Center, 1515 Connection Plaza, Chicago, USA",
					},
				],
			},
		],
	},
];
