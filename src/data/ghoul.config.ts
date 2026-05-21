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
}

export const config: GhoulConfig = {
  id: "garden",
  name: "GARDEN GHOUL",
  tagline: "Nature's Cleanup Crew",
  description:
    "Where nature grows wild, GARDEN GHOUL tends with precision. From pesticide application to plant hydration.",
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
      id: "zen",
      name: "ZEN GHOUL",
      domain: "https://www.zenghoul.com",
      icon: "🧘",
      color: "#a855f7",
      realm: "The Tranquil Gardens",
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
      id: "tradie",
      name: "TRADIE GHOUL",
      domain: "https://www.tradieghoul.com",
      icon: "🔧",
      color: "#eab308",
      realm: "The Industrial Wastes",
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
      id: "beauty",
      name: "BEAUTY GHOUL",
      domain: "https://www.beautyghoul.com",
      icon: "💄",
      color: "#ec4899",
      realm: "The Glamour Dimension",
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
      id: "scholar",
      name: "SCHOLAR GHOUL",
      domain: "https://www.scholarghoul.com",
      icon: "📚",
      color: "#f97316",
      realm: "The Infinite Library",
      live: false,
    },
    {
      id: "toddler",
      name: "TODDLER GHOUL",
      domain: "https://www.toddlerghoul.com",
      icon: "🍼",
      color: "#3b82f6",
      realm: "The Playful Realm",
      live: false,
    },
  ],

  cta: {
    headline: "Investor Inquiries",
    subheadline: "Join the GHOULVERSE portfolio. Request the full product deck and financial projections.",
    buttonText: "Request Deck",
    placeholderText: "Enter your email...",
  },

  gameUrl: "https://www.ghoulverse.com/play/",

  social: {
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },

  science: {
    title: "The Science",
    subtitle: "Organic Ectoplasm™",
    description: "Every GARDEN GHOUL product is powered by Organic Ectoplasm™ — a proprietary bio-enzyme complex derived from beneficial soil microbiota. This technology accelerates natural processes without introducing synthetic chemicals into the ecosystem.",
    adaptation: "For the Verdant Wilds, we cultivated a soil-native variant that works in harmony with mycorrhizal networks and beneficial bacteria — strengthening the garden's natural defence system while eliminating threats.",
    stats: [
      { label: "Organic Certification", value: "ACO" },
      { label: "Pollinator Safety", value: "100%" },
      { label: "Biodegradation", value: "28 days" },
      { label: "Soil Health Improvement", value: "+34%" },
    ],
  },

  marketSize: "$120B global gardening & horticulture market",
  traction: [
    { label: "Formulations", value: "9 Complete", status: "complete" },
    { label: "Manufacturing", value: "Partners Secured", status: "complete" },
    { label: "Trademark", value: "IP Australia — Accepted", status: "complete" },
    { label: "Retail", value: "In Negotiation", status: "in-progress" },
  ],
  ipStatus: "Trademark filed — Class 1 (fertilisers & gardening chemicals), Class 31 (plants & seeds) and Class 7 (garden tools).",
  ipClasses: [
    "Class 1 — Fertilisers, chemicals for gardening & horticulture",
    "Class 31 — Plants, seeds, flowers & gardening produce",
    "Class 7 — Garden tools, lawn care machines & power equipment",
    "Class 21 — Gardening implements, pots & planters",
  ],
  roadmap: [
    { phase: "Phase 1", title: "Brand Launch", items: ["6 sites live", "54 SKUs formulated", "GOO RUNNER game launched"], status: "complete" },
    { phase: "Phase 2", title: "Retail Partnerships", items: ["Bunnings Warehouse", "Flower Power", "Plant Nursery Network"], status: "in-progress" },
    { phase: "Phase 3", title: "International", items: ["US TM filing", "UK/EU expansion", "Amazon FBA launch"], status: "upcoming" },
    { phase: "Phase 4", title: "Game Monetisation", items: ["In-app purchases", "Character skins", "NFT collectibles"], status: "upcoming" },
    { phase: "Phase 5", title: "New Ghouls", items: ["Toddler Ghoul", "Scholar Ghoul", "2 mystery verticals"], status: "upcoming" },
  ],
};
