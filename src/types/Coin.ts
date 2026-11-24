export type ApiMarketData = number[][];

export interface ChartData {
  time: number,
  price: number
}

export type MarketChartData = Record<string, ChartData[]>


export interface CoinDetail {
  id: string;
  symbol: string;
  name: string;
  description: Record<string, string>;

  image: {
    thumb: string;
    small: string;
    large: string;
  };

  categories: string[];

  links: {
    homepage: string[];
    whitepaper: string;
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
    announcement_url: string[];
    twitter_screen_name: string | null;
    facebook_username: string | null;
    subreddit_url: string | null;
    repos_url: {
      github: string[];
      bitbucket: string[];
    };
    telegram_channel_identifier: string;
  };

  genesis_date: string | null;
  country_origin: string | null;

  platforms: Record<string, string>;

  market_data: CoinMarketData;

  last_updated: string;
}


interface CoinMarketData {
  current_price: Record<string, number | null>;

  market_cap: Record<string, number | null>;
  market_cap_rank: number | null;
  fully_diluted_valuation: Record<string, number | null>;

  total_volume: Record<string, number | null>;

  high_24h: Record<string, number | null>;
  low_24h: Record<string, number | null>;

  price_change_24h: number | null;
  price_change_percentage_24h: number | null;
  price_change_percentage_7d: number | null;
  price_change_percentage_14d: number | null;
  price_change_percentage_30d: number | null;
  price_change_percentage_1y: number | null;

  circulating_supply: number | null;
  total_supply: number | null;
  max_supply: number | null;

  ath: Record<string, number | null>;
  ath_change_percentage: Record<string, number | null>;
  ath_date: Record<string, string | null>;

  atl: Record<string, number | null>;
  atl_change_percentage: Record<string, number | null>;
  atl_date: Record<string, string | null>;
}

