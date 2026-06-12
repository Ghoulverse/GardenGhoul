/**
 * Ghoul Site Configuration
 */

export interface CrossLink {
  id: string;
  name: string;
  domain: string;
  icon: string;
  color: string;
  realm: string;
  live: boolean;
}

export interface Product {
  name: string;
  tagline: string;
  description: string;
  category: 'core' | 'pro' | 'tool' | 'refill' | 'limited';
  volume: string;
  price: string;
  features: string[];
  heroIngredient?: string;
}

export interface GhoulConfig {
  id: string;
  name: string;
  tagline: string;
  description: string;
  domain: string;
  icon: string;
  isLeader: boolean;
  products: Product[];
  crossLinks: CrossLink[];
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    placeholderText: string;
  };
  gameUrl: string;
  social: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
  science: {
    title: string;
    subtitle: string;
    description: string;
    adaptation: string;
    stats: { label: string; value: string }[];
  };
  marketSize: string;
  traction: { label: string; value: string; status: 'complete' | 'in-progress' | 'upcoming' }[];
  ipStatus: string;
  ipClasses: string[];
  roadmap: { phase: string; title: string; items: string[]; status: 'complete' | 'in-progress' | 'upcoming' }[];
  fundingAsk: string;
  valuation: string;
  equityOffered: string;
  projectedRevenue: { year: string; amount: string; sources: string }[];
  roiTarget: string;
  partnerships: { type: string; description: string }[];
  revenueStreams: { stream: string; description: string; timeline: string }[];
}

