import { create } from "zustand";
import type { FilterItem } from "../types/Dashboard";

interface FilterStore {
  category: string;
  setCategory(cat: string): void;
  categoryFilters: FilterItem[];
  marketCap: string;
  setMarketCap(cap: string): void;
  marketCapFilters: FilterItem[];
  change24h: string;
  setChange24h(chng: string): void;
  change24hFilters: FilterItem[];
};

export const useFilterStore = create<FilterStore>((set) => ({
  category: "",
  setCategory(cat) {
    set(() => ({ category: cat }))
  },
  categoryFilters: [
    { name: "All Categories", id: "all" },
    { name: "Layer 1 (L1)", id: "layer-1" },
    { name: "Layer 2 (L2)", id: "layer-2" },
    { name: "DeFi", id: "decentralized-finance-defi" },
    { name: "Meme Coins", id: "meme-token" },
    { name: "Gaming", id: "gaming" },
    { name: "Stablecoins", id: "stablecoins" },
    { name: "Real World Assets (RWA)", id: "real-world-assets-rwa" },
    { name: "Privacy Coins", id: "privacy-coins" },
  ],
  marketCap: "",
  setMarketCap(cap) {
    set(() => ({ marketCap: cap }))
  },
  marketCapFilters: [
    { name: "All Market Caps", id: "all" },
    { name: "Large Cap (Above ₹8.3 Lakh Cr)", id: "large-cap" },
    { name: "Mid Cap (₹83,000 Cr - ₹8.3 Lakh Cr)", id: "mid-cap" },
    { name: "Small Cap (Below ₹83,000 Cr)", id: "small-cap" },
  ],
change24h: "",
  setChange24h(chng) {
  set(() => ({ change24h: chng }))
},
change24hFilters: [
  { name: "All Changes", id: "all" },
  { name: "Gainers", id: "gainers" },
  { name: "Losers", id: "losers" },
  { name: "Strong Gainers (Above +5%)", id: "strong-gainers" },
  { name: "Strong Losers (Below -5%)", id: "strong-losers" },
],
}));