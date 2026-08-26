document.body.classList.add("js");

const sharedNav = [
  ["index.html", "Home"],
  ["about.html", "About"],
  ["solutions.html", "Solutions"],
  ["technology.html", "Technology"],
  ["terminals.html", "Terminals"],
  ["manufacturing.html", "Manufacturing"],
  ["impact.html", "Impact"],
  ["investors.html", "Investors"],
  ["news.html", "News"],
];

const arrowIcon = `
  <span class="arrow-dot" aria-hidden="true">
    <svg viewBox="0 0 20 20" focusable="false"><path d="M4 10h10.2m-4-4 4 4-4 4" /></svg>
  </span>
`;

const icons = {
  people: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M7 11.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM2.8 20c.6-3.7 2.4-5.5 5.2-5.5s4.6 1.8 5.2 5.5M13 17.7c.7-2.1 2.1-3.2 4-3.2 2.4 0 3.9 1.5 4.4 4.6" /></svg>`,
  bus: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M5 6c0-1.8 1.2-2.8 3-3h8c1.8.2 3 1.2 3 3v10.5c0 1.4-1.1 2.5-2.5 2.5h-9A2.5 2.5 0 0 1 5 16.5V6Z" /><path d="M7.5 8.5h9M8 14h.1M16 14h.1M7 19v2M17 19v2" /></svg>`,
  design: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M4 16.5 15.7 4.8a2.2 2.2 0 0 1 3.1 3.1L7.1 19.6 3 21l1-4.5Z" /><path d="m13.8 6.7 3.5 3.5M11 21h10" /></svg>`,
  factory: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M3 20V9.5l5 3V9.5l5 3V5h5v15H3Z" /><path d="M7 16h2.5M12 16h2.5M17 16h2" /></svg>`,
  universal: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><circle cx="12" cy="5" r="2.2" /><path d="M4 9.5c4.9 1.4 11.1 1.4 16 0M12 7.5v5.2m0 0L8 20m4-7.3 4 7.3" /></svg>`,
  impact: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M4 19.5V5m0 14.5h16" /><path d="m7 15 3.5-3.5 3 2.5L19 8" /></svg>`,
  invest: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M4 17.5 12 4l8 13.5H4Z" /><path d="M8.5 17.5 12 11l3.5 6.5M12 4v7" /></svg>`,
  news: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M5 4.5h11.5A2.5 2.5 0 0 1 19 7v12.5H7.5A2.5 2.5 0 0 1 5 17V4.5Z" /><path d="M8 8h7M8 11h7M8 14h4" /></svg>`,
  contact: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M5 6h14v12H5V6Z" /><path d="m5 7 7 6 7-6" /></svg>`,
  terminal: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M3.5 20h17M4.5 20V9.5l7.5-4 7.5 4V20" /><path d="M9 20v-5.5h6V20M8 9.5h8" /></svg>`,
  tech: `<svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><circle cx="12" cy="5.5" r="1.9" /><circle cx="5.5" cy="18" r="1.9" /><circle cx="18.5" cy="18" r="1.9" /><path d="M12 7.4 6.7 16.3M12 7.4l5.3 8.9M7.6 18h8.8" /></svg>`,
};

const sectionTitleBreaks = {
  "We begin with people, then design the system around them.": ["We begin with people,", "then design the system around them."],
  "The complete mobility ecosystem": ["The complete", "mobility ecosystem"],
  "Designing the journey before designing the object": ["Designing the journey", "before designing the object"],
  "African industrial capability for future mobility": ["African industrial capability", "for future mobility"],
  "Universal Design as a mobility operating principle": ["Universal Design", "as a mobility operating principle"],
  "Impact built into every layer of the system": ["Impact built into", "every layer of the system"],
  "A commercially credible mobility platform": ["A commercially credible", "mobility platform"],
  "Partnerships that make transformation practical": ["Partnerships that make", "transformation practical"],
  "Every transformation begins with a conversation.": ["Every transformation begins", "with a conversation."],
  "Africa headquarters and future global presence": ["Africa headquarters", "and future global presence"],
  "Stay close to the future of African mobility": ["Stay close to the future", "of African mobility"],
  "Help Shape the Future of African Mobility": ["Help Shape the Future", "of African Mobility"],
  "The cost of poor design is paid every day": ["The cost of poor design", "is paid every day"],
  "Universal Design improves the whole journey": ["Universal Design improves", "the whole journey"],
  "Commercial value and social impact belong together": ["Commercial value and social impact", "belong together"],
  "Why Universal Design Changes the Economics of African Mobility": ["Why Universal Design Changes", "the Economics of African Mobility"],
};

function sectionTitle(title) {
  const forcedBreak = sectionTitleBreaks[title];
  if (forcedBreak) {
    return `${forcedBreak[0]}<span class="title-line">${forcedBreak[1]}</span>`;
  }

  const words = title.trim().split(/\s+/);
  if (words.length < 6) return title;

  const target = Math.ceil(words.length / 2);
  return `${words.slice(0, target).join(" ")}<span class="title-line">${words.slice(target).join(" ")}</span>`;
}

const articles = [
  {
    title: "Why Universal Design Changes the Economics of African Mobility",
    category: "Universal Design",
    date: "July 2026",
    time: "6 min read",
    image: "assets/accessible-inclusive-reliable.webp",
    excerpt: "Transport systems built for diverse passengers reduce friction, increase confidence, and make public mobility more useful for everyone.",
  },
  {
    title: "Manufacturing for Africa: From Vehicle Assembly to Industrial Capability",
    category: "Manufacturing",
    date: "July 2026",
    time: "5 min read",
    image: "assets/SLIDE 5.webp",
    excerpt: "Kencid Mobility's manufacturing vision links research, engineering, suppliers, production, quality control, and after-sales support.",
  },
  {
    title: "Electric Fleets Need Charging Networks, Data, and Passenger Trust",
    category: "Electric Mobility",
    date: "June 2026",
    time: "4 min read",
    image: "assets/SLIDE 4.webp",
    excerpt: "Cleaner transport works best when vehicles, depot charging, fleet management, and energy monitoring are designed as one ecosystem.",
  },
  {
    title: "What a Universal Mobility Hub Should Feel Like",
    category: "Smart Cities",
    date: "June 2026",
    time: "5 min read",
    image: "assets/hero-terminal.webp",
    excerpt: "A mobility hub should be safe, intuitive, comfortable, inclusive, sustainable, and economically productive.",
  },
  {
    title: "The Passenger Journey Is the Real Product",
    category: "Passenger Experience",
    date: "May 2026",
    time: "4 min read",
    image: "assets/experience-accessibility.webp",
    excerpt: "From first route search to final arrival, every touchpoint can either create uncertainty or build dignity and independence.",
  },
  {
    title: "Pilot Projects: Testing Tomorrow Before Scaling It",
    category: "Public Transport Innovation",
    date: "May 2026",
    time: "3 min read",
    image: "assets/bus .webp",
    excerpt: "Universal design bus pilots, smart ticketing pilots, electric bus pilots, and county mobility pilots reduce risk before wider deployment.",
  },
  {
    title: "Terminals Reimagined: Designing Transport Hubs Around People",
    category: "Smart Cities",
    date: "April 2026",
    time: "4 min read",
    image: "assets/terminals.webp",
    excerpt: "Real-time information, smart wayfinding, and universal restrooms turn a terminal from a waiting space into part of the journey.",
  },
  {
    title: "Funding the Next Generation of African Public Transport",
    category: "Investment",
    date: "April 2026",
    time: "5 min read",
    image: "assets/HEROES 2.webp",
    excerpt: "Manufacturing plants, electric fleets, and smart mobility hubs give investors several ways to back the same growth story.",
  },
];

