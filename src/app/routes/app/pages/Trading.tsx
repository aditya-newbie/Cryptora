import {
  ArrowUpDown,
  Camera,
  CandlestickChart,
  ChevronDown,
  CircleDollarSign,
  Coins,
  Copy,
  ExternalLink,
  Info,
  Maximize2,
  SlidersHorizontal,
  Star,
  TrendingUp,
} from "lucide-react";
import React, { useRef, useState } from "react";
import useNetwork from "../../../../hooks/useNetwork";
import { NetworkIcon } from "@web3icons/react/dynamic";
import { useSearchParams } from "react-router";
import { useEventListener } from "../../../../hooks/useEventListener";
import notAvailableIcon from "../../../../assets/not-available-network.svg"
import { useQuery } from "@tanstack/react-query";
import { fetchPools } from "../../../../services/gecko-terminal";
import type { Pool } from "../../../../types/trade";
import PoolIcon from "../../../../components/icons/PoolIcon";

const emptyPool: Pool = {
  id: "",
  type: "pool",
  attributes: {
    base_token_price_usd: "",
    base_token_price_native_currency: "",
    quote_token_price_usd: "",
    quote_token_price_native_currency: "",
    base_token_price_quote_token: "",
    quote_token_price_base_token: "",

    address: "",
    name: "",
    pool_created_at: "",

    fdv_usd: "",
    market_cap_usd: "",

    price_change_percentage: {
      m5: "",
      m15: "",
      m30: "",
      h1: "",
      h6: "",
      h24: "",
    },

    transactions: {
      m5: {
        buys: 0,
        sells: 0,
        buyers: 0,
        sellers: 0,
        unique_traders: 0,
      },
      m15: {
        buys: 0,
        sells: 0,
        buyers: 0,
        sellers: 0,
        unique_traders: 0,
      },
      m30: {
        buys: 0,
        sells: 0,
        buyers: 0,
        sellers: 0,
        unique_traders: 0,
      },
      h1: {
        buys: 0,
        sells: 0,
        buyers: 0,
        sellers: 0,
        unique_traders: 0,
      },
      h6: {
        buys: 0,
        sells: 0,
        buyers: 0,
        sellers: 0,
        unique_traders: 0,
      },
      h24: {
        buys: 0,
        sells: 0,
        buyers: 0,
        sellers: 0,
        unique_traders: 0,
      },
    },

    volume_usd: {
      m5: "",
      m15: "",
      m30: "",
      h1: "",
      h6: "",
      h24: "",
    },

    reserve_in_usd: "",
  },

  relationships: {
    base_token: {
      data: {
        id: "",
        type: "token",
      },
    },
    quote_token: {
      data: {
        id: "",
        type: "token",
      },
    },
    dex: {
      data: {
        id: "",
        type: "dex",
      },
    },
  },
};

interface Network {
  name: string;
  id: string;
}

