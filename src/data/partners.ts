// data file

export interface Partner {
    name: string;
    logo?: string;
    partnerLevel?: string;
    website?: string; // Optional website URL
}

// Groups by year
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
                partnerLevel: "Platinum",
            },
            {
                name: "Azend Technologies",
                partnerLevel: "Platinum",
                logo: "azend.png"
            },
            {
                name: "Axiata Digital Labs",
                partnerLevel: "Platinum",
            },
            {
                name: "Cambio Software Engineering",
                partnerLevel: "Platinum",
            },
            {
                name: "DirectFN",
                partnerLevel: "Gold",
                logo: "directfn.webp"
            },
            {
                name: "NCINGA",
                partnerLevel: "Gold",
                logo: "ncinga.jpg"
            },
            {
                name: "LSEG Sri Lanka",
                partnerLevel: "Silver",
                logo: "lseg.svg"
            },
            {
                name: "Rizing Lanka",
                partnerLevel: "Silver"
            },
            {
                name: "Fortude",
                partnerLevel: "Bronze",
                logo: "fortude.webp"
            },
            {
                name: ":Different Technologies",
                partnerLevel: "Bronze",
                logo: "different.svg"
            },
            {
                name: "SLT Mobitel"
            },
            {
                name: "Enactor",
                logo: "enactor.jpg"
            },
            {
                name: "huex"
            },
            {
                name: "Expernetic",
                logo: "expernetic.jpeg"
            },
            {
                name: "IQZ Systems",
            },
            {
                name: "ChampSoft",

            },
            {
                name: "Data Capture Experts",
                logo: "dce.webp"
            },

        ]
    },
    {
        year: 2023,
        version: "StudPro 6.0",
        partners: [
			{
				name: "Dialog Axiata",
			},
            {
                name: "huex"
            },
            {
                name: "Global Market Technologies",
            },
            {
                name: "Syntax Genie",
            },
            {
                name: "FutureLabs",
            },
            {
                name: "Eyepax IT Consulting",
				logo: "eyepax.jpeg"
            },
            {
                name: "Nagarro",
                partnerLevel: "Bronze"
            },
            {
                name: "Rootcode Labs",
                partnerLevel: "Bronze",
                logo: "rootcode.jpg"
            },
            {
                name: "Hayleys",
            },
            {
                name: "99x",
                partnerLevel: "Gold"
            },
            {
                name: ":Different Technologies",
                partnerLevel: "Gold",
                logo: "different.svg"
            },
            {
                name: "VeroxLabs",
            },
            {
                name: "CICT",
            },
            {
                name: "Resource Management Associates",
                partnerLevel: "Bronze",
                logo: "rma.png"
            },
            {
                name: "Brandix Lanka",
            },
            {
                name: "Azend Technologies",
                logo: "azend.png"
            },
            {
                name: "SAGT Sri Lanka",
                partnerLevel: "Bronze",
            },
            {
                name: "PayMedia",
            },
            {
                name: "IFS Sri Lanka",
                partnerLevel: "Gold",
                logo: "ifs.jpeg"
            },
            {
                name: "Persistent Systems",
            },
            {
                name: "Effective Solutions",
                partnerLevel: "Bronze"
            },
            {
                name: "Amithi Power Consultants",
                logo: "apcl.jpeg"
            },
            {
                name: "Elephant House",
                logo: "elephant_house.webp"
            },
            {
                name: "John Keells IT",
            },
            {
                name: "MyBudget Holdings",
                logo: "mybudget.webp"
            },
            {
                name: "EvonSys",
                partnerLevel: "Bronze"
            },
            {
                name: "Mitra Innovation",
                partnerLevel: "Gold",
            },
            {
                name: "Pearson Lanka",
                partnerLevel: "Gold",
            },
            {
                name:"LSEG Sri Lanka",
                logo: "lseg.svg"
            },
            {
                name: "SimCentric Technologies",
                partnerLevel: "Bronze",
                logo: "sim_centric.jpg"
            },
            {
                name: "SIXER Video",
                partnerLevel: "Bronze",
                logo: "sixer_video.avif"
            },
            {
                name: "Virtusa",
            },
            {
                name:"Creative Software",
            },
            {
                name: "SLT Mobitel",
            }

        ]
    },
    {
        year: 2024,
        version: "StudPro 7.0",
        partners: [
            {
                name: "IFS Sri Lanka",
                partnerLevel: "Industry",
                logo: "ifs.jpeg"
            },
            {
                name: "Dialog Axiata",
                partnerLevel: "Industry",
            },
            {
                name: "SLT Mobitel",
                partnerLevel: "Industry",
            },
            {
                name: "Virtusa",
                partnerLevel: "Industry",
            },
            {
                name: "Calcey",
                partnerLevel: "Industry",
                logo: "calcey.webp"
            },
            {
                name: "Zone 24x7",
                partnerLevel: "Industry",
                logo: "zone_24x7.webp"
            },
            {
                name: "Codegen",
                partnerLevel: "Industry",
            },
            {
                name: "Ladyproto 1.0: WIE affinity group - UoV",
                partnerLevel: "Ecosystem",
                logo: "ladyproto.png"
            },
            {
                name: "UOR Career Fair",
                partnerLevel: "Ecosystem",
                logo: "uor_career_fair.png"
            }
        ]
    },
    {
        year: 2025,
        version: "StudPro 8.0",
        partners: [
            // Visits
            {
                name: "Cambio Software Engineering",
                partnerLevel: "Industry",
            },
            {
                name: "Altrium",
                partnerLevel: "Industry",
            },
            {
                name: "IFS Sri Lanka",
                partnerLevel: "Industry",
                logo: "ifs.jpeg"
            },
            {
                name: "RootCode Labs",
                partnerLevel: "Industry",
                logo: "rootcode.jpg"
            },
            {
                name: "Acentura",
                partnerLevel: "Industry",
                logo: "acentura.jpg"
            },
            {
                name: "WSO2",
                partnerLevel: "Industry",
            },
            //Edu week
            {
                name: "VSIS",
                partnerLevel: "Industry",
                logo: "vsis.jpg"
            },
            {
                name: "Nagarro",
                partnerLevel: "Industry",
            },
            {
                name: "Virtusa",
                partnerLevel: "Industry",
            },
            {
                name: "Idea8",
                partnerLevel: "Industry",
            },
            {
                name: "Inivos",
                partnerLevel: "Industry",
                logo: "inivos.jpg"
            }
        ]
    },
];

export function calculatePartnerYears(partner: Partner): number {
    // Count the number of year groups a partner occurs in
    return partners.filter(yearGroup =>
        yearGroup.partners.some(p => p.name === partner.name)
    ).length;
}