const pages = {
  about: {
    title: "About Kencid Mobility",
    description: "Africa's Universal Design mobility company, built around dignity, safety, intelligence, sustainability, and manufacturing capability.",
    icon: "people",
    hero: "assets/HEROES 2.webp",
    intro: {
      heading: "We begin with people, then design the system around them.",
      copy: "KENCID Mobility Ltd is a bold African mobility company redefining transportation through Universal Design, manufacturing, innovation, technology, and human dignity. The company designs the entire journey, from the passenger's first interaction with a transport system to their final destination.",
      image: "assets/connecting-passengers-operators-cities.webp",
      alt: "Passengers, a family, and a Kencid Mobility operator boarding a city bus together",
    },
    bands: [
      {
        heading: "Our purpose",
        copy: "To make movement equal, dignified, and barrier-free for all people. Transport should never make people feel helpless, invisible, embarrassed, or unsafe.",
        stats: ["Universal Design from the beginning", "Vehicles, termini, apps, safety and operations", "African design, engineering and industrial ambition"],
      },
      {
        heading: "Vision and mission",
        copy: "Kencid Mobility aims to become Africa's leading Universal Design mobility company. Its mission is to design, manufacture, deploy, and manage mobility solutions that enable every person to move with dignity, independence, comfort, safety, and equal participation.",
        list: ["Research-led mobility design", "Smart manufacturing and assembly", "Government and operator partnerships", "Continuous improvement through testing and feedback"],
      },
      {
        heading: "Where Kencid Mobility is headed",
        copy: "The next phase of growth links manufacturing capacity, electric fleets, smart mobility hubs, and African supplier networks into one coordinated platform.",
        stats: ["Regional manufacturing expansion", "Electric fleet rollout", "Smart mobility hub network", "Pan-African supplier development"],
      },
    ],
    featureGrid: [
      ["Vehicle manufacturing", "Designing and assembling mobility products for public, private, school, healthcare, and institutional fleets."],
      ["Universal Design", "One intelligent system that works for the widest possible range of users without stigma or separation."],
      ["Passenger experience", "Boarding, seating, circulation, information, safety, and wayfinding designed as one journey."],
      ["African industrial development", "A platform for skills, supplier growth, technical employment, research, and export readiness."],
    ],
    featureGridHeading: "Four capabilities, one company",
    featureGridSummary: "Kencid Mobility brings manufacturing, design, technology, and African industrial ambition into a single mobility platform.",
    gallery: [
      ["assets/bus .webp", "Universal city and intercity vehicles"],
      ["assets/ud terminal .webp", "Mobility hubs built around Universal Design"],
      ["assets/electric car.webp", "Inclusive private and family mobility"],
    ],
    galleryHeading: "One system, every touchpoint",
    gallerySummary: "Vehicles, hubs, and private mobility share the same design language and the same standard of care.",
    quote: {
      text: "Universal Design is not a feature we add at the end. It is the question we start with.",
      name: "Kencid Mobility",
      role: "Design philosophy",
    },
  },
  solutions: {
    title: "Our Solutions",
    description: "Complete mobility ecosystems: universal vehicles, smart systems, electric fleets, termini, interiors, and advisory support.",
    icon: "bus",
    hero: "assets/HEROES 1.webp",
    intro: {
      heading: "Not just vehicles. Entire journeys.",
      copy: "Kencid Mobility solves mobility challenges through Universal Design, advanced vehicle design, smart technology, human-centered research, sustainable manufacturing, and complete transport ecosystem development.",
      image: "assets/electric bus .webp",
      alt: "Kencid Mobility electric bike-share station for short urban trips",
    },
    solutionCards: [
      ["Universal City Bus", "Safe, efficient, dignified public transport with foldable seats, tactile flooring, multi-sensory information, wide circulation, smart displays, and emergency systems.", "assets/bus .webp"],
      ["Universal Intercity Coach", "Long-distance travel measured by comfort, dignity, safety, passenger information, flexible interiors, smart lighting, and premium experience.", "assets/van .webp"],
      ["Universal School Bus", "Child-centered safety, GPS tracking, smart notifications, driver monitoring, emergency systems, and inclusive design for diverse learners.", "assets/low floor easy acces .webp"],
      ["Universal Private Mobility", "Family, executive, healthcare, hospitality, senior-friendly, and electric mobility that is inclusive, beautiful, and intelligent.", "assets/electric car.webp"],
      ["Universal Mobility Hubs", "Arrival zones, passenger lounges, smart ticketing, family zones, universal restrooms, operations centres, safety areas, and green spaces.", "assets/ud terminal .webp"],
      ["Smart Mobility Platform", "Journey planning, real-time tracking, smart ticketing, passenger alerts, accessibility support, fleet intelligence, and data analytics.", "assets/Audio information .webp"],
    ],
    featureGrid: [
      ["Universal by default", "Every seat, door, surface, and signal is designed to work without special accommodation requests."],
      ["Smart and connected", "Vehicles, hubs, and passenger apps share one data layer for real-time tracking, ticketing, and alerts."],
      ["Electric-ready", "Platforms are engineered to transition from diesel to electric without redesigning the passenger experience."],
      ["Built for African roads and cities", "Durability, serviceability, and local support shape every solution from the first sketch."],
    ],
    featureGridHeading: "What makes it universal",
    featureGridSummary: "Every solution shares the same commitment: safe, dignified, intelligent movement for every passenger.",
    bands: [
      {
        heading: "Electric mobility ecosystem",
        copy: "The shift from fossil fuels to electric mobility is an opportunity to build cleaner, quieter, and more efficient transport systems. Kencid Mobility's model connects electric fleets with depot charging, fast charging, solar-assisted charging, battery monitoring, and fleet energy management.",
        list: ["Electric city bus", "Electric school bus", "Electric shuttle", "Electric airport transfer", "Charging infrastructure network"],
        image: "assets/electric taxi .webp",
        imageAlt: "Kencid Mobility electric shuttle concept vehicle",
      },
    ],
  },
  technology: {
    title: "Smart Mobility Technology",
    description: "Digital tools, real-time information, analytics, and intelligent systems connecting passengers, operators, and cities.",
    icon: "tech",
    hero: "assets/smart-mobility-technology.webp",
    intro: {
      heading: "The nervous system of modern mobility.",
      copy: "Passengers expect information. Operators require data. Governments need planning insight. Cities need efficient transport networks. Kencid Mobility's smart mobility ecosystem integrates digital tools, real-time information, analytics, and intelligent systems into every stage of the journey, connecting passengers, operators, infrastructure, vehicles, and policymakers.",
      image: "assets/experience-app.webp",
      alt: "Passenger planning a trip on the Kencid Mobility app",
    },
    solutionCards: [
      ["Passenger Mobility Platform", "Journey planning, real-time vehicle tracking, smart ticketing, passenger alerts, accessibility support, and emergency assistance put mobility information directly in passengers' hands.", "assets/Audio information .webp"],
      ["Smart Ticketing Platform", "Mobile money, QR codes, contactless cards, institutional passes, and student and corporate mobility accounts replace cash-based fare collection with transparent digital payments.", "assets/terminals.webp"],
      ["Fleet Intelligence Platform", "Vehicle tracking, driver monitoring, fuel and energy management, maintenance alerts, passenger counts, and safety monitoring help operators run safer, more reliable fleets.", "assets/electric taxi .webp"],
      ["AI Mobility Intelligence", "Future route optimization, scheduling, fleet deployment, passenger demand forecasting, maintenance planning, and energy consumption modelling turn mobility into a data-driven system.", "assets/HEROES 2.webp"],
    ],
    process: ["Passenger", "Mobile application", "Smart ticketing", "Fleet management", "Data analytics", "Operations centre", "Government intelligence", "Mobility optimization"],
    processHeading: "The smart mobility architecture",
    processSummary: "One connected flow turns individual trips into system-wide intelligence.",
    featureGrid: [
      ["For passengers", "Reduced uncertainty, better trip planning, increased confidence, and enhanced safety at every stage of the journey."],
      ["For operators", "Revenue transparency, reduced operating costs, and better fleet decisions from live vehicle and driver data."],
      ["For governments and cities", "Improved accountability, congestion insight, and the planning data needed to build better transport networks."],
    ],
    featureGridHeading: "Who benefits",
    featureGridSummary: "Smart mobility technology creates value for everyone who touches the system.",
    quote: {
      text: "Technology should support design. Design should never be sacrificed for technology.",
      name: "Kencid Mobility",
      role: "Design Before Technologyâ„¢",
    },
  },
  terminals: {
    title: "Terminals & Mobility Hubs",
    description: "Universal Design termini that make the complete journey dignified, from arrival to departure.",
    icon: "terminal",
    hero: "assets/HEROES 2.webp",
    intro: {
      heading: "Reimagining transport infrastructure.",
      copy: "Transportation begins before boarding and continues after arrival, so mobility infrastructure matters as much as mobility vehicles. Too many transport hubs remain confusing, overcrowded, uncomfortable, and inaccessible. Kencid Mobility designs Universal Design termini that treat transport hubs as destinations, not waiting areas.",
      image: "assets/terminals.webp",
      alt: "Passengers moving through a Kencid Mobility terminal with live departure information",
    },
    bands: [
      {
        heading: "What a mobility hub should feel like",
        copy: "A terminus should never be chaotic, unsafe, confusing, or uncomfortable. It should be a well-designed civic space that supports movement, business, community, and public confidence.",
        stats: ["Safe", "Beautiful", "Intuitive", "Comfortable", "Sustainable", "Inclusive", "Economically productive"],
      },
      {
        heading: "Community impact",
        copy: "Well-designed termini do more than move passengers. They become part of the neighborhoods and economies that grow up around them.",
        list: ["Economic engines", "Social connectors", "Community landmarks", "Urban catalysts"],
      },
    ],
    featureGrid: [
      ["Arrival Zone", "Clear entry points, drop-off areas, tactile approach routes, lighting, and security create a safe first impression."],
      ["Passenger Waiting Zone", "Comfortable seating, weather protection, audio-visual travel information, and charging points make waiting calm, not stressful."],
      ["Boarding Zone", "Marked bays, tactile guidance, level or assisted boarding, and real-time route displays keep boarding safe and predictable."],
      ["Ticketing and Smart Payment Zone", "Mobile money, QR codes, card payments, self-service kiosks, and multilingual instructions make fares fast and fair."],
      ["Retail and Convenience Zone", "Shops, food courts, pharmacies, ATMs, and parcel services turn waiting time into everyday value."],
      ["Family and Care Zone", "Baby changing rooms, nursing spaces, and child-safe seating support caregivers and families travelling together."],
      ["Universal Restroom Zone", "Larger circulation, non-slip finishes, family restrooms, and emergency call systems serve every passenger with dignity."],
      ["Safety and Emergency Zone", "Fire exits, CCTV, public address systems, and medical response points keep preparedness built into the design."],
      ["Green and Wellness Zone", "Shade trees, landscaping, natural ventilation, and solar lighting support wellbeing, not just movement."],
      ["Operations and Fleet Zone", "Dispatch offices, driver rest areas, fleet staging, and charging infrastructure keep operators running smoothly."],
    ],
    featureGridHeading: "Every zone, one dignified journey",
    featureGridSummary: "Universal Design termini are designed zone by zone, from arrival to departure.",
    gallery: [
      ["assets/clear way finding .webp", "Clear wayfinding across every zone"],
      ["assets/Audio information .webp", "Self-service ticketing and information kiosks"],
      ["assets/accessible toilets .webp", "Universal restrooms in every terminal"],
      ["assets/tactile guidance.webp", "Tactile guidance from arrival to boarding"],
    ],
    galleryHeading: "Built into every terminal",
    gallerySummary: "The same accessible details repeat across every Kencid Mobility hub.",
    quote: {
      text: "The future of transportation infrastructure is not simply functional. It is human-centered, intelligent, and inspiring.",
      name: "Kencid Mobility",
      role: "Termini design philosophy",
    },
  },
  "design-experience": {
    title: "Design Experience",
    description: "Where mobility is researched, prototyped, tested, refined, and prepared for real passenger journeys.",
    icon: "design",
    hero: "assets/SLIDE 3.webp",
    intro: {
      heading: "The Design Lab asks why movement feels difficult, then builds a better answer.",
      copy: "Every transformative mobility solution begins with a question. Why is this difficult? Why is this confusing? Why does this experience create stress? The Kencid Mobility Design Lab explores those questions and turns answers into vehicle concepts, interiors, hub concepts, safety innovations, and passenger communication systems.",
      image: "assets/experience-app.webp",
      alt: "Digital mobility experience interface for journey planning and passenger support",
    },
    process: ["Research", "Observe", "Define", "Prototype", "Test", "Refine", "Deploy"],
    featureGrid: [
      ["Human-centered research", "Studying real passenger experiences so decisions are grounded in daily movement, not assumptions."],
      ["Universal Design development", "Creating inclusive mobility solutions before vehicles, interiors, apps, and hubs are finalized."],
      ["Simulation and prototyping", "Testing concepts early to improve safety, comfort, usability, and operational fit."],
      ["Passenger communication", "Designing audio, visual, digital, and tactile information so people can travel with confidence."],
      ["Safety-first iteration", "Emergency response, lighting, and circulation are stress-tested before a single unit is built."],
      ["Operator feedback loops", "Drivers, conductors, and terminal staff shape refinements alongside passengers."],
    ],
    featureGridHeading: "How the lab works",
    featureGridSummary: "Research, design, and validation run together so ideas are proven before they scale.",
    gallery: [
      ["assets/experience-terminal.webp", "Observing real passenger flow inside a transport hub"],
      ["assets/experience-accessibility.webp", "Studying accessibility across the full journey"],
      ["assets/tactile guidance.webp", "Testing tactile and multi-sensory guidance"],
    ],
    galleryHeading: "Where research becomes evidence",
    gallerySummary: "Every concept is observed, tested, and refined in real passenger environments before it is finalized.",
  },
  manufacturing: {
    title: "Manufacturing",
    description: "A disciplined journey from research to delivery, and a platform for African skills, suppliers, jobs, and export capability.",
    icon: "factory",
    hero: "assets/SLIDE 5.webp",
    intro: {
      heading: "Africa must manufacture its future.",
      copy: "Kencid Mobility believes Africa should design, engineer, manufacture, innovate, and export. Manufacturing is more than production; it is a way to build technical capability, jobs, supplier ecosystems, and long-term competitiveness.",
      image: "assets/SLIDE 2.webp",
      alt: "Modern Kencid Mobility manufacturing and assembly concept",
    },
    process: ["Research and discovery", "Concept development", "Engineering", "Prototype development", "Validation and testing", "Certification", "Production", "Assembly", "Quality assurance", "Branding and finishing", "Delivery", "After-sales support"],
    bands: [
      {
        heading: "Manufacturing ecosystem",
        copy: "Modern manufacturing is not a single building. It connects research, design, engineering, suppliers, production, assembly, testing, deployment, and support.",
        list: ["Research Centre", "Design Lab", "Engineering Centre", "Supplier Network", "Manufacturing Plant", "Quality Centre", "Training Academy", "Service Network"],
      },
      {
        heading: "Local content development",
        copy: "A thriving supplier ecosystem creates direct and indirect opportunities across seating systems, metal fabrication, electrical systems, upholstery, flooring, branding materials, interior components, and technology integration.",
        stats: ["Skills transfer", "SME development", "Technical employment", "Supplier growth"],
      },
    ],
    featureGrid: [
      ["Research and engineering", "Concepts move from passenger research to certified engineering before a line is tooled."],
      ["Quality assurance", "Testing, validation, and certification protect safety and reliability at every production stage."],
      ["Supplier development", "Local suppliers are trained and onboarded across seating, fabrication, electrical, and interior systems."],
      ["After-sales support", "Service networks and training academies keep vehicles running and technicians skilled long after delivery."],
    ],
    featureGridHeading: "From components to capability",
    featureGridSummary: "Manufacturing at Kencid Mobility is a platform for skills, suppliers, and long-term industrial growth, not just production.",
    gallery: [
      ["assets/HEROES 2.webp", "The Kencid UD Terminal precinct, delivered through the manufacturing ecosystem"],
      ["assets/terminals.webp", "Smart terminal fit-out delivered by Kencid Mobility's manufacturing ecosystem"],
    ],
    galleryHeading: "What the ecosystem builds",
    gallerySummary: "Manufacturing capability extends beyond vehicles into the hubs and infrastructure passengers rely on.",
  },
  "universal-design": {
    title: "Universal Design",
    description: "Mobility systems designed from the beginning for the widest possible range of passengers, without special corners or afterthoughts.",
    icon: "universal",
    hero: "assets/full accessibility .webp",
    intro: {
      heading: "Universal Design is integrated from the earliest concept stages.",
      copy: "Accessible design often focuses on specific accommodations for specific users. Universal Design begins differently: one intelligent system that works for everyone. Kencid Mobility rejects segregated spaces, stigma-based markings, and patchwork access.",
      image: "assets/step free acces.webp",
      alt: "Step-free accessible bus boarding area with tactile guidance",
    },
    featureGrid: [
      ["Equitable use", "Useful and dignified for people with diverse abilities, with no segregated passenger zones."],
      ["Flexibility in use", "Foldable seats, adaptable layouts, multiple payment options, and custom fleet configurations."],
      ["Simple and intuitive", "Clear signage, predictable layouts, simple boarding, easy route information, and user-friendly apps."],
      ["Perceptible information", "Audio announcements, visual displays, tactile flooring, digital alerts, route maps, and emergency lights."],
      ["Tolerance for error", "Anti-slip floors, rounded edges, emergency lighting, fire systems, safe circulation paths, and clear exits."],
      ["Low physical effort", "Movement should not require struggle, whether boarding, moving through a vehicle, or finding a service."],
    ],
    featureGridHeading: "Designed around six core principles",
    featureGridSummary: "Each principle becomes a concrete decision in seating, signage, flooring, and circulation, not an afterthought.",
    gallery: [
      ["assets/wide doors.webp", "Wide, step-free boarding with tactile guidance"],
      ["assets/low floor easy acces .webp", "Low-floor interiors built for easy, unaided access"],
      ["assets/clear way finding .webp", "Clear, high-contrast wayfinding at every stop"],
      ["assets/Audio information .webp", "Interactive kiosks with audio and visual journey information"],
      ["assets/accessible toilets .webp", "Fully accessible restrooms at mobility hubs"],
      ["assets/passenger-assistance-render-crop.webp", "Braille and audio passenger assistance points"],
      ["assets/fire-safety-render-crop.webp", "Integrated emergency and fire safety systems"],
    ],
    galleryHeading: "Engineered for real passengers",
    gallerySummary: "Universal Design shows up in the details: doors, floors, signage, sound, and safety systems working together.",
    bands: [
      {
        heading: "Universal bus interior",
        copy: "The interior is where passengers experience mobility. It is where comfort is felt, information is received, safety becomes visible, and dignity is experienced.",
        list: ["Foldable forward-facing seating", "Tactile navigation", "Multi-sensory information", "Universal circulation", "Emergency guidance", "Passenger wellness design"],
        image: "assets/ud-bus-interior.webp",
        imageAlt: "Universal Design bus interior with foldable seating and tactile guidance path",
      },
    ],
  },
  impact: {
    title: "Impact",
    description: "Measuring inclusion, access, employment, sustainability, safety, satisfaction, and stronger communities.",
    icon: "impact",
    hero: "assets/impact.webp",
    intro: {
      heading: "What gets measured gets improved.",
      copy: "Kencid Mobility uses measurable indicators to evaluate performance and improve outcomes. The impact strategy links transportation with education, employment, healthcare, inclusion, economic opportunity, sustainability, and better cities.",
      image: "assets/electric bus .webp",
      alt: "Kencid Mobility electric bike-share station supporting cleaner, low-emission urban mobility",
    },
    metrics: [["People moved", "Mobility access"], ["Vehicles deployed", "System growth"], ["Cities served", "Geographic reach"], ["Jobs created", "Economic contribution"], ["Technicians trained", "Workforce capacity"], ["Carbon reduced", "Sustainability"]],
    featureGrid: [
      ["Inclusion", "Ensuring mobility works for everyone."],
      ["Employment", "Creating jobs through manufacturing, operations, services, and supplier growth."],
      ["Skills development", "Building future design, engineering, technical, and operations talent."],
      ["Economic growth", "Supporting businesses, communities, institutions, and city productivity."],
      ["Environmental stewardship", "Lowering emissions through electric fleets, efficient routing, and cleaner operations."],
      ["Community partnerships", "Working with local governments, schools, and institutions to keep impact grounded in real needs."],
    ],
    featureGridHeading: "Where impact shows up",
    featureGridSummary: "Inclusion, jobs, skills, and growth move together across every Kencid Mobility deployment.",
    bands: [
      {
        heading: "Impact compounds across the system",
        copy: "A single accessible bus improves one route. A Universal Design platform, applied across vehicles, hubs, and services, compounds that improvement across an entire city.",
        stats: ["Every deployment adds data", "Every route informs the next design", "Every city shares the same standard"],
      },
    ],
    quote: {
      text: "Inclusion is not a side effect of good transport. It is the measure of it.",
      name: "Kencid Mobility",
      role: "Impact philosophy",
    },
  },
  investors: {
    title: "Investors",
    description: "A growth opportunity shaped by rapid urbanization, infrastructure development, digital mobility, industrialization, and ESG impact.",
    icon: "invest",
    hero: "assets/SLIDE 4.webp",
    intro: {
      heading: "Investing in mobility is investing in economic growth and social impact.",
      copy: "Africa's mobility sector represents one of the most significant growth opportunities of the twenty-first century. Rapid urbanization, growing populations, infrastructure development, digital transformation, and industrialization all create demand for innovative mobility solutions.",
      image: "assets/connecting-passengers-operators-cities.webp",
      alt: "Kencid Mobility platform connecting passengers, operators, and cities",
    },
    featureGrid: [
      ["Universal Design leadership", "A differentiated market position rooted in inclusive mobility from the beginning."],
      ["Manufacturing opportunity", "Industrial growth potential across vehicles, suppliers, training, quality, and service networks."],
      ["Smart mobility growth", "Passenger platforms, ticketing, fleet intelligence, data analytics, and operations centres."],
      ["Electric mobility", "Future-focused fleets, charging infrastructure, energy management, and sustainability outcomes."],
      ["Government and county demand", "A growing pipeline of public transport modernization and county mobility programs."],
      ["Defensible positioning", "Universal Design, manufacturing capability, and technology are difficult for competitors to replicate quickly."],
    ],
    featureGridHeading: "Where the opportunity concentrates",
    featureGridSummary: "Four to six areas define Kencid Mobility's near-term growth and long-term defensibility.",
    bands: [
      {
        heading: "Investment opportunities",
        copy: "Kencid Mobility's investment landscape includes manufacturing plants, electric mobility networks, smart mobility platforms, mobility hubs, research centres, academy development, and regional expansion.",
        stats: ["Manufacturing plant", "Electric mobility network", "Smart platform", "Regional expansion"],
      },
      {
        heading: "Why the timing works",
        copy: "Rapid urbanization, aging fleets, digital adoption, and rising ESG expectations are converging at the same moment across African cities.",
        list: ["Urbanization increasing transport demand", "Fleet renewal cycles due across operators", "Digital and cashless adoption accelerating", "ESG-linked capital seeking credible mobility projects"],
      },
    ],
  },
  partnerships: {
    title: "Partnerships",
    description: "Collaboration with governments, counties, manufacturers, technology companies, academia, development partners, operators, and investors.",
    icon: "people",
    hero: "assets/SLIDE 6 .webp",
    intro: {
      heading: "Transformation requires collaboration.",
      copy: "No single organization can transform mobility alone. Kencid Mobility actively seeks collaborations that accelerate innovation, implementation, and impact.",
      image: "assets/hero-terminal.webp",
      alt: "Modern mobility hub designed for inclusive passenger movement",
    },
    featureGrid: [
      ["Government partnerships", "Policy, public transport transformation, county mobility, and integrated transport systems."],
      ["Manufacturing partnerships", "Production, components, assembly, local content, supplier development, and industrialization."],
      ["Technology partnerships", "Digital innovation across passenger apps, ticketing, fleet management, data, and operations."],
      ["Academic and development partners", "Research, knowledge development, pilot projects, skills training, and impact-focused initiatives."],
      ["Operator partnerships", "Fleet operators gain access to Universal Design vehicles, smart tools, and shared maintenance capability."],
      ["Investor and finance partners", "Structuring manufacturing, fleet, and infrastructure investments alongside credible delivery partners."],
    ],
    featureGridHeading: "Ways to collaborate",
    featureGridSummary: "Every partner brings a different capability; together they accelerate the same mission.",
    bands: [
      {
        heading: "How a partnership takes shape",
        copy: "Kencid Mobility keeps partnership development structured and practical, moving from conversation to a working pilot with clear milestones.",
        list: ["Introduction and needs assessment", "Scoping workshop and joint planning", "Pilot agreement and success metrics", "Phased deployment and training", "Ongoing partnership review"],
      },
    ],
    quote: {
      text: "No single organization can transform mobility alone. The fastest path to impact runs through partnership.",
      name: "Kencid Mobility",
      role: "Partnerships philosophy",
    },
  },
  news: {
    title: "News and Blog",
    description: "Ideas shaping universal design, manufacturing, smart mobility, electric fleets, sustainability, and public transport innovation.",
    icon: "news",
    hero: "assets/SLIDE 1.webp",
    isNews: true,
  },
  article: {
    title: "Why Universal Design Changes the Economics of African Mobility",
    description: "Universal Design is not only a social commitment. It is a practical way to improve usability, confidence, safety, and system value.",
    icon: "news",
    hero: "assets/accessible-inclusive-reliable.webp",
    isArticle: true,
  },
  contact: {
    title: "Contact Us",
    description: "Start a conversation about government projects, investor enquiries, manufacturing partnerships, operations, media, or general collaboration.",
    icon: "contact",
    hero: "assets/ud terminal .webp",
    isContact: true,
  },
};

