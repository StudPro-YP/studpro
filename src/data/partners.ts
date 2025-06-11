// Partner data file

export interface Partner {
	name: string;
	logo: string;
	years: number; // Years with us
	partnerLevel?: "Platinum" | "Gold" | "Silver" | "Bronze"; // Partner level (optional)
	studProVersion: string; // e.g., "StudPro 5.0"
	website?: string; // Optional website URL
}

// Group partners by year
export interface PartnersByYear {
	year: number;
	version: string; // e.g., "StudPro 5.0"
	partners: Partner[];
}

export const partners: PartnersByYear[] = [
	{
		year: 2022,
		version: "StudPro 5.0",
		partners: [
			{
				name: "Dialog Axiata",
				logo: "/images/partners/dialog.svg",
				years: 5,
				partnerLevel: "Platinum",
				studProVersion: "StudPro 5.0",
				website: "https://www.dialog.lk",
			},
			{
				name: "Azend Technologies",
				logo: "/images/partners/azend.png",
				years: 2,
				partnerLevel: "Platinum",
				studProVersion: "StudPro 5.0",

				website: "https://www.azendtech.com",
			},
			{
				name: "Microsoft",
				logo: "/images/partners/microsoft.png",
				years: 3,
				partnerLevel: "Platinum",
				studProVersion: "StudPro 5.0",

				website: "https://www.microsoft.com",
			},
			{
				name: "WSO2",
				logo: "/images/partners/wso2.png",
				years: 4,
				partnerLevel: "Gold",
				studProVersion: "StudPro 5.0",

				website: "https://www.wso2.com",
			},
			{
				name: "99X",
				logo: "/images/partners/99x.png",
				years: 2,
				partnerLevel: "Gold",
				studProVersion: "StudPro 5.0",

				website: "https://www.99x.io",
			},
			{
				name: "IFS",
				logo: "/images/partners/ifs.png",
				years: 3,
				partnerLevel: "Gold",
				studProVersion: "StudPro 5.0",

				website: "https://www.ifs.com",
			},
			{
				name: "Virtusa",
				logo: "/images/partners/virtusa.png",
				years: 2,
				partnerLevel: "Silver",
				studProVersion: "StudPro 5.0",

				website: "https://www.virtusa.com",
			},
			{
				name: "ICTA",
				logo: "/images/partners/icta.png",
				years: 5,
				partnerLevel: "Silver",
				studProVersion: "StudPro 5.0",

				website: "https://www.icta.lk",
			},
			{
				name: "CreativeSoftware",
				logo: "/images/partners/creativesoftware.png",
				years: 2,
				partnerLevel: "Silver",
				studProVersion: "StudPro 5.0",

				website: "https://www.creativesoftware.com",
			},
			{
				name: "Pearson",
				logo: "/images/partners/pearson.png",
				years: 1,
				partnerLevel: "Silver",
				studProVersion: "StudPro 5.0",

				website: "https://www.pearson.com",
			},
			{
				name: "IBM",
				logo: "/images/partners/ibm.png",
				years: 2,
				partnerLevel: "Gold",
				studProVersion: "StudPro 5.0",

				website: "https://www.ibm.com",
			},
			{
				name: "PickMe",
				logo: "/images/partners/pickme.png",
				years: 1,
				partnerLevel: "Silver",
				studProVersion: "StudPro 5.0",

				website: "https://www.pickme.lk",
			},
		],
	},
	{
		year: 2023,
		version: "StudPro 6.0",
		partners: [
			{
				name: "Axiata Digital Labs",
				logo: "/images/partners/axiata-digital-labs.ico",
				years: 2,
				partnerLevel: "Platinum",
				studProVersion: "StudPro 6.0",

				website: "https://www.axiatadigitallabs.com",
			},
			{
				name: "DirectFN",
				logo: "/images/partners/directfn.png",
				years: 2,
				partnerLevel: "Gold",
				studProVersion: "StudPro 6.0",

				website: "https://www.directfn.com",
			},
			{
				name: "Google",
				logo: "/images/partners/google.png",
				years: 2,
				partnerLevel: "Platinum",
				studProVersion: "StudPro 6.0",

				website: "https://www.google.com",
			},
			{
				name: "Sysco LABS",
				logo: "/images/partners/sysco.png",
				years: 3,
				partnerLevel: "Gold",
				studProVersion: "StudPro 6.0",

				website: "https://www.syscolabs.com",
			},
			{
				name: "hSenid",
				logo: "/images/partners/hsenid.png",
				years: 2,
				partnerLevel: "Gold",
				studProVersion: "StudPro 6.0",

				website: "https://www.hsenid.com",
			},
			{
				name: "Arimac",
				logo: "/images/partners/arimac.png",
				years: 1,
				partnerLevel: "Silver",
				studProVersion: "StudPro 6.0",

				website: "https://www.arimac.digital",
			},
			{
				name: "SLASSCOM",
				logo: "/images/partners/slasscom.png",
				years: 3,
				partnerLevel: "Silver",
				studProVersion: "StudPro 6.0",

				website: "https://www.slasscom.lk",
			},
			{
				name: "Oracle",
				logo: "/images/partners/oracle.png",
				years: 1,
				partnerLevel: "Platinum",
				studProVersion: "StudPro 6.0",

				website: "https://www.oracle.com",
			},
			{
				name: "Mitra Innovation",
				logo: "/images/partners/mitra.png",
				years: 2,
				partnerLevel: "Gold",
				studProVersion: "StudPro 6.0",

				website: "https://www.mitrai.com",
			},
			{
				name: "Red Hat",
				logo: "/images/partners/redhat.png",
				years: 1,
				partnerLevel: "Gold",
				studProVersion: "StudPro 6.0",

				website: "https://www.redhat.com",
			},
			{
				name: "AWS",
				logo: "/images/partners/aws.png",
				years: 2,
				partnerLevel: "Platinum",
				studProVersion: "StudPro 6.0",

				website: "https://aws.amazon.com",
			},
			{
				name: "Cake Labs",
				logo: "/images/partners/cakelabs.png",
				years: 1,
				partnerLevel: "Silver",
				studProVersion: "StudPro 6.0",

				website: "https://www.cakelabs.com",
			},
		],
	},
	{
		year: 2024,
		version: "StudPro 7.0",
		partners: [
			{
				name: "NCINGA",
				logo: "/images/partners/ncinga.png",
				years: 2,
				partnerLevel: "Gold",
				studProVersion: "StudPro 7.0",

				website: "https://www.ncinga.com",
			},
			{
				name: "Cambio Software Engineering",
				logo: "/images/partners/cambio.png",
				years: 1,
				partnerLevel: "Platinum",
				studProVersion: "StudPro 7.0",

				website: "https://www.cambio.se",
			},
			{
				name: "Salesforce",
				logo: "/images/partners/salesforce.png",
				years: 2,
				partnerLevel: "Platinum",
				studProVersion: "StudPro 7.0",

				website: "https://www.salesforce.com",
			},
			{
				name: "Zone24x7",
				logo: "/images/partners/zone24x7.png",
				years: 3,
				partnerLevel: "Gold",
				studProVersion: "StudPro 7.0",

				website: "https://www.zone24x7.com",
			},
			{
				name: "CodeGen",
				logo: "/images/partners/codegen.png",
				years: 2,
				partnerLevel: "Gold",
				studProVersion: "StudPro 7.0",

				website: "https://www.codegen.co.uk",
			},
			{
				name: "Fortude",
				logo: "/images/partners/fortude.png",
				years: 1,
				partnerLevel: "Silver",
				studProVersion: "StudPro 7.0",

				website: "https://www.fortude.co",
			},
			{
				name: "NVIDIA",
				logo: "/images/partners/nvidia.png",
				years: 1,
				partnerLevel: "Platinum",
				studProVersion: "StudPro 7.0",

				website: "https://www.nvidia.com",
			},
			{
				name: "Calcey",
				logo: "/images/partners/calcey.png",
				years: 2,
				partnerLevel: "Silver",
				studProVersion: "StudPro 7.0",

				website: "https://www.calcey.com",
			},
			{
				name: "OrangeHRM",
				logo: "/images/partners/orangehrm.png",
				years: 1,
				partnerLevel: "Gold",
				studProVersion: "StudPro 7.0",

				website: "https://www.orangehrm.com",
			},
			{
				name: "Exilesoft",
				logo: "/images/partners/exilesoft.png",
				years: 1,
				partnerLevel: "Silver",
				studProVersion: "StudPro 7.0",

				website: "https://www.exilesoft.com",
			},
			{
				name: "DELL EMC",
				logo: "/images/partners/dell-emc.png",
				years: 2,
				partnerLevel: "Gold",
				studProVersion: "StudPro 7.0",

				website: "https://www.delltechnologies.com",
			},
			{
				name: "Rootcode Labs",
				logo: "/images/partners/rootcode.png",
				years: 1,
				partnerLevel: "Silver",
				studProVersion: "StudPro 7.0",

				website: "https://www.rootcodelabs.com",
			},
		],
	},
	{
		year: 2025,
		version: "StudPro 8.0",
		partners: [
			{
				name: "LSEG Sri Lanka",
				logo: "/images/partners/lseg.png",
				years: 4,
				partnerLevel: "Silver",
				studProVersion: "StudPro 8.0",

				website: "https://www.lseg.com",
			},
			{
				name: "Rizing Lanka",
				logo: "/images/partners/rizing.png",
				years: 1,
				partnerLevel: "Bronze",
				studProVersion: "StudPro 8.0",

				website: "https://www.rizing.com",
			},
			{
				name: "Meta",
				logo: "/images/partners/meta.png",
				years: 1,
				partnerLevel: "Platinum",
				studProVersion: "StudPro 8.0",

				website: "https://www.meta.com",
			},
			{
				name: "Intel",
				logo: "/images/partners/intel.png",
				years: 2,
				partnerLevel: "Platinum",
				studProVersion: "StudPro 8.0",

				website: "https://www.intel.com",
			},
			{
				name: "Palo IT",
				logo: "/images/partners/paloit.png",
				years: 1,
				partnerLevel: "Gold",
				studProVersion: "StudPro 8.0",

				website: "https://www.palo-it.com",
			},
			{
				name: "IronOne Technologies",
				logo: "/images/partners/ironone.png",
				years: 1,
				partnerLevel: "Gold",
				studProVersion: "StudPro 8.0",

				website: "https://www.irononetech.com",
			},
			{
				name: "Insighture",
				logo: "/images/partners/insighture.png",
				years: 1,
				studProVersion: "StudPro 8.0",

				website: "https://www.insighture.com",
			},
			{
				name: "Capital Maharaja Group",
				logo: "/images/partners/maharaja.png",
				years: 1,
				partnerLevel: "Gold",
				studProVersion: "StudPro 8.0",

				website: "https://www.capitalmaharaja.com",
			},
			{
				name: "SimCentric",
				logo: "/images/partners/simcentric.png",
				years: 2,
				partnerLevel: "Bronze",
				studProVersion: "StudPro 8.0",

				website: "https://www.simct.com",
			},
			{
				name: "Twilio",
				logo: "/images/partners/twilio.png",
				years: 1,
				partnerLevel: "Gold",
				studProVersion: "StudPro 8.0",

				website: "https://www.twilio.com",
			},
			{
				name: "CrowdStrike",
				logo: "/images/partners/crowdstrike.png",
				years: 1,
				studProVersion: "StudPro 8.0",

				website: "https://www.crowdstrike.com",
			},
			{
				name: "CISCO",
				logo: "/images/partners/cisco.png",
				years: 2,
				partnerLevel: "Platinum",
				studProVersion: "StudPro 8.0",

				website: "https://www.cisco.com",
			},
			{
				name: "AMD",
				logo: "/images/partners/amd.png",
				years: 1,
				partnerLevel: "Bronze",
				studProVersion: "StudPro 8.0",

				website: "https://www.amd.com",
			},
			{
				name: "Local University Consortium",
				logo: "/images/partners/university.png",
				years: 1,
				studProVersion: "StudPro 8.0",

				website: "https://www.university-consortium.edu",
			},
		],
	},
];
