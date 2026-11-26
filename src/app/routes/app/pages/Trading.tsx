import {
  ArrowUpDown,
  Camera,
  CandlestickChart,
  Check,
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
  X,
} from "lucide-react";
import React, { useState } from "react";
import useNetwork from "../../../../hooks/useNetwork";
import { NetworkIcon } from "@web3icons/react/dynamic";

export default function TrendingTerminal() {
  const { networksSelect, isLoading } = useNetwork();
  const [networkInput, setNetworkInput] = useState("Ethereum")
  const [isNetworkInputFocus, setIsNetworkInputFocus] = useState(false)

  function handleNetworkChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNetworkInput(event.target.value);
  }

  const searchedNetwork = networksSelect.filter(network => (
    network.name.toLowerCase().includes(networkInput.toLowerCase())
    || network.id.toLowerCase().includes(networkInput.toLowerCase())
  ))
  //const currentNetwork = networksSelect.find(network => network.name === networkInput) ?? {name: "", id: ""}

  return (
    isLoading ? <div>Loading...</div> :
      <div className="min-h-screen bg-canvas text-white font-body px-4 p-2 md:p-4">
        <div className="max-w-360 mx-auto space-y-4">
          {/* Top Selector Bar */}
          <div className="bg-card border border-card rounded-xl px-3 py-2">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2.5 items-center">
              {/* 01 Network */}
              <div className="md:col-span-3 relative">
                <p className="text-[11px] text-slate-400 mb-1 leading-none font-medium">01 Network</p>
                <input
                  value={networkInput}
                  onFocus={() => { setIsNetworkInputFocus(true) }}
                  onBlur={() => { setTimeout(() => {setIsNetworkInputFocus(false)},300 )}}
                  onChange={(e) => { handleNetworkChange(e) }}
                  className="border-card border bg-canvas/70 rounded-lg h-8 w-76 text-white/90 outline-0 focus:outline-accent focus:outline-1 px-2.5"
                />
                <div 
                className={
                  `h-auto w-76 bg-canvas/90 rounded-lg border border-accent absolute top-12 p-1 flex flex-col gap-1 max-h-100 overflow-auto scrollbar-thin scrollbar-thumb-slate-700/90
                  ${isNetworkInputFocus ?  "visible" : "hidden"}`
                }
                >
                  {searchedNetwork.map(network => {
                    return (
                      <div key={network.id} onClick={() => {setNetworkInput(network.name)}}>
                        <NetworkIcon
                          name={network.name}
                          variant="branded"
                          size={28}
                          fallback={<img src="src/assets/not-available-network.svg" className="inline-block" style={{ height: "28px" }} ></img>}
                          className="inline-block"
                        />
                        <span className="ml-2 font-semibold text-white/90">{network.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* 02 Token */}
              <div className="md:col-span-3">
                <p className="text-[11px] text-slate-400 mb-1 leading-none font-medium">02 Token</p>
                <div className="bg-canvas/70 border border-card rounded-lg px-2.5 py-1.5 flex items-center justify-between hover-card">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                      <Coins className="w-3 h-3" />
                    </div>
                    <div className="min-w-0 leading-tight">
                      <p className="text-xs font-medium truncate">Wrapped Ether (WETH)</p>
                      <p className="text-[10px] text-slate-400 tabular-nums truncate">
                        0xC02a...6Cc2
                      </p>
                    </div>
                  </div>
                  <X className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </div>
              </div>

              {/* 03 Confirm Pool */}
              <div className="md:col-span-4">
                <p className="text-[11px] text-slate-400 mb-1 leading-none font-medium">03 Confirm Pool</p>
                <div className="bg-canvas/70 border border-card rounded-lg px-2.5 py-1.5 flex items-center justify-between gap-2 hover-card">
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="w-5 h-5 rounded-full bg-accent/20 text-accent flex items-center justify-center shrink-0">
                      <CircleDollarSign className="w-3 h-3" />
                    </div>
                    <div className="min-w-0 leading-tight">
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-medium whitespace-nowrap">
                          WETH / USDC
                        </span>
                        <span className="bg-gain/20 text-gain text-[9px] font-medium px-1.5 py-0.5 rounded-full leading-none">
                          Recommended
                        </span>
                      </div>
                      <p className="text-[10px] text-slate-400">Uniswap V3</p>
                    </div>
                  </div>

                  <div className="hidden sm:flex items-center gap-3 text-right shrink-0">
                    <div>
                      <p className="text-[9px] text-slate-400 leading-none">Liquidity</p>
                      <p className="text-[11px] font-medium tabular-nums mt-0.5">$12.4M</p>
                    </div>
                    <div>
                      <p className="text-[9px] text-slate-400 leading-none">24h Vol</p>
                      <p className="text-[11px] font-medium tabular-nums mt-0.5">$8.7M</p>
                    </div>
                  </div>

                  <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                </div>
              </div>

              {/* Confirm Pool Button */}
              <div className="md:col-span-2 flex flex-col justify-end">
                <div className="hidden md:block text-[11px] text-transparent mb-1 leading-none select-none">
                  &nbsp;
                </div>
                <button
                  type="button"
                  className="w-full bg-accent hover:opacity-90 text-white text-xs font-medium px-3 py-2 rounded-lg flex items-center justify-center gap-1.5 transition shadow-sm"
                >
                  <span>Confirm Pool</span>
                  <Check className="w-3.5 h-3.5" />
                </button>
              </div>
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