function navMarkup(activeSlug = "") {
  return sharedNav
    .map(([href, label]) => {
      const slug = href.replace(".html", "").replace("index", "home");
      const active = activeSlug === slug ? " class=\"is-active\"" : "";
      return `<a${active} href="${href}">${label}</a>`;
    })
    .join("");
}

function headerMarkup(activeSlug) {
  return `
    <header class="site-header">
      <a class="brand" href="index.html" aria-label="Kencid Mobility home">
        <img src="assets/kencid-logo.webp" alt="Kencid Mobility">
      </a>
      <nav class="main-nav" aria-label="Main navigation">${navMarkup(activeSlug)}</nav>
      <a class="contact-button" href="contact.html"><span>Contact Kencid</span>${arrowIcon}</a>
      <button class="menu-toggle" type="button" aria-label="Open menu" aria-controls="mobile-menu" aria-expanded="false">
        <span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span>
      </button>
    </header>
    <div class="mobile-backdrop" data-menu-close></div>
    <aside class="mobile-sidebar" id="mobile-menu" aria-hidden="true">
      <div class="sidebar-head">
        <img src="assets/kencid-logo.webp" alt="Kencid Mobility">
        <button class="sidebar-close" type="button" aria-label="Close menu" data-menu-close>&times;</button>
      </div>
      <nav class="sidebar-nav" aria-label="Mobile navigation">${navMarkup(activeSlug)}</nav>
      <a class="sidebar-contact" href="contact.html"><span>Contact Kencid</span>${arrowIcon}</a>
    </aside>
  `;
}

