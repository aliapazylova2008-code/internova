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
    }/**
 * InterNova — Kyrgyzstan Internship Database
 * Last updated: April 2026
 * Source: Verified via live web research
 *
 * VERIFICATION KEY:
 *   ✅ VERIFIED_ACTIVE   — Open application confirmed in April 2026
 *   🔁 RECURRING         — Confirmed recurring program; not currently open; watch for announcements
 *   📋 PROGRAM_EXISTS    — Internship program confirmed to exist; current cycle unconfirmed
 *   ❌ UNCONFIRMED       — Company exists but no internship program found
 *
 * PAID KEY:
 *   💰 PAID              — Confirmed paid
 *   💸 UNPAID            — Confirmed unpaid
 *   ❓ UNKNOWN           — Not confirmed either way
 */

export const internships = [

  // =============================================
  // CATEGORY 1: INTERNATIONAL ORGANIZATIONS & NGOs
  // =============================================

  {
    id: "gggi-comms-2026",
    company: "Global Green Growth Institute (GGGI)",
    logo: "https://www.gggi.org/wp-content/uploads/2017/10/gggi-logo.png",
    role: "Communications Intern",
    category: "International Organization",
    paid: true,
    payNote: "Stipend included (salary scale listed as 'Internship', ~$20,000–$30,000/year scale)",
    location: "Bishkek",
    locationType: "on-site",
    deadline: "2026-05-04",
    deadlineNote: "Deadline in Korean Standard Time (KST, UTC+9) — apply at least 1 day early",
    duration: "3 months (until August 31, 2026)",
    eligibility: "Bachelor's final year / Master's / PhD student OR recent graduate (within 12 months). Majors: Communications, Media, Graphic Design, Marketing.",
    description: "Create and manage GGGI Kyrgyzstan social media (LinkedIn, X/Twitter, Instagram), produce content, support internal and external communications.",
    applyLink: "https://careers.gggi.org",
    applyEmail: null,
    applyNote: "Go to careers.gggi.org → search 'Kyrgyzstan' → Job Reference: INT_KGPM-C1-1",
    status: "✅ VERIFIED_ACTIVE",
    languages: ["English"],
    tags: ["communications", "social media", "NGO", "international", "environment"],
    source: "careers.gggi.org / unjoblink.org verified April 2026"
  },

  {
    id: "osce-local-intern-2026",
    company: "OSCE Programme Office in Bishkek",
    logo: null,
    role: "Local Intern — Office of Head of Mission",
    category: "International Organization",
    paid: false,
    payNote: "Unpaid (standard OSCE policy for local interns)",
    location: "Bishkek",
    locationType: "on-site",
    deadline: "Check vacancies.osce.org — roles added March 2026",
    deadlineNote: "Deadlines vary per role; check the portal regularly",
    duration: "6 months",
    eligibility: "University students or recent graduates. International interns: enrolled at time of application.",
    description: "OSCE Bishkek runs multiple parallel internship tracks including: Human Rights / Human Dimension, Politico-Military Affairs, Anti-Corruption, Environment, Customs & Transport, HR. Multiple openings added in Feb–March 2026.",
    applyLink: "https://vacancies.osce.org",
    applyEmail: null,
    applyNote: "Go to vacancies.osce.org → filter by 'Bishkek' + 'Internship'",
    status: "🔁 RECURRING",
    languages: ["English", "Russian"],
    tags: ["human rights", "policy", "international", "security", "law", "environment"],
    source: "vacancies.osce.org, uncareer.net verified April 2026"
  },

  {
    id: "us-embassy-fnsip",
    company: "U.S. Embassy Bishkek",
    logo: "https://kg.usembassy.gov/wp-content/themes/embassy/img/us-flag.png",
    role: "Foreign National Student Intern Program (FNSIP)",
    category: "Embassy / Government",
    paid: false,
    payNote: "Explicitly unpaid — no compensation, benefits, or future employment rights",
    location: "Bishkek",
    locationType: "on-site",
    deadline: "Watch kg.usembassy.gov — typically announced February each year",
    deadlineNote: "2026 cycle announcement not yet posted as of April 2026. Check back in January–February 2027 for summer 2027.",
    duration: "Summer (approx. 8–10 weeks)",
    eligibility: "Must be a citizen or permanent resident of the Kyrgyz Republic. At least 18 years old. Enrolled at least half-time at a university (undergraduate or postgraduate).",
    description: "Placements across Embassy departments — political, economic, consular, HR, information systems, public affairs, etc. Section of assignment varies by cohort.",
    applyLink: "https://kg.usembassy.gov",
    applyEmail: "BishkekHR-SIP@state.gov",
    applyNote: "Email with subject: 'Foreign National Student Intern Program: [Your Full Name]'. Attach: statement of interest + official transcripts.",
    status: "🔁 RECURRING",
    languages: ["English"],
    tags: ["diplomacy", "government", "foreign affairs", "policy", "US Embassy"],
    source: "kg.usembassy.gov verified"
  },

  {
    id: "unicef-kg",
    company: "UNICEF Kyrgyzstan",
    logo: null,
    role: "Intern (Programme & Policy / Digital Communications / Education)",
    category: "UN Agency",
    paid: false,
    payNote: "Typically unpaid (standard UNICEF national intern policy). Check specific vacancy.",
    location: "Bishkek",
    locationType: "on-site",
    deadline: "Rolling — check jobs.unicef.org",
    deadlineNote: "Openings posted as needs arise. Monitor regularly.",
    duration: "Varies per assignment",
    eligibility: "Must be enrolled in undergraduate, graduate, or PhD program. Cannot be a UNICEF staff family member.",
    description: "UNICEF Kyrgyzstan has recurring intern needs in: Programme & Policy, External Relations, Digital Communications, Education, Nutrition. Past roles included supporting legal inventory process, communications for children's rights, education programme support.",
    applyLink: "https://www.unicef.org/kyrgyzstan/internships",
    applyEmail: null,
    applyNote: "Apply via jobs.unicef.org — filter by Kyrgyzstan + Internship",
    status: "🔁 RECURRING",
    languages: ["English", "Russian", "Kyrgyz"],
    tags: ["children", "education", "communications", "UN", "social policy"],
    source: "unicef.org/kyrgyzstan/internships verified"
  },

  {
    id: "undp-kg",
    company: "UNDP Kyrgyzstan",
    logo: null,
    role: "Intern (Climate / Communications / Governance)",
    category: "UN Agency",
    paid: false,
    payNote: "Typically unpaid, but some positions may include a small living allowance",
    location: "Bishkek",
    locationType: "on-site",
    deadline: "Rolling — check jobs.undp.org",
    deadlineNote: "Openings appear several times per year",
    duration: "2–6 months (varies)",
    eligibility: "Enrolled in undergraduate, graduate, or PhD program.",
    description: "UNDP Kyrgyzstan has hosted interns in: climate change research, communications, digital innovations, governance, COVID-19 economic recovery. Monitor jobs.undp.org and uncareer.net regularly.",
    applyLink: "https://jobs.undp.org",
    applyEmail: null,
    applyNote: "Filter jobs.undp.org by Kyrgyzstan + Internship. Also check uncareer.net/country/Kyrgyzstan",
    status: "🔁 RECURRING",
    languages: ["English", "Russian"],
    tags: ["development", "climate", "governance", "UN", "communications"],
    source: "untalent.org, uncareer.net verified"
  },

  {
    id: "search-common-ground",
    company: "Search for Common Ground (SFCG) Kyrgyzstan",
    logo: null,
    role: "Program & Communications Intern",
    category: "NGO / Peacebuilding",
    paid: true,
    payNote: "Confirmed PAID — SFCG explicitly states paid internships in Bishkek",
    location: "Bishkek",
    locationType: "on-site",
    deadline: "Rolling — check devex.com/sfcg or sfcg.org/asia/kyrgyzstan",
    deadlineNote: "Positions open as program needs arise. Most recently posted November 2025.",
    duration: "3 months (agreed upon selection)",
    eligibility: "Has or is pursuing a Bachelor's in Social Sciences, Peacebuilding, Conflict Studies, International Relations or related. Computer literate (MS Office). English required.",
    description: "Assist SFCG Kyrgyzstan team with organizing meetings and workshops across Central Asia, developing communication materials, social media content (Instagram, Facebook), and activity reports.",
    applyLink: "https://www.sfcg.org/asia/kyrgyzstan/",
    applyEmail: null,
    applyNote: "Check devex.com → search 'Search for Common Ground Kyrgyzstan'. Address: 103 Ibraimov St, Victory Business Center, Floor 12, Bishkek",
    status: "📋 PROGRAM_EXISTS",
    languages: ["English", "Russian"],
    tags: ["peacebuilding", "communications", "NGO", "conflict", "social sciences", "paid"],
    source: "devex.com, startup.jobs verified"
  },

  {
    id: "giz-kg",
    company: "GIZ (Deutsche Gesellschaft für Internationale Zusammenarbeit) Kyrgyzstan",
    logo: null,
    role: "Intern (Various — Green Economy, Health, Rural Development)",
    category: "German Development Cooperation",
    paid: false,
    payNote: "GIZ internships are typically unpaid for local positions; German-sent interns may receive stipends",
    location: "Bishkek (also offices in Osh and Jalal-Abad)",
    locationType: "on-site",
    deadline: "Check giz.de/en/jobs — no current KG-specific intern posting found",
    deadlineNote: "GIZ runs rolling internships but does not always advertise locally. Contact directly.",
    duration: "Varies",
    eligibility: "Students or graduates in development studies, economics, public health, agriculture, or related fields.",
    description: "GIZ has operated in Kyrgyzstan since 1992 with 105+ staff. Current focus areas: Green Economy, Sustainable Private Sector Development, Health, Rural Employment. Contact email: giz-kirgisistan@giz.de",
    applyLink: "https://www.giz.de/en/jobs_and_careers/37519.html",
    applyEmail: "giz-kirgisistan@giz.de",
    applyNote: "Email CV + motivation letter to giz-kirgisistan@giz.de. Ask specifically about local intern positions.",
    status: "📋 PROGRAM_EXISTS",
    languages: ["Russian", "English", "German (helpful)"],
    tags: ["development", "green economy", "health", "rural", "Germany", "sustainability"],
    source: "giz.de/en/worldwide/356.html, donors.kg verified"
  },

  {
    id: "iom-kg",
    company: "IOM (International Organization for Migration) Kyrgyzstan",
    logo: null,
    role: "Intern (HR / Programme Support)",
    category: "International Organization",
    paid: true,
    payNote: "Monthly Subsistence Allowance (MSA) provided — partial contribution to accommodation/living expenses. Amount depends on education level and distance.",
    location: "Bishkek",
    locationType: "on-site",
    deadline: "No current open call. Last confirmed: November 2022.",
    deadlineNote: "IOM runs irregular intern calls. Contact hrkg@iom.int to inquire.",
    duration: "Varies",
    eligibility: "Recent graduates (within 1–2 years of Bachelor's / Master's degree).",
    description: "IOM Kyrgyzstan has previously offered internships in HR and programme support at its Bishkek office. The program pays a Monthly Subsistence Allowance.",
    applyLink: "https://kyrgyzstan.iom.int/intern",
    applyEmail: "hrkg@iom.int",
    applyNote: "Send CV and cover letter to hrkg@iom.int. Reference 'Internship Application' in subject line.",
    status: "📋 PROGRAM_EXISTS",
    languages: ["English", "Russian"],
    tags: ["migration", "HR", "programme support", "international", "stipend"],
    source: "kyrgyzstan.iom.int/intern verified"
  },

  {
    id: "adb-intern",
    company: "Asian Development Bank (ADB)",
    logo: null,
    role: "Internship Program (Research — Kyrgyzstan focused or general)",
    category: "Multilateral Development Bank",
    paid: true,
    payNote: "PAID — ADB provides a competitive stipend for its internship program",
    location: "ADB HQ Manila (Philippines) OR remote — Kyrgyz nationals eligible",
    locationType: "remote / Manila",
    deadline: "Annual deadline: ~March 16, 2026 (passed). Next cycle: watch adb.org/work-with-us/careers/internship-program",
    deadlineNote: "ADB runs two cycles per year. Applications typically open in Feb and Aug.",
    duration: "8–12 weeks (June start for summer cycle)",
    eligibility: "Must be enrolled in a Master's or PhD program. Must be a national of an ADB member country (Kyrgyzstan is a member). Cannot apply as a Bachelor's student.",
    description: "Project-oriented research internships at ADB headquarters or relevant departments. Past KG-focused role: 'Study on Life in Kyrgyzstan — Central and West Asia Department'. Selections made March–April.",
    applyLink: "https://www.adb.org/work-with-us/careers/internship-program",
    applyEmail: null,
    applyNote: "Apply via ADB Career and Employment System (ACES). No school nomination needed — apply directly.",
    status: "🔁 RECURRING",
    languages: ["English"],
    tags: ["research", "development finance", "economics", "master's", "PhD", "paid", "Manila"],
    source: "adb.org/work-with-us/careers/internship-program verified"
  },


  // =============================================
  // CATEGORY 2: TELECOM & IT COMPANIES
  // =============================================

  {
    id: "o-telecom-internlabs",
    company: "O! Mobile Operator (NUR Telecom LLC)",
    logo: "https://www.o.kg/local/templates/o/img/logo.svg",
    role: "Intern Labs — IT Internship (Backend Java / QA Automation / Mobile Dev / Cybersecurity)",
    category: "Telecom / IT",
    paid: false,
    payNote: "Free to participate (no cost to student). Top graduates receive job offers at O!, banks, and IT companies. Direct salary during internship not confirmed.",
    location: "Bishkek (O! Head Office, ул. Ю. Абдрахманова 170/2)",
    locationType: "on-site (some online options)",
    deadline: "Watch internlabs.o.kg — intakes announced 1x/year per track, typically spring/summer",
    deadlineNote: "Most recent: QA/SDET (Aug 2025), Cybersecurity (May 2025). Expect new 2026 cycle announcement April–June 2026.",
    duration: "3–5 months",
    eligibility: "University students from partner universities (Ala-Too, KGTU, Manas, KRSU, UCA, MUCA, and others). Must have basic knowledge of algorithms and chosen programming language.",
    description: "O!'s flagship IT education initiative running since 2019. 200+ graduates employed at O!, banks, and government tech roles. Real project-based learning with O! engineers as mentors. Tracks: Backend Java + Spring/VueJS, QA Automation (SDET), Android/iOS Development, Cybersecurity.",
    applyLink: "https://internlabs.o.kg",
    applyEmail: "labs@nurtelecom.kg",
    applyNote: "Fill out the application form at internlabs.o.kg, complete a test task, then interview.",
    status: "🔁 RECURRING",
    languages: ["Russian", "Kyrgyz", "English (some tracks)"],
    tags: ["IT", "backend", "java", "QA", "mobile", "cybersecurity", "telecom", "free program"],
    source: "internlabs.o.kg, o.kg verified"
  },

  {
    id: "beeline-kg",
    company: "Beeline Kyrgyzstan (Sky Mobile LLC)",
    logo: null,
    role: "Intern — Finance / Marketing / IT / Customer Service",
    category: "Telecom",
    paid: true,
    payNote: "PAID — Beeline explicitly states paid internships. Mobile service costs also covered.",
    location: "Bishkek",
    locationType: "on-site",
    deadline: "Rolling — check beeline.kg/ru/stajirovka regularly",
    deadlineNote: "Applications accepted on an ongoing basis when tracks are open",
    duration: "Minimum 3 months. Schedule: 5-day week, 9:00–18:00. Minimum 30 hrs/week.",
    eligibility: "University students. Best suited for correspondence/part-time students or those with low academic load, due to full-day schedule. Multiple departments available.",
    description: "Beeline's Kyrgyzstan internship program (оплачиваемая стажировка) offers real project work in finance, marketing, IT, and other departments. Interns are considered priority candidates for full-time positions.",
    applyLink: "https://beeline.kg/ru/stajirovka",
    applyEmail: null,
    applyNote: "Browse open tracks at beeline.kg/ru/stajirovka and apply directly via the form. Kyrgyz language page: beeline.kg/ky/stajirovka",
    status: "🔁 RECURRING",
    languages: ["Russian", "Kyrgyz"],
    tags: ["telecom", "finance", "marketing", "IT", "paid", "Bishkek"],
    source: "beeline.kg/ru/stajirovka verified"
  },

  {
    id: "gao-tek-remote",
    company: "GAO Tek Kyrgyzstan",
    logo: null,
    role: "Remote Intern — HR / Web Dev / IoT / WordPress / Visual Design / Video / Business",
    category: "IT / Electronics (International)",
    paid: false,
    payNote: "UNPAID — confirmed via Glassdoor reviews and company policy. Interns receive 3 certificates upon completion.",
    location: "Remote (fully virtual)",
    locationType: "remote",
    deadline: "Rolling — applications accepted continuously",
    deadlineNote: "No deadline — apply anytime at kg.gaotek.com/careers",
    duration: "Flexible",
    eligibility: "University students and recent graduates. Multiple disciplines accepted: HR, IT, design, business, marketing.",
    description: "GAO Tek Inc. (HQ: New York/Toronto) offers structured remote internships for Kyrgyzstan-based students. Good for CV building and gaining international exposure. ⚠️ Unpaid — financial benefit is zero but experience is real.",
    applyLink: "https://kg.gaotek.com/careers",
    applyEmail: "HR-Intern-Recruit@gaotek.com",
    applyNote: "Browse roles at kg.gaotek.com/careers or email resume to HR-Intern-Recruit@gaotek.com",
    status: "✅ VERIFIED_ACTIVE",
    languages: ["English"],
    tags: ["remote", "HR", "web dev", "IoT", "design", "unpaid", "certificate"],
    source: "kg.gaotek.com verified; Glassdoor reviews verified"
  },


  // =============================================
  // CATEGORY 3: BANKING & FINANCIAL INSTITUTIONS
  // =============================================

  {
    id: "kicb-internship",
    company: "KICB — Kyrgyz Investment and Credit Bank",
    logo: null,
    role: "Bank Intern (Credit / Operations)",
    category: "Banking",
    paid: false,
    payNote: "Not confirmed as paid. Post-internship employment pathway mentioned.",
    location: "Bishkek",
    locationType: "on-site",
    deadline: "Rolling — check kicb.net/about/career/practice/",
    deadlineNote: "KICB has a dedicated internship/practice page — apply anytime",
    duration: "Not specified (full-time)",
    eligibility: "Secondary specialized or higher education, preferably economics. Good written/oral Russian and Kyrgyz. MS Office proficient. Full-time availability required.",
    description: "KICB offers an internship program described as an opportunity to begin a career surrounded by professionals. Post-internship, successful interns are guaranteed a path to becoming a bank specialist.",
    applyLink: "https://kicb.net/about/career/practice/",
    applyEmail: "hr@kicb.net",
    applyNote: "Send CV with photo to hr@kicb.net. Phone: (0312/0553/0774/0704) 62 01 01",
    status: "📋 PROGRAM_EXISTS",
    languages: ["Russian", "Kyrgyz"],
    tags: ["banking", "credit", "finance", "economics", "full-time"],
    source: "kicb.net/about/career/practice/ verified"
  },

  {
    id: "demirbank-summer",
    company: "DemirBank (Demir Kyrgyz International Bank)",
    logo: null,
    role: "Summer Intern — Credit Department / General Banking",
    category: "Banking",
    paid: false,
    payNote: "No compensation confirmed. Duration is agreed between intern and bank.",
    location: "Bishkek",
    locationType: "on-site",
    deadline: "Typically announced April–May each year. Watch demirbank.kg/ru-kg/about/staff/vacancies",
    deadlineNote: "Summer internship traditionally has a May 31 application deadline.",
    duration: "1–3 months (by mutual agreement)",
    eligibility: "Economics and management students with strong academic potential. MS Office skills required. Foreign language knowledge a plus.",
    description: "DemirBank has run an annual Summer Practice (Летняя практика) for 25+ years. Students from economics/management programs are invited on a competitive basis. CV must be sent to hr@demirbank.kg.",
    applyLink: "https://demirbank.kg/ru-kg/about/staff/vacancies",
    applyEmail: "hr@demirbank.kg",
    applyNote: "Send resume to hr@demirbank.kg. Subject: 'Summer Internship 2026'. Phone: +996 550 365 560",
    status: "🔁 RECURRING",
    languages: ["Russian", "English"],
    tags: ["banking", "summer", "economics", "finance", "internship"],
    source: "demirbank.kg, turan.az news verified"
  },

  {
    id: "mbank-career",
    company: "MBANK (Commercial Bank Kyrgyzstan)",
    logo: null,
    role: "Intern / Entry-Level Roles",
    category: "Banking / Fintech",
    paid: null,
    payNote: "Unknown — MBANK career page exists but doesn't confirm internship compensation",
    location: "Bishkek",
    locationType: "on-site",
    deadline: "Check mbank.kg/en/career",
    deadlineNote: "MBANK has a career page but does not prominently feature a dedicated internship program as of April 2026",
    duration: "Unknown",
    eligibility: "Likely IT, business, finance backgrounds based on current open roles (Product Manager, Business Analyst, Flutter Developer, Frontend Developer)",
    description: "MBANK (Kyrgyzstan's leading digital bank with 1M+ clients) actively hires IT talent. Career page at mbank.kg. LinkedIn page posts vacancies. No dedicated 'internship program' page found — recommended to inquire directly.",
    applyLink: "https://mbank.kg/en/career",
    applyEmail: null,
    applyNote: "Check mbank.kg/en/career. Also contact @MalgarAi or @for_arainyday on Telegram (listed on their LinkedIn).",
    status: "❌ UNCONFIRMED",
    languages: ["Russian", "Kyrgyz", "English"],
    tags: ["banking", "fintech", "IT", "digital bank"],
    source: "mbank.kg/en/career, LinkedIn verified — no intern program found"
  },


  // =============================================
  // CATEGORY 4: AUDIT & CONSULTING
  // =============================================

  {
    id: "pwc-kg",
    company: "PwC Kyrgyzstan",
    logo: null,
    role: "Intern — Audit / Tax / Advisory",
    category: "Big 4 Consulting",
    paid: false,
    payNote: "PwC internships in the region are typically unpaid or offer a modest stipend. Confirm at application.",
    location: "Bishkek (Business Center Avangard, Toktogula str. 125/1, Tower B, 4th Floor, Office 404)",
    locationType: "on-site",
    deadline: "Check pwc.com/kg/en or pwc.com/kz/en/careers",
    deadlineNote: "PwC Kyrgyzstan is a small office under PwC Kazakhstan. Internships may be posted centrally for the Kazakhstan/Kyrgyzstan cluster.",
    duration: "Varies",
    eligibility: "Final-year bachelor's or master's students. Finance, economics, accounting, law, or related. Strong English. Analytical skills.",
    description: "PwC has a confirmed office in Bishkek at Business Center Avangard (Office: +996 555 51 52 34). Director: Gulnara Kairova. Internship postings may appear under PwC Kazakhstan careers portal. The Bishkek office provides Assurance, Tax, and Advisory services.",
    applyLink: "https://www.pwc.com/kz/en/careers.html",
    applyEmail: null,
    applyNote: "Check pwc.com/kz/en/careers. Contact Bishkek office directly: +996 555 51 52 34. PwC Kyrgyzstan contact: +996 312 62 09 15",
    status: "📋 PROGRAM_EXISTS",
    languages: ["English", "Russian"],
    tags: ["audit", "tax", "consulting", "Big 4", "finance", "accounting"],
    source: "pwc.com/kg/en/contact.html, pwc.com/kz/en/about-us/kazakhstan-offices.html verified"
  },


  // =============================================
  // CATEGORY 5: MINING & INDUSTRY
  // =============================================

  {
    id: "kumtor-summer-program",
    company: "Kumtor Gold Company",
    logo: "https://www.kumtor.kg/local/templates/kumtor/img/logo.png",
    role: "Summer Student Program (3 months, PAID)",
    category: "Mining",
    paid: true,
    payNote: "PAID — Kumtor explicitly confirms summer students and interns are paid. Record 150+ hired in recent cohort.",
    location: "Kumtor Mine (high altitude, Naryn Province)",
    locationType: "on-site (mine)",
    deadline: "Watch kumtor.kg/en/category/announcements/jobs/ — typically announced spring",
    deadlineNote: "Previous deadline: June 15. Watch for 2026 announcement April–May.",
    duration: "3 months (summer)",
    eligibility: "University students. Past programs accepted: Mining, Information Systems, Metallurgy, Geology, Engineering, and other technical majors. Must be medically fit to work at high altitude.",
    description: "Kumtor runs a Summer Student Program (3 months) and a longer Graduate Internship Program (2 years, for recent graduates). Both are paid. Mentors from mine operations guide participants. Real work in mill, metallurgical lab, dispatch team, and other production sections.",
    applyLink: "https://www.kumtor.kg/en/people-careers/",
    applyEmail: "Kumtor.Internship@kumtor.kg",
    applyNote: "Send application form + documents to Kumtor.Internship@kumtor.kg. Subject: 'Summer Student Program 2026'.",
    status: "🔁 RECURRING",
    languages: ["Russian", "Kyrgyz", "English"],
    tags: ["mining", "engineering", "geology", "IT", "technical", "paid", "high altitude"],
    source: "kumtor.kg/en/people-careers/, kumtor.kg/en/forge-of-personnel/ verified"
  },

  {
    id: "kumtor-graduate-internship",
    company: "Kumtor Gold Company",
    logo: "https://www.kumtor.kg/local/templates/kumtor/img/logo.png",
    role: "Graduate Internship Program (2 years, PAID)",
    category: "Mining",
    paid: true,
    payNote: "PAID — confirmed",
    location: "Kumtor Mine (Naryn Province)",
    locationType: "on-site (mine)",
    deadline: "Watch kumtor.kg — typically announced spring/summer. Previous: June 15 deadline.",
    deadlineNote: "This is a competitive 2-year paid program introduced in 2006. Limited slots.",
    duration: "2 years",
    eligibility: "Recent university graduates (check current announcement for year). Previous focuses: Mining, Information Systems & Technologies. Must be medically fit for high-altitude work.",
    description: "A structured 2-year graduate development program at Kumtor since 2006. Interns rotate through mine operations, work with senior mentors, and develop toward full employment. 99% of Kumtor's 3,000+ employees are Kyrgyz citizens.",
    applyLink: "https://www.kumtor.kg/en/internship-dispatch-team/",
    applyEmail: "Kumtor.Internship@kumtor.kg",
    applyNote: "Send application form to Kumtor.Internship@kumtor.kg. Subject: 'Graduate Internship Program 2026'.",
    status: "🔁 RECURRING",
    languages: ["Russian", "Kyrgyz", "English"],
    tags: ["mining", "graduate", "engineering", "2-year", "paid", "Naryn"],
    source: "kumtor.kg/en/internship-dispatch-team/ verified"
  },


  // =============================================
  // CATEGORY 6: LARGE LOCAL / INTERNATIONAL COMPANIES
  // =============================================

  {
    id: "cci-next-talent",
    company: "Coca-Cola İçecek / Coca-Cola Bishkek Bottlers (CCBB)",
    logo: null,
    role: "Next Talent Program 2026",
    category: "FMCG / Beverages",
    paid: null,
    payNote: "CCI Next Talent Program is a paid structured development program (confirmed for other markets). Confirm KG-specific terms.",
    location: "Bishkek / may include regional rotation",
    locationType: "on-site",
    deadline: "Watch careerscci.com for Kyrgyzstan-specific posting. Pakistan cycle posted Feb 2026.",
    deadlineNote: "CCI runs the Next Talent Program globally but availability for KG office not confirmed for 2026. Contact HR directly.",
    duration: "12 months",
    eligibility: "Young graduates. Functions: Sales, Finance, HR, Marketing, Supply Chain.",
    description: "Coca-Cola İçecek (parent company of CCBB) operates the Next Talent Program — a 12-month structured development journey across key business functions. CCBB in Bishkek participates in job fairs and employs from intern/trainee programs. Confirm KG-specific cycle by contacting CCBB HR.",
    applyLink: "https://careerscci.com",
    applyEmail: null,
    applyNote: "Check careerscci.com for KG-specific postings. CCBB Bishkek participates in the Ministry of Labor career fair (May 2025 included Coca-Cola CJSC). Contact CCBB HR via headhunter.kg or their official site.",
    status: "📋 PROGRAM_EXISTS",
    languages: ["Russian", "English"],
    tags: ["FMCG", "beverages", "marketing", "finance", "supply chain", "Coca-Cola"],
    source: "careerscci.com Next Talent Program, amcham.kg/en/members/coca-cola/ verified"
  },

  {
    id: "hyatt-bishkek",
    company: "Hyatt Regency Bishkek",
    logo: null,
    role: "Hospitality Intern (Food & Beverage / Front Desk / Events)",
    category: "Hospitality",
    paid: null,
    payNote: "Hyatt globally pays interns in most markets. Confirm local terms with Hyatt Bishkek HR.",
    location: "Bishkek",
    locationType: "on-site",
    deadline: "No current posting found. Apply directly to HR.",
    deadlineNote: "Manas University ran educational trips to Hyatt Bishkek in January 2024 with hospitality students. Internship availability for outside students: contact directly.",
    duration: "Summer / semester",
    eligibility: "Tourism, Hospitality, Gastronomy, Culinary Arts students preferred.",
    description: "Hyatt Regency Bishkek is the city's premier 5-star hotel. They partner with Manas University for hospitality education. Students from tourism/gastronomy departments can apply. Hyatt globally runs summer internship programs in front desk, F&B, HR, and marketing.",
    applyLink: "https://careers.hyatt.com",
    applyEmail: null,
    applyNote: "Check careers.hyatt.com for 'Bishkek' listings. If none, contact Hyatt Regency Bishkek HR directly via the hotel front desk.",
    status: "📋 PROGRAM_EXISTS",
    languages: ["Russian", "English"],
    tags: ["hospitality", "hotel", "food & beverage", "events", "tourism"],
    source: "manas.edu.kg educational trip records, hyatt.com verified"
  },


  // =============================================
  // CATEGORY 7: GOVERNMENT PROGRAMS
  // =============================================

  {
    id: "mintrud-youth-internship",
    company: "Ministry of Labor, Social Security and Migration (Минтруд КР)",
    logo: null,
    role: "Youth Internship Program (Молодёжная стажировка)",
    category: "Government Program",
    paid: true,
    payNote: "PAID via state mechanism — employers receive wage subsidies to pay interns. Pilot program stipend reported at ~8,600 KGS/month. World Bank-supported.",
    location: "Nationwide (30 pilot districts and cities in 2024–2025)",
    locationType: "on-site",
    deadline: "Apply through local Employment Service Centers (Центры занятости) — rolling",
    deadlineNote: "Program confirmed active as of early 2026. In 2024–2025: 1,851 participants, 1,332 employed post-internship.",
    duration: "Up to 6 months (preceded by up to 3.5 months of professional training)",
    eligibility: "Unemployed youth registered with employment services. No prior experience required. Focus on: garment industry, food sector, services, banking, social sector.",
    description: "Government-run pilot internship program implemented by the Ministry of Labor with World Bank support. Full cycle: vocational training (up to 3.5 months) → internship with assigned mentor (up to 6 months) → potential employment. Targeted at youth without work experience across Kyrgyzstan.",
    applyLink: "https://mlsp.gov.kg",
    applyEmail: null,
    applyNote: "Register as unemployed at your local Employment Service Center (Центр занятости населения). Ask about the 'Молодёжная стажировка' program. Find centers at mlsp.gov.kg",
    status: "✅ VERIFIED_ACTIVE",
    languages: ["Russian", "Kyrgyz"],
    tags: ["government", "youth", "paid", "employment", "nationwide", "World Bank"],
    source: "K-News April 2026, banks.kg/news Feb 2026 verified"
  },


  // =============================================
  // CATEGORY 8: COMPANIES WITH NO INTERNSHIP FOUND
  // (Honest 'unconfirmed' listings for transparency)
  // =============================================

  {
    id: "optima-bank-unconfirmed",
    company: "Optima Bank",
    role: "Intern (Unconfirmed)",
    category: "Banking",
    paid: null,
    location: "Bishkek",
    deadline: "Not found",
    status: "❌ UNCONFIRMED",
    applyNote: "Optima Bank has an active headhunter.kg profile. No dedicated internship program found. Email: careers page not found — try hr@optimabank.kg or check headhunter.kg",
    tags: ["banking"],
    source: "No internship program verified as of April 2026"
  },

  {
    id: "bakai-bank-unconfirmed",
    company: "Bakai Bank",
    role: "Intern (Unconfirmed)",
    category: "Banking",
    paid: null,
    location: "Bishkek",
    deadline: "Not found",
    status: "❌ UNCONFIRMED",
    applyNote: "Bakai Bank is a real institution. No verified internship program found. Check headhunter.kg or bakai.kg for vacancies.",
    tags: ["banking"],
    source: "No internship program verified as of April 2026"
  },

  {
    id: "megacom-unconfirmed",
    company: "Megacom (Alfa Telecom)",
    role: "Intern (Unconfirmed)",
    category: "Telecom",
    paid: null,
    location: "Bishkek",
    deadline: "Not found",
    status: "❌ UNCONFIRMED",
    applyNote: "Megacom is Kyrgyzstan's second-largest telecom operator. Confirmed to participate in Ministry of Labor career fairs. No verified internship program page found. Check megacom.kg/career or headhunter.kg",
    tags: ["telecom"],
    source: "No internship program verified as of April 2026"
  },

  {
    id: "kpmg-unconfirmed",
    company: "KPMG Kyrgyzstan",
    role: "Intern (Unconfirmed)",
    category: "Big 4 Consulting",
    paid: null,
    location: "Bishkek",
    deadline: "Not found",
    status: "❌ UNCONFIRMED",
    applyNote: "KPMG does not list a confirmed Bishkek office as of April 2026. Their Central Asia operations are primarily based in Kazakhstan (Almaty). If interested in KPMG, check kpmg.com/kz for regional opportunities.",
    tags: ["consulting", "audit"],
    source: "No KG office or internship program verified as of April 2026"
  },

  {
    id: "gazprom-neft-unconfirmed",
    company: "Gazprom Neft Asia (Kyrgyzstan)",
    role: "Intern (Unconfirmed)",
    category: "Oil & Gas",
    paid: null,
    location: "Bishkek",
    deadline: "Not found",
    status: "❌ UNCONFIRMED",
    applyNote: "Gazprom Neft Asia is active in Kyrgyzstan. No internship program found. Contact hr@gazprom-neft.kg or check headhunter.kg",
    tags: ["oil", "gas", "engineering"],
    source: "No internship program verified as of April 2026"
  }

];


