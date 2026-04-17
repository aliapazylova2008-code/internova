// ============================================
// INTERNOVA - Internship Database for Kyrgyzstan
// ============================================
// EDIT ONLY THIS FILE to add or remove internships
// Each internship is one object inside the array

const internshipsData = [
    {
        id: 1,
        title: "Communications & Social Media Intern",
        company: "GGGI Kyrgyzstan",
        category: ["Communications", "NGO"],
        location: "Bishkek",
        type: "on-site",
        paid: "paid",
        deadline: "May 4, 2026",
        description: "Manage LinkedIn/Twitter/Instagram, produce content, support internal communications for intergovernmental body (mini-UN).",
        applyLink: "https://careers.gggi.org",
        tags: "communications social media un"
    },
    {
        id: 2,
        title: "Local Intern / Politico-Military Intern",
        company: "OSCE Bishkek",
        category: ["NGO", "Communications"],
        location: "Bishkek",
        type: "on-site",
        paid: "unpaid",
        deadline: "Rolling (new calls open)",
        description: "Elections, rule of law, human rights — work directly with the OSCE Programme Office.",
        applyLink: "https://vacancies.osce.org",
        tags: "osce political human rights"
    },
    {
        id: 3,
        title: "Foreign National Student Intern Program",
        company: "U.S. Embassy Bishkek",
        category: ["NGO"],
        location: "Bishkek",
        type: "on-site",
        paid: "unpaid",
        deadline: "Summer 2026 (apply early)",
        description: "Intern placements across Embassy departments. Must be KR citizen, enrolled student.",
        applyLink: "https://kg.usembassy.gov",
        tags: "embassy diplomacy us"
    },
    {
        id: 4,
        title: "InternLabs – Backend / QA / Mobile / Cybersecurity",
        company: "O! Telecom",
        category: ["IT"],
        location: "Bishkek",
        type: "on-site",
        paid: "unpaid",
        deadline: "2026 intakes rolling",
        description: "Real projects with O! engineers — Java, QA automation, Android/iOS, cybersecurity. Top grads get job offers.",
        applyLink: "https://internlabs.o.kg",
        tags: "java mobile devops cybersecurity"
    },
    {
        id: 5,
        title: "Paid Student Internship (Finance/Marketing/IT)",
        company: "Beeline Kyrgyzstan",
        category: ["IT", "Communications"],
        location: "Bishkek",
        type: "on-site",
        paid: "paid",
        deadline: "Ongoing",
        description: "Minimum 3 months, paid stipend, mobile costs covered, path to full-time.",
        applyLink: "https://beeline.kg/ru/stajirovka",
        tags: "beeline finance marketing telecom"
    },
    {
        id: 6,
        title: "Remote Intern (HR/Web/WordPress/Design)",
        company: "GAO Tek Kyrgyzstan",
        category: ["IT", "Communications"],
        location: "Remote",
        type: "remote",
        paid: "unpaid",
        deadline: "Always open",
        description: "Remote, certificate provided. Great for CV building. Fully flexible.",
        applyLink: "https://kg.gaotek.com/careers",
        tags: "remote design wordpress hr"
    },
    {
        id: 7,
        title: "UNDP Internship (Climate/Comms/Innovation)",
        company: "UNDP Kyrgyzstan",
        category: ["NGO"],
        location: "Bishkek",
        type: "on-site",
        paid: "unpaid",
        deadline: "Recurring",
        description: "Work with UN Development Programme on climate, digital, or policy projects.",
        applyLink: "https://jobs.undp.org",
        tags: "undp climate un innovation"
    },
    {
        id: 8,
        title: "UNICEF Programme & Communications Intern",
        company: "UNICEF Kyrgyzstan",
        category: ["NGO", "Communications"],
        location: "Bishkek",
        type: "on-site",
        paid: "unpaid",
        deadline: "Rolling",
        description: "Programme & Policy, Digital Comms, Nutrition, Education.",
        applyLink: "https://www.unicef.org/kyrgyzstan/internships",
        tags: "unicef child rights education"
    },
    {
        id: 9,
        title: "Youth Internship – State Stipend",
        company: "Ministry of Labor Kyrgyzstan",
        category: ["NGO"],
        location: "30 cities",
        type: "on-site",
        paid: "paid",
        deadline: "Open",
        description: "8,600 KGS monthly stipend. Ages 16–35. State-sponsored internship in private/state sectors.",
        applyLink: "https://mlsp.gov.kg",
        tags: "youth government stipend"
    },
    {
        id: 10,
        title: "Student Practice / Internship",
        company: "Optima Bank",
        category: ["IT", "Communications"],
        location: "Karakol / Kyzyl-Suu",
        type: "on-site",
        paid: "paid",
        deadline: "Open",
        description: "3rd–5th year students or graduates. Banking operations, customer service, finance.",
        applyLink: "mailto:s.zhekshenov@optimabank.kg",
        tags: "bank finance optima"
    },
    {
        id: 11,
        title: "Digital Internship Program",
        company: "MBANK",
        category: ["IT", "Communications"],
        location: "Bishkek",
        type: "on-site",
        paid: "paid",
        deadline: "Always accepting",
        description: "First digital bank in Kyrgyzstan. Great for IT, product, marketing students.",
        applyLink: "mailto:cv@mbank.kg",
        tags: "digital bank it product"
    },
    {
        id: 12,
        title: "World Bank Group Pioneers Internship",
        company: "World Bank",
        category: ["NGO", "Communications"],
        location: "Bishkek/Remote",
        type: "remote",
        paid: "paid",
        deadline: "July–Aug 2026",
        description: "Competitive hourly salary. Undergrad/postgrad tracks.",
        applyLink: "https://www.worldbank.org/en/country/kyrgyzrepublic",
        tags: "world bank finance economics"
    },
    {
        id: 13,
        title: "Audit Intern / Assistant",
        company: "Baker Tilly / EY Kyrgyzstan",
        category: ["Communications"],
        location: "Bishkek",
        type: "on-site",
        paid: "paid",
        deadline: "Rolling",
        description: "Audit, tax, consulting internships. Top audit firms in KG.",
        applyLink: "https://www.bakertilly.kg",
        tags: "audit finance accounting"
    },
    {
        id: 14,
        title: "Mobile App Development (iOS/Android)",
        company: "O! InternLabs",
        category: ["IT"],
        location: "Bishkek",
        type: "on-site",
        paid: "unpaid",
        deadline: "2026 cycles",
        description: "6-month mobile dev internship. Mentors from O! engineering team.",
        applyLink: "https://o.kg/internlabs/",
        tags: "swift kotlin android ios"
    },
    {
        id: 15,
        title: "Communications Intern – Red Crescent",
        company: "Red Crescent Society KG",
        category: ["NGO", "Communications"],
        location: "Bishkek",
        type: "on-site",
        paid: "unpaid",
        deadline: "Open",
        description: "Support humanitarian communications, social media campaigns, event coordination.",
        applyLink: "https://redcrescent.kg",
        tags: "humanitarian ngo pr"
    }
];

// Auto-assign new IDs if you add more
let nextId = internshipsData.length + 1;
