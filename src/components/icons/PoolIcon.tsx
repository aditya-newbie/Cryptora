import { TokenIcon } from "@web3icons/react/dynamic";
import { fetchPools } from "../../services/gecko-terminal";
import { useQuery } from "@tanstack/react-query";
import notAvailableIcon from "../../assets/not-available-network.svg"

interface PoolIconProp {
  className?: string;
  networkId: string;
  poolId: string;
}

export default function PoolIcon({ className = "", networkId, poolId }: PoolIconProp) {
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

  return (
    <div className={`${className} flex shrink-0 items-center -space-x-2.5`}>
      <div className="relative z-10 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-card bg-canvas">
        <TokenIcon
          key={baseTokenSymbol || "base-empty"}
          symbol={baseTokenSymbol}
          size={24}
          variant="branded"
          fallback={
            <img
              src={notAvailableIcon}
              alt={baseTokenSymbol || "Unknown token"}
              className="h-6 w-6 object-contain"
            />
          }
        />
      </div>

      <div className="relative z-0 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-card bg-canvas">
        <TokenIcon
          key={quoteTokenSymbol || "quote-empty"}
          symbol={quoteTokenSymbol}
          size={24}
          variant="branded"
          fallback={
            <img
              src={notAvailableIcon}
              alt={quoteTokenSymbol || "Unknown token"}
              className="h-6 w-6 object-contain"
            />
          }
        />
      </div>
    </div>
  );
}