function footerMarkup() {
  return `
    <footer class="site-footer" id="contact" aria-label="Kencid Mobility footer">
      <div class="footer-main">
        <div class="footer-brand-block">
          <a class="footer-logo" href="index.html" aria-label="Kencid Mobility home"><img src="assets/kencid-logo.webp" alt="Kencid Mobility"></a>
          <p>Designing African mobility systems where vehicles, termini, infrastructure, and passenger technology work naturally for everyone.</p>
          <div class="footer-socials" aria-label="Social links">
            <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" focusable="false"><path d="M6.5 9.5V19" /><path d="M6.5 6.2v.1" /><path d="M11 19v-9.5" /><path d="M11 13.6c0-2.5 1.4-4.1 3.6-4.1 2 0 3.2 1.4 3.2 4V19" /></svg></a>
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" focusable="false"><path d="M14 8h2.2V4.8H14c-2.5 0-4 1.5-4 4V11H7.8v3.2H10V20h3.4v-5.8h2.4l.4-3.2h-2.8V8.9c0-.6.2-.9.6-.9Z" /></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" focusable="false"><path d="M4 8.5c.2-1.4 1.1-2.2 2.4-2.4 3.8-.4 7.4-.4 11.2 0 1.3.2 2.2 1 2.4 2.4.3 2.3.3 4.7 0 7-.2 1.4-1.1 2.2-2.4 2.4-3.8.4-7.4.4-11.2 0-1.3-.2-2.2-1-2.4-2.4-.3-2.3-.3-4.7 0-7Z" /><path d="m10 9.5 5 2.5-5 2.5v-5Z" /></svg></a>
          </div>
        </div>
        <nav class="footer-nav" aria-label="Footer navigation">
          <div><h3>Company</h3><a href="about.html">Who we are</a><a href="universal-design.html">Universal Design</a><a href="impact.html">Impact</a><a href="partnerships.html">Partner with us</a></div>
          <div><h3>Solutions</h3><a href="solutions.html">Universal vehicles</a><a href="terminals.html">Mobility hubs</a><a href="manufacturing.html">Manufacturing</a><a href="solutions.html#electric-mobility">Electric mobility</a></div>
          <div><h3>Resources</h3><a href="technology.html">Technology</a><a href="news.html">News and blog</a><a href="investors.html">Investor centre</a><a href="contact.html">Contact</a></div>
        </nav>
        <div class="footer-contact-card">
          <p>Contact Us</p>
          <ul class="footer-contact-list" aria-label="Contact routes">
            <li><span aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z" /><circle cx="12" cy="10" r="2.2" /></svg></span><span>Africa headquarters with future regional offices and mobility innovation hubs.</span></li>
            <li><span aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false"><path d="M5 6h14v12H5V6Z" /><path d="m5 7 7 6 7-6" /></svg></span><span>Government, investor, manufacturer, operator, media, and general enquiries.</span></li>
          </ul>
          <a class="footer-cta" href="partnerships.html"><span>Become a partner</span><svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M5 12h13" /><path d="m13 6 6 6-6 6" /></svg></a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 <span>KENCID Mobility</span>. All rights reserved.</p>
        <div><a href="about.html">Privacy Policy</a><a href="about.html">Terms of Use</a><a href="index.html">Sitemap</a></div>
      </div>
    </footer>
  `;
}

