import { TokenIcon } from "@web3icons/react/dynamic";
import { fetchPools } from "../../services/gecko-terminal";
import { useQuery } from "@tanstack/react-query";
import notAvailableIcon from "../../assets/not-available-network.svg"

interface PoolIconProp {
  className?: string;
  networkId: string;
  poolId: string;
  size?: number;
}

export default function PoolIcon({ className = "", networkId, poolId, size = 36 }: PoolIconProp) {
  const { data: pools } = useQuery({
    queryKey: ["pools", networkId],
    queryFn: () => fetchPools(networkId),
    enabled: Boolean(networkId),
  });
  const pool = pools?.data?.find((pool) => pool.id === poolId);
  const baseTokenId = pool?.relationships.base_token.data.id ?? "";
  const quoteTokenId = pool?.relationships.quote_token.data.id ?? "";
  const baseTokenSymbol =
    pools?.included?.find((token) => token.id === baseTokenId)?.attributes.symbol ?? "";
  const quoteTokenSymbol =
    pools?.included?.find((token) => token.id === quoteTokenId)?.attributes.symbol ?? "";
  const iconSize = Math.round((size * 2) / 3);

  return (
    <div className={`${className} flex shrink-0 items-center -space-x-2.5`}>
      <div
        className="relative z-10 flex items-center justify-center overflow-hidden rounded-full border-2 border-card bg-canvas"
        style={{ width: size, height: size }}
      >
        <TokenIcon
          key={baseTokenSymbol || "base-empty"}
          symbol={baseTokenSymbol}
          size={iconSize}
          variant="branded"
          fallback={
            <img
              src={notAvailableIcon}
              alt={baseTokenSymbol || "Unknown token"}
              className="object-contain"
              style={{ width: iconSize, height: iconSize }}
            />
          }
        />
      </div>

      <div
        className="relative z-0 flex items-center justify-center overflow-hidden rounded-full border-2 border-card bg-canvas"
        style={{ width: size, height: size }}
      >
        <TokenIcon
          key={quoteTokenSymbol || "quote-empty"}
          symbol={quoteTokenSymbol}
          size={iconSize}
          variant="branded"
          fallback={
            <img
              src={notAvailableIcon}
              alt={quoteTokenSymbol || "Unknown token"}
              className="object-contain"
              style={{ width: iconSize, height: iconSize }}
            />
          }
        />
      </div>
    </div>
  );
}