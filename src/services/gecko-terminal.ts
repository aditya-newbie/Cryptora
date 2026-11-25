interface Network {
  "id": string,
  "type": string,
  "attributes": {
    "name": string,
    "coingecko_asset_platform_id": string
  }
}

interface Networks {
  data: Network[];
}

export async function fetchNetworks(): Promise<Networks> {
  const res = await fetch("https://api.geckoterminal.com/api/v2/networks");

  if (!res.ok) {
    throw new Error("Failed to fetch networks")
  }

  return res.json()
}