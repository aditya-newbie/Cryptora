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
  const page1 = await fetch("https://api.geckoterminal.com/api/v2/networks?page=1");
  const page2 = await fetch("https://api.geckoterminal.com/api/v2/networks?page=2");
  const page3 = await fetch("https://api.geckoterminal.com/api/v2/networks?page=3");

  if (!page1.ok || !page3.ok || !page3.ok) {
    throw new Error("Failed to fetch networks")
  }

  const page1Data = await page1.json()
  const page2Data = await page2.json()
  const page3Data = await page3.json()

  return {data: [ ...page1Data.data, ...page2Data.data, ...page3Data.data ]}
}
