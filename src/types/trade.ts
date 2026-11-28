export interface Network {
  "id": string,
  "type": string,
  "attributes": {
    "name": string,
    "coingecko_asset_platform_id": string
  }
}

export interface Networks {
  data: Network[];
}

export interface Pool {
  id: string;
  type: "pool";
  attributes: PoolAttributes;
  relationships: PoolRelationships;
}

interface PoolAttributes {
  base_token_price_usd: string;
  base_token_price_native_currency: string;
  quote_token_price_usd: string;
  quote_token_price_native_currency: string;
  base_token_price_quote_token: string;
  quote_token_price_base_token: string;

  address: string;
  name: string;
  pool_created_at: string;

  fdv_usd: string;
  market_cap_usd: string;

  price_change_percentage: PriceChangePercentage;
  transactions: TransactionPeriods;
  volume_usd: VolumePeriods;

  reserve_in_usd: string;
}

interface PriceChangePercentage {
  m5: string;
  m15: string;
  m30: string;
  h1: string;
  h6: string;
  h24: string;
}

interface TransactionPeriods {
  m5: TransactionStats;
  m15: TransactionStats;
  m30: TransactionStats;
  h1: TransactionStats;
  h6: TransactionStats;
  h24: TransactionStats;
}

interface TransactionStats {
  buys: number;
  sells: number;
  buyers: number;
  sellers: number;
  unique_traders: number;
}

interface VolumePeriods {
  m5: string;
  m15: string;
  m30: string;
  h1: string;
  h6: string;
  h24: string;
}

interface PoolRelationships {
  base_token: {
    data: ResourceIdentifier;
  };
  quote_token: {
    data: ResourceIdentifier;
  };
  dex: {
    data: ResourceIdentifier;
  };
}

interface ResourceIdentifier {
  id: string;
  type: "token" | "dex";
}

interface Token {
  id: string;
  type: "token";
  attributes: {
    address: string;
    name: string;
    symbol: string;
    image_url: string | null;
  };
}

export interface Pools {
  data: Pool[];
  included: Token[];
}