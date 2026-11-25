import {
  Search,
  Flame,
  Rocket,
  TrendingDown,
  Sparkles,
} from "lucide-react";

import { filter24hChange, filterCategory, filterMarketCap, filterTabPill, filterVolume24h } from "../../../../utils/mutate";
import { PrimarySelect } from "../../../../components/select";
import { useFilterStore } from "../../../../stores/dashboard-filter-store";
import React, { useMemo, useState } from "react";
import useMarket from "../../../../hooks/useMarket";
import AssetTable from "../../../../components/AssetTable";

export default function Market() {

  const { market, trending, categories } = useMarket();

  const [selectedTabPill, setSelectedTabPill] = useState("all")
  const [search, setSearch] = useState("");

  const category = useFilterStore((state) => state.category);
  const setCategory = useFilterStore((state) => state.setCategory);
  const categoryFilters = useFilterStore((state) => state.categoryFilters);
  const marketCap = useFilterStore((state) => state.marketCap);
  const setMarketCap = useFilterStore((state) => state.setMarketCap);
  const marketCapFilters = useFilterStore((state) => state.marketCapFilters);
  const change24h = useFilterStore((state) => state.change24h);
  const setChange24h = useFilterStore((state) => state.setChange24h);
  const change24hFilters = useFilterStore((state) => state.change24hFilters);
  const volume24h = useFilterStore((state) => state.volume24h);
  const setVolume24h = useFilterStore((state) => state.setVolume24h);
  const volume24hFilters = useFilterStore((state) => state.volume24hFilters);

  const filteredSelected = useMemo(() => {
    const filteredTab = filterTabPill(selectedTabPill, market, trending)
    const filteredCategory = filterCategory(category, categories, filteredTab);
    const filteredMarketCap = filterMarketCap(marketCap, filteredCategory);
    const filteredVolume24h = filterVolume24h(volume24h, filteredMarketCap);
    return filter24hChange(change24h, filteredVolume24h);
  }, [selectedTabPill, trending, market, categories, category, marketCap, volume24h, change24h])

  function filterSearch(search: string,) {
    return filteredSelected.filter((coin) => {
      const searchLower = search.toLowerCase();
      return (
        coin.name.toLowerCase().includes(searchLower) ||
        coin.symbol.toLowerCase().includes(searchLower)
      );
    })
  }

  const filteredMarket = filterSearch(search);


  function handleTabPillChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelectedTabPill(event.target.value)
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value)
  }

  return (
    <div className="font-body min-h-screen bg-canvas text-white">
      <div className="mx-auto max-w-350 px-6 py-4">
        {/* ── Page Title ── */}
        <h1 className="text-3xl font-bold">Markets</h1>
        <p className="mt-1 text-sm text-gray-400">
          Explore and compare cryptocurrencies.
        </p>

        {/* ── Tab Pills ── */}
        <div className="mt-6 flex items-center gap-3">
          <label className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer has-checked:bg-accent has-checked:border-accent has-checked:text-white">
            <input
              type="radio"
              name="market-tab"
              checked={selectedTabPill === "all"}
              value="all"
              onChange={handleTabPillChange}
              className="sr-only"
            />
            <span>All Assets</span>
          </label>

          <label className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer has-checked:bg-accent has-checked:border-accent has-checked:text-white">
            <input
              type="radio"
              name="market-tab"
              checked={selectedTabPill === "trending"}
              value="trending"
              onChange={handleTabPillChange}
              className="sr-only"
            />
            <Flame className="h-4 w-4 text-orange-400" />
            <span>Trending</span>
          </label>

          <label className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer has-checked:bg-accent has-checked:border-accent has-checked:text-white">
            <input
              type="radio"
              name="market-tab"
              checked={selectedTabPill === "gainers"}
              value="gainers"
              onChange={handleTabPillChange}
              className="sr-only"
            />
            <Rocket className="h-4 w-4 text-gain" />
            <span>Gainers</span>
          </label>

          <label className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer has-checked:bg-accent has-checked:border-accent has-checked:text-white">
            <input
              type="radio"
              name="market-tab"
              checked={selectedTabPill === "losers"}
              value="losers"
              onChange={handleTabPillChange}
              className="sr-only"
            />
            <TrendingDown className="h-4 w-4 text-loss" />
            <span>Losers</span>
          </label>

          <label className="flex items-center gap-2 rounded-full border border-card px-4 py-2 text-sm text-gray-400 hover:text-white cursor-pointer has-checked:bg-accent has-checked:border-accent has-checked:text-white">
            <input
              type="radio"
              name="market-tab"
              checked={selectedTabPill === "new-listings"}
              value="new-listings"
              onChange={handleTabPillChange}
              className="sr-only"
            />
            <Sparkles className="h-4 w-4 text-yellow-400" />
            <span>New Listings</span>
          </label>

          <PrimarySelect
            value={category}
            onChange={setCategory}
            values={categoryFilters}
            placeholder="Category"
            className="flex h-10 items-center justify-between gap-2.5 rounded-full border border-card bg-card px-4 py-2 text-sm text-gray-300 hover:text-white cursor-pointer transition-colors outline-none focus:border-accent"
            icons={true}
          />
        </div>

        {/* ── Search + Filter Bar ── */}
        <div className="mt-6 flex items-center gap-3">
          {/* Search Input */}
          <div className="flex flex-1 items-center gap-3 rounded-lg border border-card bg-card px-4 py-2.5">
            <Search className="h-4 w-4 text-gray-500" />
            <input
              type="search"
              aria-label="Search assets"
              placeholder="Search assets (BTC, ETH, SOL...)"
              value={search}
              onChange={handleSearchChange}
              className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-gray-500"
            />
            <span className="ml-auto rounded border border-card px-2 py-0.5 text-xs text-gray-500">Ctrl K</span>
          </div>

          {/* Market Cap Dropdown */}
          <PrimarySelect value={marketCap} onChange={setMarketCap} values={marketCapFilters} placeholder="MarketCap" />

          {/* Volume (24h) Dropdown */}
          <PrimarySelect value={volume24h} onChange={setVolume24h} values={volume24hFilters} placeholder="Volume (24h)" />

          {/* 24h Change Dropdown */}
          <PrimarySelect value={change24h} onChange={setChange24h} values={change24hFilters} placeholder="24h Change" />


        </div>

        <AssetTable marketData={filteredMarket} />
      </div>
    </div>
  );
}