function heroMarkup(page) {
  return `
    <section class="page-hero">
      <img src="${page.hero}" alt="" fetchpriority="high" decoding="async">
      <div class="page-hero-shade" aria-hidden="true"></div>
      <div class="page-hero-copy">
        <span class="page-hero-icon">${icons[page.icon] || icons.bus}</span>
        <h1>${page.title}</h1>
        <p>${page.description}</p>
      </div>
    </section>
  `;
}

function introMarkup(page) {
  if (!page.intro) return "";
  return `
    <section class="page-section split-feature reveal-on-scroll">
      <div class="split-copy">
        <h2>${sectionTitle(page.intro.heading)}</h2>
        <p>${page.intro.copy}</p>
      </div>
      <figure class="split-media">
        <img src="${page.intro.image}" alt="${page.intro.alt}" loading="lazy" decoding="async">
      </figure>
    </section>
  `;
}

function featureGridMarkup(items = [], heading = "Built as one system", summary = "Each component is designed to support a complete passenger and operator journey.") {
  if (!items.length) return "";
  return `
    <section class="page-section feature-block reveal-on-scroll">
      <div class="section-heading narrow-heading">
        <h2>${sectionTitle(heading)}</h2>
        <p>${summary}</p>
      </div>
      <div class="page-card-grid">${items.map(([title, copy], index) => `<article class="page-card" style="--i:${index}">${featureIconMarkup(title)}<h3>${title}</h3><p>${copy}</p></article>`).join("")}</div>
    </section>
  `;
}