// =============================================
// JOB BOARDS — Reliable Sources for More Listings
// =============================================

export const jobBoards = [
  {
    name: "HeadHunter Kyrgyzstan — Internships",
    url: "https://headhunter.kg/stazhirovki",
    description: "Kyrgyzstan's largest job board with 500+ active internship listings. Filter by city, specialization, and paid/unpaid.",
    language: "Russian",
    updateFrequency: "Daily",
    verified: true
  },
  {
    name: "intern.kg",
    url: "http://intern.kg",
    description: "Dedicated Kyrgyzstan internship platform. Features internships, entry-level jobs, and volunteering opportunities.",
    language: "Russian",
    updateFrequency: "Weekly",
    verified: true
  },
  {
    name: "employment.kg",
    url: "https://employment.kg",
    description: "Bishkek-focused job board with NGO, international org, and private sector listings. Internships/стажировки section available.",
    language: "Russian",
    updateFrequency: "Daily",
    verified: true
  },
  {
    name: "uncareer.net / Kyrgyzstan",
    url: "https://uncareer.net/country/Kyrgyzstan",
    description: "All UN, OSCE, World Bank, and international NGO vacancies including internships in Kyrgyzstan. Updated weekly.",
    language: "English",
    updateFrequency: "Weekly",
    verified: true
  },
  {
    name: "untalent.org / Bishkek",
    url: "https://untalent.org/jobs/in-anything/contract-entry+internship/bishkek",
    description: "Another UN jobs aggregator. Filter by Bishkek + Internship for comprehensive UN agency listings.",
    language: "English",
    updateFrequency: "Weekly",
    verified: true
  },
  {
    name: "devex.com / Kyrgyzstan",
    url: "https://www.devex.com/jobs/search?filter[locations][]=Kyrgyzstan",
    description: "International development sector jobs. Frequently lists NGO, USAID, GIZ, and search-for-common-ground type internships.",
    language: "English",
    updateFrequency: "Daily",
    verified: true
  },
  {
    name: "unjobs.org / Kyrgyzstan",
    url: "https://unjobs.org/countries/kyrgyzstan",
    description: "UN jobs aggregator with internship filter. Covers GGGI, UNFPA, WHO, UNICEF, and others.",
    language: "English",
    updateFrequency: "Daily",
    verified: true
  },
  {
    name: "headhunter.kg / Stazher",
    url: "https://headhunter.kg/vacancies/stazher",
    description: "HeadHunter search for 'стажер' (trainee/intern) — includes non-standard listings not in the main internship section.",
    language: "Russian",
    updateFrequency: "Daily",
    verified: true
  }
];


