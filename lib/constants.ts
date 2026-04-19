// ALL WEBSITE COPY LIVES HERE
// Client: paste your final copy from the provided .docx into the strings below
// Do not edit any component files — only this file needs to be updated

export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type CharacterCardCopy = {
  tag: string;
  title: string;
  body: string;
  brandFit: string;
  highlight?: boolean;
};

export type PackageCopy = {
  name: string;
  title: string;
  price: string;
  savings: string;
  featured?: boolean;
};

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Content", href: "https://www.tiktok.com/@richtrosales", external: true },
  { label: "Work With Us", href: "/brands" },
  { label: "Press", href: "/press" },
];

export const COPY = {
  // COPY: Hero Eyebrow
  heroEyebrow: "",
  // COPY: Hero Headline
  heroHeadline: "1.1 million people are watching.",
  // COPY: Hero Headline Accent
  heroHeadlineAccent: "Are you next?",
  // COPY: Hero Subheadline
  heroSubheadline:
    "Rich Rosales is the creator brands choose when they need tech culture told with a punchline. 59.5 million likes. 1.1 million followers. And a character that turns complex products into content people actually finish.",

  // COPY: Stat 1
  statOneNumber: "59.5M",
  statOneLabel: "TikTok Likes",
  // COPY: Stat 2
  statTwoNumber: "1.1M",
  statTwoLabel: "Followers",
  // COPY: Stat 3
  statThreeNumber: "16M",
  statThreeLabel: "Single Video Peak",
  // COPY: Stat 4
  statFourNumber: "12.4%",
  statFourLabel: "Engagement Rate",

  // COPY: Section Eyebrow — Who Is Rich
  whoIsRichEyebrow: "",
  // COPY: Who Is Rich Headline
  whoIsRichHeadline:
    "Rich Rosales built one of the internet's most recognisable comedy characters — the Rich Tech Bro — from a single idea: what if the most relatable person in tech was also the funniest?",
  // COPY: Who Is Rich Body
  whoIsRichBodyParagraphOne:
    "With a decade of stand-up comedy, training at The Groundlings, and screen credits on NCIS and The Orville, Rich brings real craft to a space flooded with trend-chasers. His content doesn't just get views. It gets remembered.",
  whoIsRichBodyParagraphTwo: "Based in NYC. Performing everywhere else.",
  // COPY: Who Is Rich Pull Quote
  whoIsRichPullQuote:
    "Rich Rosales built one of the internet's most recognisable comedy characters — the Rich Tech Bro.",

  // COPY: Character Section Eyebrow
  characterEyebrow: "",
  // COPY: Character Section Headline
  characterHeadline:
    "The Rich Tech Bro is the guy who has made it — and is somehow still the most relatable person in the room.",
  // COPY: Character Section Sub
  characterSubheadline:
    "He talks about equity like it's small talk. He has strong opinions about standing desks. He Slacks you at 11pm and calls it async culture. Sound familiar? Good. So does your audience.",

  // COPY: Why Brands Eyebrow
  whyBrandsEyebrow: "Why Brands Choose Rich?",
  // COPY: Why Brands Quote
  whyBrandsQuote: "Because entertainment is the only format that survives the scroll.",
  // COPY: Why Brands Attribution
  whyBrandsAttribution:
    "Your audience has seen every banner ad. They've skipped every pre-roll. But they've watched Rich's videos twice and sent them to four people. When your brand lives inside content that people choose to watch — and then share — that's not advertising. That's culture.",

  // COPY: About Page Eyebrow
  aboutEyebrow: "",
  // COPY: About Page Headline
  aboutHeadline: "Rich Rosales didn't set out to build a media company. He set out to make people laugh.",
  // COPY: About Page Sub
  aboutSubheadline:
    "Born in San Francisco, raised in San Diego, Rich started doing stand-up comedy at 16 — dragged to his first open mic by a friend who signed him up without asking.",

  // COPY: About Bio Paragraph 1-5
  aboutBioParagraphOne:
    "He bombed. He came back the next week. Then the week after. For ten years, he showed up to clubs, open mics, and late-night sets across Los Angeles until the craft stopped being terrifying and started being home.",
  aboutBioParagraphTwo:
    "Along the way, he trained at The Groundlings Theatre — the institution behind generations of the world's best comedic performers — and landed acting roles on NCIS and The Orville, establishing himself as a working actor with a future in both performance and content.",
  aboutBioParagraphThree:
    "In April 2021, he posted a short comedy video about privilege on TikTok. Then another. Then one that got 16 million views and 4 million likes. By the time the algorithm caught up, Rich had built a character, an audience, and a brand that has accumulated over 59.5 million likes without a single paid growth strategy.",
  aboutBioParagraphFour:
    "Today he runs a content and entertainment company built on the simple idea that the funniest takes on tech culture also happen to be the truest ones. He lives in NYC, and yes, he still does stand-up.",
  aboutBioParagraphFive: "",

  // COPY: Credential 1-6
  credentialOne: "",
  credentialTwo: "",
  credentialThree: "",
  credentialFour: "",
  credentialFive: "",
  credentialSix: "",

  // COPY: Brands Page Headline
  brandsHeadline: "Let's build something people actually watch.",
  // COPY: Brands Page Sub
  brandsSubheadline:
    "Rich Rosales creates sponsored content that doesn't feel sponsored. His character is already talking about the tech world your brand lives in — the software, the gadgets, the culture, the chaos. The best integrations don't interrupt the story. They become part of it.",

  // COPY: Engagement Rate Stat
  engagementRateStat: "1.1 million",
  // COPY: Engagement Rate Label
  engagementRateLabel: "People are watching",
  // COPY: Engagement Rate Context
  engagementRateContext:
    "We work with a select number of brand partners each month to ensure every piece of content gets the attention it deserves. If you're building something in the tech, productivity, lifestyle, or consumer space — let's talk.",

  // COPY: Packages Headline
  packagesHeadline: "Partnerships We Offer",
  // COPY: Packages Sub
  packagesSubheadline: "",
  // COPY: Annual Banner
  annualPartnershipBanner:
    "Annual ambassador deals — Rich becomes the face of your brand for a full year",

  // COPY: Offerings List (5 bullet items)
  offeringOne: "Dedicated videos — Rich builds a full piece of content around your brand",
  offeringTwo: "Product integrations — your brand appears naturally within existing content",
  offeringThree:
    "Campaign packages — multi-platform, multi-post campaigns over 30–90 days",
  offeringFour:
    "Annual ambassador deals — Rich becomes the face of your brand for a full year",
  offeringFive: "Content strategy consulting — we help your team think like creators",

  // COPY: Brands CTA Headline
  brandsCtaHeadline: "Ready to reach 1.1 million people who actually care about tech?",
  // COPY: Brands CTA Sub
  brandsCtaSubheadline:
    "Download our media kit or email us directly at rich@storagedreamsstudios.com. We respond within 24 hours. We close within a week.",

  // COPY: Press Page Headline
  pressHeadline: "Rich in the media",
  // COPY: Press Enquiries Headline
  pressEnquiriesHeadline: "For interviews, features, podcast appearances, and media requests:",
  // COPY: Press Enquiries Body
  pressEnquiriesBody:
    "rich@storagedreamsstudios.com\n\nFor TV, film, and speaking engagements: contact LBI Entertainment via storagedreamsstudios.com",

  // COPY: Contact Headline
  contactHeadline: "Ready to reach 1.1 million people who actually care about tech?",
  // COPY: Contact Sub
  contactSubheadline:
    "Download our media kit or email us directly at rich@storagedreamsstudios.com. We respond within 24 hours. We close within a week.",

  // COPY: Contact Detail 1-4 Label + Value
  contactDetailOneLabel: "Email",
  contactDetailOneValue: "rich@storagedreamsstudios.com",
  contactDetailTwoLabel: "Studio",
  contactDetailTwoValue: "Storage Dreams Studios",
  contactDetailThreeLabel: "Location",
  contactDetailThreeValue: "Austin, Texas",
  contactDetailFourLabel: "Management",
  contactDetailFourValue: "Managed by Veymont Ventures LLC",
} as const;