function galleryMarkup(page) {
  const items = page.gallery;
  if (!items || !items.length) return "";
  return `
    <section class="page-section feature-gallery reveal-on-scroll">
      <div class="section-heading narrow-heading">
        <h2>${sectionTitle(page.galleryHeading || "Designed down to the detail")}</h2>
        <p>${page.gallerySummary || "Every touchpoint is engineered, tested, and refined before it reaches a passenger."}</p>
      </div>
      <div class="gallery-grid">
        ${items.map(([image, caption], index) => `
          <figure class="gallery-item" style="--i:${index}">
            <img src="${image}" alt="${caption}" loading="lazy" decoding="async">
            <figcaption>${caption}</figcaption>
          </figure>
        `).join("")}
      </div>
    </section>
  `;
}

function quoteMarkup(quote) {
  if (!quote) return "";
  return `
    <section class="quote-band reveal-on-scroll">
      <span class="quote-mark" aria-hidden="true">&ldquo;</span>
      <blockquote>${quote.text}</blockquote>
      <cite>${quote.name}${quote.role ? `<span>${quote.role}</span>` : ""}</cite>
    </section>
  `;
}

function featureIconMarkup(title) {
  const normalizedTitle = title.toLowerCase();
  let icon = `<path d="M4 19.5V5m0 14.5h16" /><path d="m7 15 3.5-3.5 3 2.5L19 8" />`;

  if (normalizedTitle.includes("universal") || normalizedTitle.includes("inclusion") || normalizedTitle.includes("equitable")) {
    icon = `<circle cx="12" cy="5" r="2.2" /><path d="M4 9.5c4.9 1.4 11.1 1.4 16 0M12 7.5v5.2m0 0L8 20m4-7.3 4 7.3" />`;
  } else if (normalizedTitle.includes("manufacturing") || normalizedTitle.includes("vehicle")) {
    icon = `<path d="M3 20V9.5l5 3V9.5l5 3V5h5v15H3Z" /><path d="M7 16h2.5M12 16h2.5M17 16h2" />`;
  } else if (normalizedTitle.includes("smart") || normalizedTitle.includes("technology") || normalizedTitle.includes("communication")) {
    icon = `<rect x="6.5" y="2.8" width="11" height="18.4" rx="2.2" /><path d="M9.5 9.4a3.8 3.8 0 0 1 5 0M10.7 11.6a2 2 0 0 1 2.6 0" /><circle cx="12" cy="15" r="1" />`;
  } else if (normalizedTitle.includes("electric") || normalizedTitle.includes("sustainability")) {
    icon = `<path d="M13 2.8 5.8 13h5L10 21.2 18.2 9h-5L13 2.8Z" />`;
  } else if (normalizedTitle.includes("research") || normalizedTitle.includes("design")) {
    icon = `<path d="M4 16.5 15.7 4.8a2.2 2.2 0 0 1 3.1 3.1L7.1 19.6 3 21l1-4.5Z" /><path d="m13.8 6.7 3.5 3.5" />`;
  } else if (normalizedTitle.includes("passenger") || normalizedTitle.includes("flexibility")) {
    icon = `<path d="M5 6c0-1.8 1.2-2.8 3-3h8c1.8.2 3 1.2 3 3v10.5c0 1.4-1.1 2.5-2.5 2.5h-9A2.5 2.5 0 0 1 5 16.5V6Z" /><path d="M7.5 8.5h9M8 14h.1M16 14h.1M7 19v2M17 19v2" />`;
  } else if (normalizedTitle.includes("safety") || normalizedTitle.includes("tolerance")) {
    icon = `<path d="M12 3.2 19 6v5c0 5-3.3 8.4-7 9.8-3.7-1.4-7-4.8-7-9.8V6l7-2.8Z" /><path d="m9 12.2 2 2 4-4.4" />`;
  } else if (normalizedTitle.includes("employment") || normalizedTitle.includes("skills") || normalizedTitle.includes("development")) {
    icon = `<path d="M8.5 8V6.2A2.2 2.2 0 0 1 10.7 4h2.6a2.2 2.2 0 0 1 2.2 2.2V8" /><rect x="4" y="8" width="16" height="11" rx="2.2" /><path d="M9 13h6" />`;
  }

  return `<span class="page-card-icon" aria-hidden="true"><svg viewBox="0 0 24 24" focusable="false">${icon}</svg></span>`;
}