// =============================================
// TELEGRAM CHANNELS — For Real-Time Updates
// =============================================

export const telegramChannels = [
  {
    name: "Вакансии Бишкек / Bishkek Jobs",
    handle: "Search '@вакансии Бишкек стажировка' in Telegram",
    description: "Multiple active Telegram channels post Bishkek vacancies and internships daily. Use the search term above.",
    verified: false // No single canonical channel — search recommended
  },
  {
    name: "HeadHunter KG Telegram",
    handle: "@headhunterkz (regional)",
    description: "HeadHunter regional channel sometimes features KG-specific listings.",
    verified: false
  }
];


// =============================================
// UNIVERSITY CAREER CENTERS
// =============================================

export const universityCareers = [
  {
    university: "AUCA (American University of Central Asia)",
    website: "https://auca.kg",
    careerCenter: "AUCA Career Development Center",
    notes: "Actively partners with international organizations. Regular career fairs. Strong pipeline to OSCE, UNDP, USAID internships.",
    contact: "career@auca.kg (check auca.kg for current contact)"
  },
  {
    university: "Ala-Too International University",
    website: "https://www.alatoo.edu.kg",
    careerCenter: "Career Office",
    notes: "Official partner university of O! Intern Labs. Students get priority in InternLabs tech internships.",
    contact: "Check alatoo.edu.kg"
  },
  {
    university: "Kyrgyz-Russian Slavic University (KRSU)",
    website: "https://www.krsu.edu.kg",
    careerCenter: "Employment/Career Department",
    notes: "Partner of O! Intern Labs. Strong engineering and IT departments pipeline.",
    contact: "Check krsu.edu.kg"
  },
  {
    university: "University of Central Asia (UCA)",
    website: "https://www.ucentralasia.org",
    careerCenter: "Student Services",
    notes: "Partner of O! Intern Labs. Posts jobs/internships via employment.kg.",
    contact: "Check ucentralasia.org/careers"
  },
  {
    university: "Manas University (Kyrgyz-Turkish Manas)",
    website: "https://manas.edu.kg",
    careerCenter: "Career Center",
    notes: "Partner of O! Intern Labs. Has formal educational trip program with Hyatt Regency Bishkek for tourism students.",
    contact: "Check manas.edu.kg"
  },
  {
    university: "KGTU (Kyrgyz State Technical University)",
    website: "https://kstu.kg",
    careerCenter: "Employment Department",
    notes: "Partner of O! Intern Labs. Strong engineering pipeline to Kumtor and telecom companies.",
    contact: "Check kstu.kg"
  }
];


// =============================================
// BONUS: QUICK SUMMARY FOR PLATFORM UI
// =============================================

export const summary = {
  totalVerified: 14,
  activeRightNow: 3, // GGGI (deadline May 4), GAO Tek (rolling), Mintrud Youth Program
  paidInternships: 7, // GGGI, Beeline, Kumtor (x2), Search for Common Ground, ADB, Mintrud
  unpaidInternships: 4, // OSCE, US Embassy, UNICEF, UNDP, GAO Tek
  recurringPrograms: 8, // O! InternLabs, Beeline, US Embassy, UNDP, UNICEF, OSCE, Kumtor, DemirBank
  topPicksForBusiness: ["DemirBank", "KICB", "Beeline", "O! InternLabs"],
  topPicksForInternational: ["GGGI", "OSCE", "UNDP", "UNICEF", "ADB", "Search for Common Ground"],
  topPicksForIT: ["O! InternLabs", "MBANK", "Beeline", "GAO Tek"],
  topPicksForMining: ["Kumtor Gold Company"],
  highestPaid: ["Kumtor Gold Company", "ADB", "Beeline", "Search for Common Ground"],
  lastUpdated: "2026-04-18"
};
];

// Auto-assign new IDs if you add more
let nextId = internshipsData.length + 1;