export const CHARACTER_CARDS: CharacterCardCopy[] = [
  // COPY: Character Card 1 Title / Body / Brand Fit
  {
    tag: "Character",
    title: "The Rich Tech Bro",
    body: "The Rich Tech Bro is the guy who has made it — and is somehow still the most relatable person in the room.",
    brandFit: "Built for culture-first product storytelling",
  },
  // COPY: Character Card 2 Title / Body / Brand Fit
  {
    tag: "Voice",
    title: "Tech Culture Through Comedy",
    body: "He talks about equity like it's small talk. He has strong opinions about standing desks.",
    brandFit: "Natural fit for software and productivity brands",
  },
  // COPY: Character Card 3 Title / Body / Brand Fit
  {
    tag: "Behavior",
    title: "Hyper-Recognisable Habits",
    body: "He Slacks you at 11pm and calls it async culture.",
    brandFit: "Turns relatable habits into watchable moments",
  },
  // COPY: Character Card 4 Title / Body / Brand Fit
  {
    tag: "Audience",
    title: "Instant Recognition",
    body: "Sound familiar? Good. So does your audience.",
    brandFit: "High resonance with tech and lifestyle viewers",
  },
  // COPY: Character Card 5 Title / Body / Brand Fit
  {
    tag: "Proof",
    title: "Entertainment Wins Attention",
    body: "Because entertainment is the only format that survives the scroll.",
    brandFit: "Built to outperform ad-fatigued channels",
  },
  // COPY: Character Card 6 Title / Body / Brand Fit
  {
    tag: "Positioning",
    title: "Culture Over Advertising",
    body: "When your brand lives inside content that people choose to watch — and then share — that's not advertising. That's culture.",
    brandFit: "Most effective for brand partnerships",
    highlight: true,
  },
];