function bandsMarkup(bands = []) {
  return bands
    .map((band) => {
      const idAttr = band.heading.toLowerCase().includes("electric") ? " id=\"electric-mobility\"" : "";
      const listClass = band.stats ? "stat-list" : "check-list";
      const list = (band.stats || band.list || []).map((item, index) => `<li style="--i:${index}">${item}</li>`).join("");
      if (band.image) {
        return `
          <section class="page-band page-band-media reveal-on-scroll"${idAttr}>
            <figure class="band-media"><img src="${band.image}" alt="${band.imageAlt || band.heading}" loading="lazy" decoding="async"></figure>
            <div>
              <h2>${sectionTitle(band.heading)}</h2>
              <p>${band.copy}</p>
              <ul class="${listClass}">${list}</ul>
            </div>
          </section>
        `;
      }
      return `
        <section class="page-band reveal-on-scroll"${idAttr}>
          <div>
            <h2>${sectionTitle(band.heading)}</h2>
            <p>${band.copy}</p>
          </div>
          <ul class="${listClass}">${list}</ul>
        </section>
      `;
    })
    .join("");
}

function solutionCardsMarkup(cards = []) {
  if (!cards.length) return "";
  return `
    <section class="page-section solution-showcase reveal-on-scroll">
      ${cards.map(([title, copy, image], index) => `
        <article class="solution-row" style="--i:${index}" id="${index === 4 ? "mobility-hubs" : index === 5 ? "smart-mobility" : ""}">
          <img src="${image}" alt="${title}" loading="lazy" decoding="async">
          <div><h2>${sectionTitle(title)}</h2><p>${copy}</p><a class="text-link" href="contact.html">Start a project ${arrowIcon}</a></div>
        </article>
      `).join("")}
    </section>
  `;
}

function processMarkup(steps = [], heading = "From idea to impact", summary = "A structured process keeps design, engineering, validation, delivery, and continuous improvement connected.") {
  if (!steps.length) return "";
  return `
    <section class="page-section process-section reveal-on-scroll">
      <div class="section-heading narrow-heading">
        <h2>${sectionTitle(heading)}</h2>
        <p>${summary}</p>
      </div>
      <ol class="process-list">${steps.map((step, index) => `<li style="--i:${index}">${step}</li>`).join("")}</ol>
    </section>
  `;
}

function metricsMarkup(metrics = []) {
  if (!metrics.length) return "";
  return `
    <section class="metric-panel reveal-on-scroll">
      ${metrics.map(([value, label], index) => `<div style="--i:${index}"><strong>${value}</strong><span>${label}</span></div>`).join("")}
    </section>
  `;
}

function newsMarkup(page) {
  const categories = ["All", ...new Set(articles.map((article) => article.category))];
  return `
    ${heroMarkup(page)}
    <section class="news-hub page-section">
      <article class="featured-article reveal-on-scroll">
        <img src="${articles[0].image}" alt="${articles[0].title}" loading="lazy" decoding="async">
        <div><span>${articles[0].category} Â· ${articles[0].date}</span><h2>${sectionTitle(articles[0].title)}</h2><p>${articles[0].excerpt}</p><a class="hero-action about-cta" href="article.html"><span>Read article</span>${arrowIcon}</a></div>
      </article>
      <div class="news-tools" aria-label="News filters">
        <label><span class="visually-hidden">Search articles</span><input type="search" id="article-search" placeholder="Search articles"></label>
        <div class="category-filters">${categories.map((category, index) => `<button type="button" class="${index === 0 ? "is-active" : ""}" data-category="${category}">${category}</button>`).join("")}</div>
      </div>
      <div class="article-grid reveal-on-scroll" id="article-grid">
        ${articles.map((article, index) => articleCard(article, index)).join("")}
      </div>
      <button class="load-more" type="button">Load more articles</button>
    </section>
    ${newsletterMarkup()}
  `;
}

function articleCard(article, index = 0) {
  return `
    <article class="article-card" style="--i:${index}" data-category="${article.category}" data-title="${article.title.toLowerCase()}">
      <img src="${article.image}" alt="${article.title}" loading="lazy" decoding="async">
      <div>
        <span>${article.category} Â· ${article.date}</span>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <a class="text-link" href="article.html">Read article ${arrowIcon}</a>
      </div>
    </article>
  `;
}

function articleMarkup(page) {
  return `
    ${heroMarkup(page)}
    <article class="article-body">
      <div class="article-meta">Universal Design Â· July 2026 Â· 6 min read</div>
      <p class="article-lede">Kencid Mobility begins with a practical belief: when transport systems work naturally for the widest possible range of people, they become stronger systems for operators, cities, and investors too.</p>
      <h2>${sectionTitle("The cost of poor design is paid every day")}</h2>
      <p>Many transport systems are designed around a narrow idea of the average passenger. The result is high-effort boarding, confusing information, fixed seating, weak emergency communication, and spaces that treat some users as exceptions. Those barriers reduce independence, confidence, time, safety, and access to opportunity.</p>
      <figure><img src="assets/tactile guidance.webp" alt="Tactile guidance and accessible passenger movement inside a transport environment" loading="lazy" decoding="async"></figure>
      <h2>${sectionTitle("Universal Design improves the whole journey")}</h2>
      <p>Universal Design is not a separate accessibility layer. It shapes boarding, seating, circulation, tactile guidance, audio-visual information, emergency response, digital support, ticketing, fleet operations, and terminal design from the beginning.</p>
      <blockquote>When mobility works for everyone, society works better for everyone.</blockquote>
      <h2>${sectionTitle("Commercial value and social impact belong together")}</h2>
      <p>Better designed mobility can reduce uncertainty, improve passenger satisfaction, support safer operations, strengthen brand trust, and make public transport more attractive. Kencid Mobility rejects the false choice between commercial success and social impact.</p>
      <div class="share-row"><span>Share</span><a href="#">LinkedIn</a><a href="#">Facebook</a><a href="#">Email</a></div>
      <nav class="article-nav" aria-label="Article navigation"><a href="news.html">Previous: News and insights</a><a href="news.html">Next: Manufacturing for Africa</a></nav>
    </article>
    <section class="page-section reveal-on-scroll"><div class="section-heading narrow-heading"><h2>${sectionTitle("Related articles")}</h2></div><div class="article-grid">${articles.slice(1, 4).map((article, index) => articleCard(article, index)).join("")}</div></section>
  `;
}

