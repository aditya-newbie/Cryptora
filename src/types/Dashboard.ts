import type  MarketCoin from "./MarketCoin";

export interface FilterItem {
  name: string;
  id: string;
}

export interface CategoryMarkets {
  layer1: MarketCoin[];
  layer2: MarketCoin[];
  defi: MarketCoin[];
  memeCoins: MarketCoin[];
  gaming: MarketCoin[];
  stablecoins: MarketCoin[];
  rwa: MarketCoin[];
  privacyCoins: MarketCoin[];
}