export const config: GhoulConfig = {
  id: "garden",
  name: "GARDEN GHOUL",
  tagline: "Nature's Consumer Champion",
  description: "The garden, outdoor, and lawn-care vertical. GARDEN GHOUL balances performance with ecological responsibility.",
  domain: "https://www.gardenghoul.com",
  icon: "🌿",
  isLeader: false,

  products: [
    {
      name: "Organic Pesticide",
      tagline: "Nature's defence, not nature's enemy",
      description: "Botanical insecticide derived from chrysanthemum extract and neem oil. Targets aphids, mites, and caterpillars without harming pollinators.",
      category: "core",
      volume: "1L Spray",
      price: "$24.99 AUD",
      features: ["Bee-safe formula", "Rain-resistant 48hrs", "Organic certified"],
      heroIngredient: "Organic Ectoplasm™",
    },
    {
      name: "Plant Rehydration Spray",
      tagline: "Revive the wilted in 24 hours",
      description: "Emergency hydration mist for stressed, drought-damaged, or transplanted plants. Contains humectants that bind moisture to leaf and root tissue.",
      category: "core",
      volume: "750ml",
      price: "$19.99 AUD",
      features: ["Root & leaf dual action", "Humectant complex", "Indoor & outdoor"],
      heroIngredient: "Organic Ectoplasm™",
    },
    {
      name: "Soil pH Balancer",
      tagline: "The right chemistry for growth",
      description: "Gradual-release granules that correct acidic or alkaline soil over 14 days. Contains trace minerals to replenish depleted beds.",
      category: "core",
      volume: "500g",
      price: "$22.99 AUD",
      features: ["14-day gradual release", "Trace mineral boost", "Safe for edibles"],
      heroIngredient: "Organic Ectoplasm™",
    },
    {
      name: "Compost Accelerator",
      tagline: "Turn waste to black gold in half the time",
      description: "Concentrated microbial inoculant for compost bins and tumblers. Speeds decomposition of green and brown matter while eliminating odours.",
      category: "pro",
      volume: "1kg",
      price: "$34.99 AUD",
      features: ["2x faster breakdown", "Odour neutralising", "Worm-safe"],
      heroIngredient: "Organic Ectoplasm™",
    },
    {
      name: "Garden Tool Sanitizer",
      tagline: "Clean tools, healthy plants",
      description: "Prevents cross-contamination between plants by sanitising shears, trowels, and pots. Kills fungal spores and bacterial blight.",
      category: "pro",
      volume: "500ml",
      price: "$18.99 AUD",
      features: ["Fungal spore kill", "Non-corrosive on metal", "Ready-to-use"],
      heroIngredient: "Organic Ectoplasm™",
    },
    {
      name: "Precision Sprayer Wand",
      tagline: "Targeted application, zero waste",
      description: "Adjustable-pressure wand with 3 spray patterns. Attaches to standard Garden Ghoul bottles for precise, drift-free application.",
      category: "tool",
      volume: "Tool",
      price: "$29.99 AUD",
      features: ["3 spray patterns", "Universal bottle fit", "Extendable reach"],
    },
    {
      name: "The Garden Tote",
      tagline: "Everything the ghoul needs",
      description: "Heavy-duty canvas carry-all with waterproof base, tool loops, and padded shoulder strap. Holds a full product loadout.",
      category: "tool",
      volume: "Bag",
      price: "$44.99 AUD",
      features: ["Waterproof base", "12 tool loops", "Padded strap"],
    },
    {
      name: "Organic Pesticide Refill",
      tagline: "Same strength, less waste",
      description: "Bulk 2L refill pouch for the Organic Pesticide spray system. Reduces plastic use by 70% versus buying new bottles.",
      category: "refill",
      volume: "2L Pouch",
      price: "$39.99 AUD",
      features: ["70% less plastic", "Spout-fill design", "Same concentration"],
      heroIngredient: "Organic Ectoplasm™",
    },
    {
      name: "Spring Bloom Booster",
      tagline: "Limited spring release",
      description: "A seasonal formulation rich in phosphorus and potassium for explosive spring flowering. Available March through May only.",
      category: "limited",
      volume: "1L",
      price: "$27.99 AUD",
      features: ["High P-K ratio", "Seasonal only", "Flower-specific"],
      heroIngredient: "Organic Ectoplasm™",
    },
  ],

  crossLinks: [
    {
      id: "ghoulverse",
      name: "GHOULVERSE",
      domain: "https://www.ghoulverse.com",
      icon: "🌌",
      color: "#00f0ff",
      realm: "The Universe",
      live: true,
    },
    {
      id: "goo",
      name: "GOO GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/goo/",
      icon: "👻",
      color: "#ff00ff",
      realm: "The Goo Dimension",
      live: true,
    },
    {
      id: "party",
      name: "PARTY GHOUL",
      domain: "https://www.partyghoul.com",
      icon: "🎉",
      color: "#ff00ff",
      realm: "The Neon District",
      live: true,
    },
    {
      id: "beauty",
      name: "BEAUTY GHOUL",
      domain: "https://www.beautyghoul.com",
      icon: "💄",
      color: "#ec4899",
      realm: "The Glamour Dimension",
      live: true,
    },
    {
      id: "garden",
      name: "GARDEN GHOUL",
      domain: "https://www.gardenghoul.com",
      icon: "🌿",
      color: "#22c55e",
      realm: "The Verdant Wilds",
      live: true,
    },
    {
      id: "zen",
      name: "ZEN GHOUL",
      domain: "https://www.zenghoul.com",
      icon: "🧘",
      color: "#a855f7",
      realm: "The Tranquil Gardens",
      live: true,
    },
    {
      id: "tradie",
      name: "TRADIE GHOUL",
      domain: "https://www.tradieghoul.com",
      icon: "🔧",
      color: "#eab308",
      realm: "The Industrial Wastes",
      live: true,
    },
    {
      id: "geek",
      name: "GEEK GHOUL",
      domain: "https://www.geekghoul.com",
      icon: "💻",
      color: "#00d4ff",
      realm: "The Mainframe",
      live: true,
    },
    {
      id: "sport",
      name: "SPORT GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/sport/",
      icon: "🏆",
      color: "#f97316",
      realm: "The Arena",
      live: false,
    },
    {
      id: "googoo",
      name: "GOO GOO",
      domain: "https://www.googooghoul.com",
      icon: "🍼",
      color: "#3b82f6",
      realm: "The Nursery",
      live: true,
    },
    {
      id: "kid",
      name: "KID GHOUL",
      domain: "https://www.kidghoul.com",
      icon: "🧒",
      color: "#ef4444",
      realm: "The Playground",
      live: true,
    },
    {
      id: "teen",
      name: "TEEN GHOUL",
      domain: "https://www.teenghoul.com",
      icon: "🎧",
      color: "#8b5cf6",
      realm: "The Hangout",
      live: true,
    },
    {
      id: "scholar",
      name: "BOOK GHOUL",
      domain: "https://www.ghoulverse.com/ghouls/scholar/",
      icon: "📚",
      color: "#f97316",
      realm: "The Infinite Library",
      live: false,
    },
  ],

  cta: {
    headline: "Investor Inquiries",
    subheadline: "Join the GHOULVERSE portfolio. Request the full investor deck and financial projections.",
    buttonText: "Request Deck",
    placeholderText: "Enter your email...",
  },

  gameUrl: "https://www.ghoulverse.com/play/",

  social: {
    // Social accounts launching Q2 2026 — follow @ghoulverse
  },

  science: {
    title: "The Science",
    subtitle: "Organic Ectoplasm™",
    description: "Every GARDEN GHOUL product is powered by Organic Ectoplasm™ — a proprietary bio-enzyme complex derived from beneficial soil microbiota. This technology accelerates natural processes without introducing synthetic chemicals into the ecosystem.",
    adaptation: "For the Verdant Wilds, we cultivate solutions that work in harmony with mycorrhizal networks and beneficial soil life — strengthening the garden's natural defence system while managing pests and weeds.",
    stats: [
      { label: "Organic Certification", value: "ACO" },
      { label: "Pollinator Safety", value: "100%" },
      { label: "Biodegradation", value: "28 days" },
      { label: "Soil Health Improvement", value: "+34%" },
    ],
  },

  marketSize: "$120B global gardening & horticulture market",
  traction: [
    { label: "Character Websites", value: "10 Live", status: "complete" },
    { label: "GOO GHOUL™ Trademark", value: "IP Australia — Accepted", status: "complete" },
    { label: "GHOULVERSE Game", value: "Live", status: "complete" },
    { label: "Brand Partnerships", value: "Seeking First Deals", status: "upcoming" },
  ],
  ipStatus: "Trademark classes identified — Class 1 (fertilisers & gardening chemicals), Class 31 (plants & seeds) and Class 7 (garden tools). Filing planned post-funding.",
  ipClasses: [
    "Class 1 — Fertilisers, chemicals for gardening & horticulture",
    "Class 31 — Plants, seeds, flowers & gardening produce",
    "Class 7 — Garden tools, lawn care machines & power equipment",
    "Class 21 — Gardening implements, pots & planters",
  ],
  roadmap: [
    { phase: "Phase 1", title: "Foundation", items: ["12 character websites live", "GOO GHOUL™ Class 3 (AU) filed", "GHOULVERSE game launched"], status: "complete" },
    { phase: "Phase 1.5", title: "International IP", items: ["US trademark via Madrid Protocol", "EU trademark filing", "Defensive name registrations"], status: "in-progress" },
    { phase: "Phase 2", title: "Mascot Creation", items: ["24 professional mascots (2 per ghoul)", "$120K investment across 12 characters"], status: "upcoming" },
    { phase: "Phase 3", title: "Partnerships & Revenue", items: ["Sector sponsorships", "Affiliate deals", "Event appearances", "Influencer recruitment"], status: "upcoming" },
    { phase: "Phase 4", title: "Entertainment Scale", items: ["Animated series pilot", "Convention circuit", "Merchandise licensing"], status: "upcoming" },
    { phase: "Phase 5", title: "Product Launch", items: ["GOO GHOUL flagship household line", "Vertical-specific owned product lines"], status: "upcoming" },
  ],

  fundingAsk: "$250,000 AUD",
  valuation: "$1,250,000 pre-money",
  equityOffered: "20%",
  projectedRevenue: [
    { year: "Year 1", amount: "$200,000", sources: "Brand sponsorships, event appearances, affiliate commissions" },
    { year: "Year 2", amount: "$560,000", sources: "Licensing, events, merch royalties, content" },
    { year: "Year 3", amount: "$1,200,000", sources: "Full licensing engine + product sales" },
  ],
  roiTarget: "5–8x over 3–5 years (40–70% IRR)",
  partnerships: [
    { type: "Brand Sponsorships", description: "Existing companies in each vertical pay to associate with our character IP at events and online." },
    { type: "Affiliate Marketing", description: "Partner products featured on ghoul websites — we earn commission on referred sales." },
    { type: "Event Appearances", description: "Mascots appear at sports events, conventions, retail launches — appearance fees + brand exposure." },
    { type: "Licensing", description: "Brands license ghoul characters for their own marketing, packaging, and promotions." },
  ],
  revenueStreams: [
    { stream: "Sponsorships", description: "Sector-specific brand deals per ghoul", timeline: "Year 1" },
    { stream: "Events", description: "Mascot appearances and activations", timeline: "Year 1" },
    { stream: "Affiliate", description: "Commission on partner product sales", timeline: "Year 1" },
    { stream: "Licensing", description: "Character IP licensing to brands", timeline: "Year 2" },
    { stream: "Merchandise", description: "Royalties on plush, apparel, accessories", timeline: "Year 2" },
    { stream: "Animation", description: "YouTube/streaming ad revenue, distribution deals", timeline: "Year 2" },
    { stream: "Products", description: "Owned product lines launched per vertical, starting with GOO GHOUL", timeline: "Year 3" },
  ],
};
