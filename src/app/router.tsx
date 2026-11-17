import { createBrowserRouter, RouterProvider } from "react-router";

import RootLayout from "./routes/app/layouts/RootLayout";
import AppLayout from "./routes/app/layouts/AppLayout"
import Dashboard from "./routes/app/pages/Dashboard";
import MarketLayout from "./routes/app/layouts/MarketLayout";
import Market from "./routes/app/pages/Market";
import AssetDetails from "./routes/app/pages/AssetDetails";
import Trading from "./routes/app/pages/Trading";
import PortfolioLayout from "./routes/app/layouts/PortfolioLayout";
import PortfolioPerformance from "./routes/app/pages/PortfolioPerformance";
import PortfolioAssetAllocation from "./routes/app/pages/PortfolioAssetAllocation";
import PortfolioHoldings from "./routes/app/pages/PortfolioHoldings";
import PortfolioTransaction from "./routes/app/pages/PortfolioTransaction";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        Component: AppLayout,
        children: [
          {
            index: true,
            Component: Dashboard,
          },
          {
            path: "/market",
            Component: MarketLayout,
            children: [
              {
                index: true,
                Component: Market,
              },
              {
                path: "/market/:currencyId",
                Component: AssetDetails,
              },
            ]
          },
          {
            path: "/trade",
            Component: Trading,
          },
          {
            path: "/portfolio",
            Component: PortfolioLayout,
            children: [
              {
                path: "performance",
                Component: PortfolioPerformance
              },
              {
                path: "assetallocation",
                Component: PortfolioAssetAllocation
              },
              {
                path: "holdings",
                Component: PortfolioHoldings
              },
              {
                path: "transaction",
                Component: PortfolioTransaction
              }
            ]
          }
        ]
      },
    ]
  }
])

export default function AppRouter() {
  return <RouterProvider router={router} />;
}