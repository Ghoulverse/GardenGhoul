/**
 * Ghoul Site Configuration
 * 
 * This is the single source of truth for each ghoul's brand site.
 * When creating a new ghoul site, copy the template and update this file.
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
  description?: string;
  comingSoon?: boolean;
}

export interface GhoulConfig {
  /** Unique ID: goo, beauty, garden, zen, party, tradie, baby, scholar */
  id: string;
  /** Display name: "GOO GHOUL", "BEAUTY GHOUL" */
  name: string;
  /** Short tagline for hero */
  tagline: string;
  /** One-line description */
  description: string;
  /** Full domain with protocol: "https://www.googhoul.com" */
  domain: string;
  /** Emoji icon */
  icon: string;
  /** Is this the leader (GOO GHOUL)? */
  isLeader: boolean;
  /** Product catalog */
  products: Product[];
  /** Cross-links to all ghoul sites + GHOULVERSE */
  crossLinks: CrossLink[];
  /** CTA section text */
  cta: {
    headline: string;
    subheadline: string;
    buttonText: string;
    placeholderText: string;
  };
  /** Game link (most ghouls link to the shared GOO RUNNER) */
  gameUrl: string;
  /** Social links */
  social: {
    twitter?: string;
    instagram?: string;
    youtube?: string;
  };
}

// ─────────────────────────────────────────────
// GARDEN GHOUL
// ─────────────────────────────────────────────
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
    { name: "Organic Pesticide", comingSoon: true },
    { name: "Plant Rehydration Spray", comingSoon: true },
    { name: "Soil pH Balancer", comingSoon: true },
    { name: "Compost Accelerator", comingSoon: true },
    { name: "Garden Tool Sanitizer", comingSoon: true },
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
      id: "scholar",
      name: "SCHOLAR GHOUL",
      domain: "https://www.scholarghoul.com",
      icon: "📚",
      color: "#f97316",
      realm: "The Infinite Library",
      live: false,
    },
    {
      id: "baby",
      name: "BABY GHOUL",
      domain: "https://www.babyghoul.com",
      icon: "🍼",
      color: "#3b82f6",
      realm: "The Playful Realm",
      live: false,
    },
  ],

  cta: {
    headline: "Ready to Grow?",
    subheadline: "Join the green revolution. Be the first to know when we drop.",
    buttonText: "Plant the Seed",
    placeholderText: "Enter your email...",
  },

  gameUrl: "https://www.ghoulverse.com/play/",

  social: {
    twitter: "#",
    instagram: "#",
    youtube: "#",
  },
};