function contactMarkup(page) {
  return `
    ${heroMarkup(page)}
    <section class="contact-layout page-section reveal-on-scroll">
      <div class="contact-intro">
        <h2>${sectionTitle("Every transformation begins with a conversation.")}</h2>
        <p>Whether you are a government, investor, operator, manufacturer, technology company, university, development partner, media organization, or community group, Kencid Mobility welcomes collaboration.</p>
        <div class="contact-cards">
          <article style="--i:0"><strong>Phone</strong><span>Available on request for qualified project and partnership conversations.</span></article>
          <article style="--i:1"><strong>Email</strong><span>Use the form to route your enquiry to the right Kencid Mobility team.</span></article>
          <article style="--i:2"><strong>Office location</strong><span>Africa headquarters, with future regional offices, manufacturing centres, research centres, training academies, and mobility innovation hubs.</span></article>
          <article style="--i:3"><strong>Business hours</strong><span>Project, investor, partnership, media, and general enquiries are reviewed during business days.</span></article>
          <article style="--i:4"><strong>Response time</strong><span>Most enquiries receive a first reply within three to five business days.</span></article>
          <article style="--i:5"><strong>Careers and media</strong><span>Send job applications and press requests through the form and select the closest inquiry type.</span></article>
        </div>
      </div>
      <form class="contact-form" novalidate>
        <div class="form-grid">
          <label>Full name<input name="name" autocomplete="name" required></label>
          <label>Email address<input type="email" name="email" autocomplete="email" required></label>
          <label>Phone number<input type="tel" name="phone" autocomplete="tel"></label>
          <label>Company or organization<input name="company" autocomplete="organization"></label>
          <label>Inquiry type<select name="type" required><option value="">Select one</option><option>Partnership inquiry</option><option>General inquiry</option><option>Investor inquiry</option><option>Government or county project</option><option>Manufacturing partnership</option><option>Media</option></select></label>
          <label>Subject<input name="subject" required></label>
        </div>
        <label>Message<textarea name="message" rows="6" required></textarea></label>
        <label class="consent"><input type="checkbox" required> <span>I consent to Kencid Mobility using this information to respond to my enquiry.</span></label>
        <button class="hero-action" type="submit"><span>Submit enquiry</span>${arrowIcon}</button>
        <p class="form-state" role="status" aria-live="polite"></p>
      </form>
    </section>
    <section class="map-section reveal-on-scroll"><div><h2>${sectionTitle("Africa headquarters and future global presence")}</h2><p>Regional offices, manufacturing centres, research centres, training academies, and mobility innovation hubs are part of Kencid Mobility's long-term global presence plan.</p></div></section>
    ${newsletterMarkup()}
  `;
}

function newsletterMarkup() {
  return `
    <section class="newsletter-section reveal-on-scroll">
      <div><h2>${sectionTitle("Stay close to the future of African mobility")}</h2><p>Receive Kencid Mobility updates on Universal Design, manufacturing, electric mobility, smart cities, and public transport innovation.</p></div>
      <form><label><span class="visually-hidden">Email address</span><input type="email" placeholder="Email address" required></label><button type="submit">Subscribe</button></form>
    </section>
  `;
}

function ctaMarkup() {
  return `
    <section class="global-cta reveal-on-scroll">
      <img src="assets/SLIDE 6 .webp" alt="" loading="lazy" decoding="async">
      <div class="global-cta-panel">
        <h2>${sectionTitle("Help Shape the Future of African Mobility")}</h2>
        <p>Partner with Kencid Mobility to build safer, more inclusive, sustainable, and future-ready transport systems for African cities.</p>
        <div><a class="hero-action" href="partnerships.html"><span>Learn how to become a partner</span>${arrowIcon}</a><a class="hero-action hero-action-secondary" href="contact.html"><span>Talk to our team</span>${arrowIcon}</a></div>
      </div>
    </section>
  `;
}

function whatsAppMarkup() {
  const message = encodeURIComponent("Hello Kencid Mobility, I would like to learn more about your mobility solutions.");
  return `<a class="whatsapp-float" href="https://wa.me/?text=${message}" target="_blank" rel="noopener" aria-label="Chat with us on WhatsApp"><span>Chat with us on WhatsApp.</span><svg viewBox="0 0 24 24" focusable="false" aria-hidden="true"><path d="M12 3.5a8.4 8.4 0 0 0-7.2 12.7L3.7 20l3.9-1a8.5 8.5 0 1 0 4.4-15.5Z" /><path d="M8.7 8.4c.2-.5.4-.5.8-.5h.6c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c-.2.2-.2.4 0 .7.5.9 1.2 1.7 2.2 2.2.3.2.5.2.7 0l.6-.6c.2-.2.4-.2.7-.1l1.6.7c.3.1.4.3.4.6 0 .5-.1 1-.5 1.4-.5.5-1.3.7-2.2.5-2.9-.6-5.9-3.5-6.6-6.4-.2-.8 0-1.5.5-2Z" /></svg></a>`;
}

function pageMarkup(slug, page) {
  if (page.isNews) return newsMarkup(page);
  if (page.isArticle) return articleMarkup(page);
  if (page.isContact) return contactMarkup(page);
  return [
    heroMarkup(page),
    introMarkup(page),
    metricsMarkup(page.metrics),
    solutionCardsMarkup(page.solutionCards),
    processMarkup(page.process, page.processHeading, page.processSummary),
    featureGridMarkup(page.featureGrid, page.featureGridHeading, page.featureGridSummary),
    galleryMarkup(page),
    bandsMarkup(page.bands),
    quoteMarkup(page.quote),
  ].join("");
}

function initNewsControls() {
  const grid = document.querySelector("#article-grid");
  if (!grid) return;
  const buttons = [...document.querySelectorAll("[data-category]")];
  const search = document.querySelector("#article-search");
  function applyFilters() {
    const category = buttons.find((button) => button.classList.contains("is-active"))?.dataset.category || "All";
    const term = (search?.value || "").trim().toLowerCase();
    grid.querySelectorAll(".article-card").forEach((card) => {
      const categoryMatch = category === "All" || card.dataset.category === category;
      const searchMatch = !term || card.dataset.title.includes(term) || card.textContent.toLowerCase().includes(term);
      card.hidden = !(categoryMatch && searchMatch);
    });
  }
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      applyFilters();
    });
  });
  search?.addEventListener("input", applyFilters);
  document.querySelector(".load-more")?.addEventListener("click", (event) => {
    event.currentTarget.textContent = "All current articles are visible";
    event.currentTarget.disabled = true;
  });
}

function initForms() {
  document.querySelectorAll(".contact-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const state = form.querySelector(".form-state");
      if (!form.checkValidity()) {
        state.textContent = "Please complete the required fields before submitting.";
        state.className = "form-state is-error";
        form.reportValidity();
        return;
      }
      form.reset();
      state.textContent = "Thank you. Your enquiry has been prepared for the Kencid Mobility team.";
      state.className = "form-state is-success";
    });
  });
}

function initReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const targets = document.querySelectorAll(".reveal-on-scroll");
  if (!targets.length || !("IntersectionObserver" in window)) return;
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      obs.unobserve(entry.target);
    });
  }, { threshold: 0.14 });
  targets.forEach((target) => observer.observe(target));
}

function renderPage() {
  const root = document.querySelector("[data-kencid-page]");
  const slug = root?.dataset.kencidPage;
  if (!root || !pages[slug]) return false;
  const active = slug === "article" ? "news" : slug;
  document.title = `${pages[slug].title} | Kencid Mobility`;
  root.outerHTML = `${headerMarkup(active)}<main class="site-shell page-shell">${pageMarkup(slug, pages[slug])}${ctaMarkup()}</main>${footerMarkup()}${whatsAppMarkup()}`;
  initNewsControls();
  initForms();
  initReveal();
  return true;
}

function upgradeHome() {
  const footer = document.querySelector(".site-footer");
  if (footer && !document.querySelector(".global-cta")) {
    footer.insertAdjacentHTML("beforebegin", ctaMarkup());
  }
  if (!document.querySelector(".whatsapp-float")) {
    document.body.insertAdjacentHTML("beforeend", whatsAppMarkup());
  }
  initReveal();
}

if (!renderPage()) {
  upgradeHome();
}