export default function TrendingTerminal() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { networksSelect, isLoading } = useNetwork();
  const [networkQuery, setNetworkQuery] = useState("");
  const [isSearchingNetwork, setIsSearchingNetwork] = useState(false);
  const networkQueryRef = useRef<HTMLInputElement>(null);
  const selectedNetworkId = searchParams.get("network");
  const currentNetwork = networksSelect.find(network => (network.id === selectedNetworkId)) ?? { name: "", id: "" }
  const { data: pools, isLoading: isPoolsLoading } = useQuery({
    queryKey: ["pools", selectedNetworkId],
    queryFn: () => fetchPools(selectedNetworkId ?? ""),
    enabled: Boolean(selectedNetworkId)
  })
  const [poolQuery, setPoolQuery] = useState("");
  const [isSearchingPool, setIsSearchingPool] = useState(false);
  const poolQueryRef = useRef<HTMLInputElement>(null);
  const selectedPoolId = searchParams.get("pool");
  const currentPool = pools?.data?.find(pool => (pool.id === selectedPoolId)) ?? emptyPool
  console.log(currentPool)


  useEventListener<KeyboardEvent>("keydown", (event) => {
    if (event.key === "Enter") {
      networkQueryRef.current?.blur();
      poolQueryRef.current?.blur();
    }
  })

  function handleNetworkChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setNetworkQuery(value);
    const trimmed = value.trim().toLowerCase();
    const found = networksSelect.find(network => (network.name.toLowerCase() === trimmed))
    if (found) {
      setSearchParams((prev) => {
        prev.set("network", found.id)
        prev.delete("pool")
        return prev;
      })
    }
  }
  function selectNetwork(network: Network) {
    setNetworkQuery(network.name);
    setSearchParams((prev) => {
      prev.set("network", network.id)
      prev.delete("pool")
      return prev;
    })
    networkQueryRef.current?.blur()
  }
  function handlePoolChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    setPoolQuery(value);
    const trimmed = value.trim().toLowerCase();
    const found = pools?.data?.find(network => (network.id.toLowerCase() === trimmed || network.attributes.name.toLowerCase() === trimmed))
    if (found) {
      setSearchParams((prev) => {
        prev.set("pool", found.id)
        return prev;
      })
    }
  }
  function selectPool(pool: Pool) {
    setPoolQuery(pool.attributes.name);
    setSearchParams((prev) => {
      prev.set("pool", pool.id)
      return prev;
    })
    poolQueryRef.current?.blur()
  }

  const searchedNetwork = networksSelect.filter(network => (
    network.name.toLowerCase().includes(networkQuery.toLowerCase())
    || network.id.toLowerCase().includes(networkQuery.toLowerCase())
  ))

  const searchedPool = pools?.data.filter(pool => (
    pool.attributes.name.toLowerCase().includes(poolQuery.toLowerCase())
    || pool.id.toLowerCase().includes(poolQuery.toLowerCase())
  )) ?? []

  return (
    isLoading || isPoolsLoading ? <div>Loading...</div> :
      <div className="min-h-screen bg-canvas text-white font-body px-4 p-2 md:p-4">
        <div className="max-w-360 mx-auto space-y-4">
          {/* Top Selector Bar */}
          <div className="bg-card border border-card rounded-xl px-3 py-2">
            <div className="grid grid-cols-11 gap-2.5 items-center">
              {/* 01 Network */}
              <div className="relative col-span-3">
                <p className="text-xs text-slate-400 mb-1 leading-none font-medium">Network</p>
                <div className={`border-card border bg-canvas/70 rounded-lg h-12 w-75 ${isSearchingNetwork ? "border-accent" : ""}`} >
                  {currentNetwork.name && <NetworkIcon
                    name={currentNetwork.name}
                    key={currentNetwork.id}
                    variant="branded"
                    size={28}
                    fallback={<img src={notAvailableIcon} className="m-2 inline-block" style={{ height: "28px" }} ></img>}
                    className="m-2 inline-block"
                  />}
                  <input
                    value={
                      isSearchingNetwork
                        ? networkQuery
                        : currentNetwork.name
                    }
                    onChange={handleNetworkChange}
                    className="pl-2 text-white/90 w-60 outline-0 h-full"
                    placeholder="Select Network..."
                    onFocus={() => {
                      setNetworkQuery("")
                      setIsSearchingNetwork(true)
                    }}
                    onBlur={() => { setIsSearchingNetwork(false) }}
                    ref={networkQueryRef}
                  />
                </div>
                <div
                  className={
                    `h-auto w-75 bg-canvas/90 rounded-lg border border-accent absolute top-16 p-1 flex flex-col gap-1 max-h-100 overflow-auto scrollbar-thin scrollbar-thumb-slate-700/90
                  ${isSearchingNetwork ? "visible" : "hidden"}`
                  }
                  onMouseDown={(e) => { e.preventDefault() }}
                >
                  {searchedNetwork.slice(0, 15).map(network => {
                    return (
                      <div
                        key={network.id}
                        onClick={() => { selectNetwork(network) }}
                        className="cursor-pointer rounded-lg transition-all duration-150 hover:bg-accent/70">
                        <NetworkIcon
                          name={network.name}
                          variant="branded"
                          size={28}
                          fallback={<img src={notAvailableIcon} className="inline-block" style={{ height: "28px" }} ></img>}
                          className="inline-block"
                        />
                        <span className="ml-2 font-semibold text-white/90">{network.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* O2 Market */}
              <div className="relative col-span-4">
                <p className="text-xs text-slate-400 mb-1 leading-none font-medium">Market</p>
                <div className={`flex items-center gap-2 px-2.5 border-card border bg-canvas/70 rounded-lg h-12 w-120 ${isSearchingPool ? "border-accent" : ""}`}>
                  {selectedNetworkId && selectedPoolId && <PoolIcon
                    networkId={selectedNetworkId}
                    poolId={selectedPoolId}
                  />}
                  <input
                    value={
                      isSearchingPool
                        ? poolQuery
                        : currentPool.attributes?.name || currentPool.id
                    }
                    className="flex-1 min-w-0 h-full bg-transparent text-white/90 outline-0"
                    ref={poolQueryRef}
                    placeholder="Search pair, tolen, contract or pool..."
                    onChange={handlePoolChange}
                    onFocus={() => {
                      setPoolQuery("")
                      setIsSearchingPool(true)
                    }}
                    onBlur={() => { setIsSearchingPool(false) }}
                  />
                </div>
                <div
                  className={
                    `h-auto w-120 bg-canvas/90 rounded-lg border border-accent absolute top-16 p-1 flex flex-col gap-1 max-h-100 overflow-auto scrollbar-thin scrollbar-thumb-slate-700/90
                  ${isSearchingPool ? "visible" : "hidden"}`
                  }
                  onMouseDown={(e) => { e.preventDefault() }}
                >
                  {searchedPool.slice(0, 15).map(pool => {
                    return (
                      <div
                        key={pool.id}
                        onClick={() => { selectPool(pool) }}
                        className="cursor-pointer rounded-lg transition-all duration-150 hover:bg-accent/70 grid grid-cols-8"
                      >
                        <PoolIcon
                          poolId={pool.id}
                          networkId={selectedNetworkId ?? ""}
                          className="col-span-1"
                        />
                        <span className="ml-2 font-semibold text-white/90 col-span-7">{pool.attributes.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* 03 Recent */}
              <div className="reative col-span-4"></div>

            </div>
          </div>

          {/* Main Workspace Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Left Sidebar */}
            <div className="lg:col-span-4 xl:col-span-3 flex flex-col gap-4">
              {/* Token Pair & Stats Card */}
              <div className="bg-card border border-card rounded-xl p-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <div className="w-8 h-8 rounded-full bg-accent/25 border border-card flex items-center justify-center text-accent">
                        <Coins className="w-4 h-4" />
                      </div>
                      <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-card flex items-center justify-center text-sky-400">
                        <CircleDollarSign className="w-4 h-4" />
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <h1 className="text-sm font-semibold">WETH / USDC</h1>
                        <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <p className="text-xs text-slate-400">Uniswap V3 · Ethereum</p>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="p-2 rounded-lg border border-card hover-card text-slate-300"
                  >
                    <Star className="w-4 h-4" />
                  </button>
                </div>

                <div className="mt-4 flex items-center gap-2.5 flex-wrap">
                  <span className="text-2xl font-bold tabular-nums">$2,000.34</span>
                  <span className="bg-gain/15 text-gain text-xs font-medium px-2.5 py-0.5 rounded-full tabular-nums">
                    +3.42% (24h)
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-4 mt-4 border-t border-card">
                  <div>
                    <p className="text-[11px] text-slate-400">24h Volume</p>
                    <p className="text-sm font-semibold tabular-nums mt-0.5">$8.70M</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">Liquidity</p>
                    <p className="text-sm font-semibold tabular-nums mt-0.5">$12.40M</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">24h Txns</p>
                    <p className="text-sm font-semibold tabular-nums mt-0.5">4,821</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">Market Cap</p>
                    <p className="text-sm font-semibold tabular-nums mt-0.5">$238.4B</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">FDV</p>
                    <p className="text-sm font-semibold tabular-nums mt-0.5">$238.4B</p>
                  </div>
                  <div>
                    <p className="text-[11px] text-slate-400">Pool Fee</p>
                    <p className="text-sm font-semibold tabular-nums mt-0.5">0.30%</p>
                  </div>
                </div>
              </div>

              {/* Buy / Sell Swap Card */}
              <div className="bg-card border border-card rounded-xl p-4 flex-1 flex flex-col justify-between">
                <div>
                  {/* Buy / Sell Tabs */}
                  <div className="grid grid-cols-2 bg-canvas/70 border border-card rounded-lg p-1 mb-4">
                    <button
                      type="button"
                      className="bg-gain text-white text-sm font-medium py-2 rounded-md"
                    >
                      Buy
                    </button>
                    <button
                      type="button"
                      className="text-slate-400 hover:text-white text-sm font-medium py-2 rounded-md"
                    >
                      Sell
                    </button>
                  </div>

                  {/* Amount Input */}
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Amount
                    </label>
                    <div className="bg-canvas/70 border border-card rounded-lg px-3 py-2.5 flex items-center justify-between">
                      <span className="text-sm font-medium tabular-nums text-slate-200">
                        0.00
                      </span>
                      <button
                        type="button"
                        className="flex items-center gap-1.5 text-sm font-medium"
                      >
                        <Coins className="w-4 h-4 text-accent" />
                        <span>WETH</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    </div>
                  </div>

                  {/* Swap Direction Divider */}
                  <div className="flex justify-center -my-2 relative z-10">
                    <button
                      type="button"
                      className="bg-card border border-card hover-card rounded-full p-1.5 text-slate-300"
                    >
                      <ArrowUpDown className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Estimated Output */}
                  <div>
                    <label className="block text-xs text-slate-400 mb-1.5">
                      Estimated Output
                    </label>
                    <div className="bg-canvas/70 border border-card rounded-lg px-3 py-2.5 flex items-center justify-between">
                      <span className="text-sm font-medium tabular-nums text-slate-200">
                        0.00
                      </span>
                      <button
                        type="button"
                        className="flex items-center gap-1.5 text-sm font-medium"
                      >
                        <CircleDollarSign className="w-4 h-4 text-sky-400" />
                        <span>USDC</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      </button>
                    </div>
                  </div>

                  {/* Order Details */}
                  <div className="space-y-2.5 text-xs mt-4 pt-4 border-t border-card">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Price</span>
                      <span className="font-medium tabular-nums">
                        1 WETH = 2,000.34 USDC
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Price Impact</span>
                      <span className="text-gain font-medium tabular-nums">
                        &lt; 0.01%
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Trading Fee (0.30%)</span>
                      <span className="font-medium tabular-nums">≈ 0.00 USDC</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Slippage Tolerance</span>
                      <button
                        type="button"
                        className="bg-canvas/70 border border-card rounded-md px-2 py-1 flex items-center gap-1 font-medium tabular-nums hover-card"
                      >
                        <span>0.50%</span>
                        <ChevronDown className="w-3 h-3 text-slate-400" />
                      </button>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  className="mt-5 w-full bg-accent hover:opacity-90 text-white text-sm font-semibold py-3 rounded-xl transition"
                >
                  Buy WETH
                </button>
              </div>
            </div>

            {/* Right Main Area */}
            <div className="lg:col-span-8 xl:col-span-9 flex flex-col gap-4">
              {/* Price Chart Card */}
              <div className="bg-card border border-card rounded-xl p-4">
                {/* Chart Toolbar */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-card">
                  <div className="flex items-center gap-1 bg-canvas/70 border border-card rounded-lg p-1">
                    <button
                      type="button"
                      className="bg-accent text-white text-xs font-medium px-3 py-1.5 rounded-md"
                    >
                      Price Chart
                    </button>
                    <button
                      type="button"
                      className="text-slate-400 hover:text-white text-xs font-medium px-3 py-1.5 rounded-md"
                    >
                      Depth
                    </button>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    {/* Timeframe Selector */}
                    <div className="flex items-center gap-0.5 bg-canvas/70 border border-card rounded-lg p-1 text-xs">
                      <button
                        type="button"
                        className="px-2.5 py-1 rounded text-slate-400 hover:text-white"
                      >
                        1m
                      </button>
                      <button
                        type="button"
                        className="px-2.5 py-1 rounded text-slate-400 hover:text-white"
                      >
                        5m
                      </button>
                      <button
                        type="button"
                        className="px-2.5 py-1 rounded text-slate-400 hover:text-white"
                      >
                        15m
                      </button>
                      <button
                        type="button"
                        className="px-2.5 py-1 rounded bg-accent text-white font-medium"
                      >
                        1h
                      </button>
                      <button
                        type="button"
                        className="px-2.5 py-1 rounded text-slate-400 hover:text-white"
                      >
                        4h
                      </button>
                      <button
                        type="button"
                        className="px-2.5 py-1 rounded text-slate-400 hover:text-white"
                      >
                        1D
                      </button>
                    </div>

                    {/* Chart Type */}
                    <div className="flex items-center gap-0.5 bg-canvas/70 border border-card rounded-lg p-1">
                      <button
                        type="button"
                        className="p-1.5 rounded bg-card text-accent"
                      >
                        <CandlestickChart className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        className="p-1.5 rounded text-slate-400 hover:text-white"
                      >
                        <TrendingUp className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Indicators */}
                    <button
                      type="button"
                      className="bg-canvas/70 border border-card hover-card rounded-lg px-3 py-1.5 text-xs font-medium flex items-center gap-1.5 text-slate-200"
                    >
                      <SlidersHorizontal className="w-3.5 h-3.5" />
                      <span>Indicators</span>
                    </button>

                    {/* Snapshot & Fullscreen */}
                    <button
                      type="button"
                      className="bg-canvas/70 border border-card hover-card rounded-lg p-1.5 text-slate-300"
                    >
                      <Camera className="w-4 h-4" />
                    </button>
                    <button
                      type="button"
                      className="bg-canvas/70 border border-card hover-card rounded-lg p-1.5 text-slate-300"
                    >
                      <Maximize2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Blank Price Chart Graph Placeholder */}
                <div className="mt-3 h-[360px] w-full rounded-lg border border-dashed border-card bg-canvas/40">
                  {/* Price Chart Graph Placeholder */}
                </div>
              </div>

              {/* Bottom Analytics & Recent Trades */}
              <div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
                {/* Left Bottom Column */}
                <div className="xl:col-span-7 flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Buy / Sell Activity */}
                    <div className="bg-card border border-card rounded-xl p-4">
                      <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                        <span>Buy / Sell Activity (24h)</span>
                        <Info className="w-3.5 h-3.5 text-slate-400" />
                      </div>

                      <div className="flex items-center justify-between mt-3 text-base font-semibold tabular-nums">
                        <span className="text-gain">62% Buy</span>
                        <span className="text-loss">38% Sell</span>
                      </div>

                      <div className="h-2 w-full rounded-full overflow-hidden flex bg-canvas mt-2.5">
                        <div className="w-[62%] bg-gain" />
                        <div className="w-[38%] bg-loss" />
                      </div>

                      <div className="flex items-center justify-between mt-3 text-[11px] text-slate-400 tabular-nums">
                        <span>$5.39M Buy Vol</span>
                        <span>$3.31M Sell Vol</span>
                      </div>
                    </div>

                    {/* Liquidity Card */}
                    <div className="bg-card border border-card rounded-xl p-4">
                      <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                        <span>Liquidity</span>
                        <Info className="w-3.5 h-3.5 text-slate-400" />
                      </div>

                      <div className="flex items-center gap-2.5 mt-3">
                        <span className="text-xl font-bold tabular-nums">$12.40M</span>
                        <span className="bg-gain/15 text-gain text-[11px] font-medium px-2 py-0.5 rounded-full">
                          Deep
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-card">
                        <div>
                          <p className="text-[11px] text-slate-400">WETH Reserve</p>
                          <p className="text-xs font-medium tabular-nums mt-0.5">
                            6,203.18 WETH
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[11px] text-slate-400">USDC Reserve</p>
                          <p className="text-xs font-medium tabular-nums mt-0.5">
                            $12.40M
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Pool Info Card */}
                  <div className="bg-card border border-card rounded-xl p-4">
                    <div className="flex items-center gap-2 text-xs">
                      <button
                        type="button"
                        className="bg-accent/20 text-accent border border-accent/40 font-medium px-3 py-1.5 rounded-lg"
                      >
                        Pool Info
                      </button>
                      <button
                        type="button"
                        className="text-slate-400 hover:text-white font-medium px-3 py-1.5 rounded-lg"
                      >
                        Token Info
                      </button>
                      <button
                        type="button"
                        className="text-slate-400 hover:text-white font-medium px-3 py-1.5 rounded-lg"
                      >
                        Links
                      </button>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-3 mt-3 border-t border-card">
                      <div>
                        <p className="text-[11px] text-slate-400">DEX</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <CircleDollarSign className="w-3.5 h-3.5 text-accent" />
                          <span className="text-xs font-medium">Uniswap V3</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400">Network</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <Coins className="w-3.5 h-3.5 text-accent" />
                          <span className="text-xs font-medium">Ethereum</span>
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400">Pool Address</p>
                        <div className="flex items-center gap-1.5 mt-1">
                          <span className="text-xs font-medium tabular-nums">
                            0x8ad5...e1f2
                          </span>
                          <Copy className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                      </div>
                      <div>
                        <p className="text-[11px] text-slate-400">Created</p>
                        <p className="text-xs font-medium mt-1">Mar 21, 2023</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Bottom Column: Recent Trades */}
                <div className="xl:col-span-5 bg-card border border-card rounded-xl p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-1.5 text-xs text-slate-200 font-medium">
                      <span>Recent Trades</span>
                      <Info className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                    <button
                      type="button"
                      className="bg-canvas/70 border border-card hover-card rounded-lg px-2.5 py-1 text-xs flex items-center gap-1.5 text-slate-300"
                    >
                      <span>All</span>
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>

                  <div className="overflow-x-auto scrollbar-hide">
                    <table className="w-full text-xs tabular-nums">
                      <thead>
                        <tr className="text-slate-400 border-b border-card text-left">
                          <th className="pb-2 font-medium">Time</th>
                          <th className="pb-2 font-medium">Type</th>
                          <th className="pb-2 font-medium text-right">
                            Amount (WETH)
                          </th>
                          <th className="pb-2 font-medium text-right">
                            Price (USDC)
                          </th>
                          <th className="pb-2 font-medium text-right">Value</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#222646]">
                        <tr>
                          <td className="py-2.5 text-slate-300">12:34:21</td>
                          <td className="py-2.5 text-gain font-medium">Buy</td>
                          <td className="py-2.5 text-right">0.5230</td>
                          <td className="py-2.5 text-right">2,000.34</td>
                          <td className="py-2.5 text-right">$1,046.18</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 text-slate-300">12:34:07</td>
                          <td className="py-2.5 text-loss font-medium">Sell</td>
                          <td className="py-2.5 text-right">1.2000</td>
                          <td className="py-2.5 text-right">1,999.80</td>
                          <td className="py-2.5 text-right">$2,399.76</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 text-slate-300">12:33:52</td>
                          <td className="py-2.5 text-gain font-medium">Buy</td>
                          <td className="py-2.5 text-right">0.3000</td>
                          <td className="py-2.5 text-right">1,999.92</td>
                          <td className="py-2.5 text-right">$599.98</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 text-slate-300">12:33:41</td>
                          <td className="py-2.5 text-loss font-medium">Sell</td>
                          <td className="py-2.5 text-right">0.7500</td>
                          <td className="py-2.5 text-right">1,998.64</td>
                          <td className="py-2.5 text-right">$1,498.98</td>
                        </tr>
                        <tr>
                          <td className="py-2.5 text-slate-300">12:33:28</td>
                          <td className="py-2.5 text-gain font-medium">Buy</td>
                          <td className="py-2.5 text-right">2.0000</td>
                          <td className="py-2.5 text-right">2,000.00</td>
                          <td className="py-2.5 text-right">$4,000.00</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}