export const DEMOGRAPHIC_STATS = [
  // COPY: Demo Stat 1 Number + Label
  { number: "1.1M", label: "Followers" },
  // COPY: Demo Stat 2 Number + Label
  { number: "59.5M", label: "TikTok Likes" },
  // COPY: Demo Stat 3 Number + Label
  { number: "16M", label: "Single Video Peak" },
  // COPY: Demo Stat 4 Number + Label
  { number: "12.4%", label: "Engagement Rate" },
] as const;

export const PLATFORM_ROWS = [
  // COPY: Platform Row 1
  {
    platform: "TikTok",
    followers: "1.1M",
    avgViews: "—",
    engagementRate: "12.4%",
    peak: "16M",
  },
  // COPY: Platform Row 2
  {
    platform: "Instagram",
    followers: "—",
    avgViews: "—",
    engagementRate: "—",
    peak: "—",
  },
  // COPY: Platform Row 3
  {
    platform: "YouTube",
    followers: "—",
    avgViews: "—",
    engagementRate: "—",
    peak: "—",
  },
] as const;

export const PACKAGES: PackageCopy[] = [
  // COPY: Package 1 Name / Title / Price / Savings
  {
    name: "Offer",
    title: "Dedicated videos",
    price: "",
    savings: "Rich builds a full piece of content around your brand",
  },
  // COPY: Package 2 Name / Title / Price / Savings
  {
    name: "Offer",
    title: "Product integrations",
    price: "",
    savings: "Your brand appears naturally within existing content",
    featured: true,
  },
  // COPY: Package 3 Name / Title / Price / Savings
  {
    name: "Offer",
    title: "Campaign packages",
    price: "",
    savings: "Multi-platform, multi-post campaigns over 30–90 days",
  },
  // COPY: Package 4 Name / Title / Price / Savings
  {
    name: "Offer",
    title: "Content strategy consulting",
    price: "",
    savings: "We help your team think like creators",
  },
];

export const PRESS_CHANNELS = [
  // COPY: Press Channel 1 Title + Body
  {
    title: "Interviews",
    body: "For interviews, features, podcast appearances, and media requests: rich@storagedreamsstudios.com",
  },
  // COPY: Press Channel 2 Title + Body
  {
    title: "Features",
    body: "Press and editorial enquiries can be directed to rich@storagedreamsstudios.com",
  },
  // COPY: Press Channel 3 Title + Body
  {
    title: "TV, Film, Speaking",
    body: "For TV, film, and speaking engagements: contact LBI Entertainment via storagedreamsstudios.com",
  },
] as const;

// COPY: Dropdown Option 1-5
export const DROPDOWN_OPTIONS = [
  "Dedicated videos",
  "Product integrations",
  "Campaign packages",
  "Annual ambassador deals",
  "Content strategy consulting",
] as const;
