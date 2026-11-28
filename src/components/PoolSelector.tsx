import { NetworkIcon } from "@web3icons/react/dynamic"
import PoolIcon from "./icons/PoolIcon"
import { useEffect, useRef, useState } from "react";
import type { Pool, Pools } from "../types/trade";
import type { NavigateOptions, URLSearchParamsInit } from "react-router";
import { useEventListener } from "../hooks/useEventListener";
import notAvailableIcon from "../assets/not-available-network.svg"

interface Network {
  name: string;
  id: string;
}

interface PoolSelectorProp {
  setSearchParams: (
    nextInit?: URLSearchParamsInit | ((prev: URLSearchParams) => URLSearchParamsInit),
    navigateOpts?: NavigateOptions
  ) => void;
  currentNetwork: Network;
  networksSelect: Network[];
  currentPool: Pool;
  pools: Pools | undefined;
  selectedNetworkId: string | null;
  selectedPoolId: string | null;
}

interface RecentPool {
  id: string;
  name: string;
  networkId: string;
}


export function PoolSelector({ setSearchParams, currentNetwork, networksSelect, currentPool, pools, selectedNetworkId, selectedPoolId }: PoolSelectorProp) {
  const [networkQuery, setNetworkQuery] = useState("");
  const [isSearchingNetwork, setIsSearchingNetwork] = useState(false);
  const networkQueryRef = useRef<HTMLInputElement>(null);
  const [poolQuery, setPoolQuery] = useState("");
  const [isSearchingPool, setIsSearchingPool] = useState(false);
  const poolQueryRef = useRef<HTMLInputElement>(null);
  const [recentPools, setRecentPools] = useState<RecentPool[]>(() => JSON.parse(localStorage.getItem("recent-pools") ?? "[]"))

  useEffect(() => {
    localStorage.setItem("recent-pools", JSON.stringify(recentPools))
  }, [recentPools])

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

      const recentPool: RecentPool = {
        id: found.id,
        name: found.attributes.name,
        networkId: selectedNetworkId ?? ""
      }

      const exists = recentPools.find(p => p.id === recentPool.id)
      if (exists) {
        setRecentPools(prev => prev.filter(p => p.id !== exists.id))
      } else if (recentPools.length >= 3) {
        setRecentPools(prev => prev.slice(0, -1))
      }
      setRecentPools(prev => [recentPool, ...prev])
    }
  }

  function selectPool(pool: Pool) {
    setPoolQuery(pool.attributes.name);
    setSearchParams((prev) => {
      prev.set("pool", pool.id)
      return prev;
    })
    poolQueryRef.current?.blur()

    const recentPool: RecentPool = {
      id: pool.id,
      name: pool.attributes.name,
      networkId: selectedNetworkId ?? ""
    }

    if (recentPools.length >= 3) {
      setRecentPools(prev => prev.slice(0, -1))
    }
    setRecentPools(prev => [recentPool, ...prev])
  }

  function selectRecentPool(recentPool: RecentPool) {
    const network = networksSelect.find(network => network.id === recentPool.networkId) ?? { name: "", id: "" }
    setNetworkQuery(network?.name);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.set("network", network.id);
      next.set("pool", recentPool.id);
      return next;
    });

    const exists = recentPools.find(p => p.id === recentPool.id)
    if (exists) {
      setRecentPools(prev => prev.filter(p => p.id !== exists.id))
    }

    setRecentPools(prev => [recentPool, ...prev])
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
    <div className="bg-card border border-card rounded-xl px-3 py-2">
      <div className="grid grid-cols-17 gap-2.5 items-center">
        {/* 01 Network */}
        <div className="relative col-span-4">
          <p className="text-xs text-slate-300 mb-1 leading-none font-medium">Network</p>
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
        <div className="relative col-span-5 pl-4">
          <p className="text-xs text-slate-300 mb-1 leading-none font-medium">Market</p>
          <div className={`flex items-center gap-2 px-2.5 border-card border bg-canvas/70 rounded-lg h-12 w-86 ${isSearchingPool ? "border-accent" : ""}`}>
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
              `h-auto w-120 bg-canvas/90 rounded-lg border border-accent absolute top-16 p-1 flex flex-col gap-1 max-h-100 overflow-auto scrollbar-thin scrollbar-thumb-slate-700/90 ${isSearchingPool ? "visible" : "hidden"}`
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
        <div className="reative col-span-8 h-full">
          <p className="text-xs text-slate-300 mb-1 leading-none font-medium">Recent markets</p>
          <div className="grid grid-cols-3 gap-5">
            {recentPools.slice(0, 3).map(pool => {
              return (
                <div
                  key={pool.id}
                  onClick={() => { selectRecentPool(pool) }}
                  className={
                    `w-full h-10 bg-card border rounded-xl grid grid-cols-7 items-center pl-2 ${pool.id === selectedPoolId
                      ? "border-accent/60"
                      : "border-card"
                    }`
                  }>
                  <PoolIcon
                    poolId={pool.id}
                    networkId={selectedNetworkId ?? ""}
                    className="col-span-2"
                    size={26}
                  />
                  <p className="col-span-5 overflow-hidden whitespace-nowrap">{pool.name}</p>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </div>
  )
}