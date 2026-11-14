import { create } from "zustand";

interface FilterStore {
  category: string;
  setCategory(cat: string): void;
  categoryFilters: string[];
  marketCap: string;
  setMarketCap(cap: string): void;
  marketCapFilters: string[];
  change24h: string;
  setChange24h(chng: string): void;
  change24hFilters: string[];
};

export const useFilterStore = create<FilterStore>((set) => ({
  category: "",
  setCategory(cat) {
    set(() => ({ category: cat }))
  },
  categoryFilters: [
    "All Categories",
    "Layer 1 (L1)",
    "Layer 2 (L2)",
    "DeFi",
    "Meme Coins",
    "AI & Big Data",
    "Gaming",
    "Stablecoins",
    "Exchange Tokens",
    "Real World Assets (RWA)",
    "Privacy Coins",
  ],
  marketCap: "",
  setMarketCap(cap) {
    set(() => ({ marketCap: cap }))
  },
  marketCapFilters: [
    "All Market Caps",
    "Large Cap (Above $10B)",
    "Mid Cap ($1B - $10B)",
    "Small Cap (Below $1B)",
  ],
  change24h: "",
  setChange24h(chng) {
    set(() => ({ change24h: chng }))
  },
  change24hFilters: [
    "All Changes",
    "Gainers",
    "Losers",
    "Strong Gainers (Above +5%)",
    "Strong Losers (Below -5%)",
  ],
}));