import { Outlet } from "react-router";
import { Wallet } from "lucide-react";

export default function PortfolioLayout() {
  return (
    <div className="font-body min-h-screen bg-canvas text-white">
      <div className="mx-auto max-w-350 px-6 py-8">
        {/* ── Header ── */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Portfolio</h1>
            <p className="mt-1 text-sm text-gray-400">
              Manage your paper trading portfolio.
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-white cursor-pointer">
            <Wallet className="h-4 w-4" />
            Paper Trading
          </button>
        </div>

        {/* ── Tab Navigation ── */}
        <div className="mt-6 flex items-center gap-2 border-b border-card pb-0">
          <button className="rounded-t-lg px-6 py-2.5 text-sm text-gray-400 hover:text-white cursor-pointer">
            Performance
          </button>
          <button className="rounded-full bg-accent px-6 py-2.5 text-sm font-medium text-white cursor-pointer">
            Assets Allocation
          </button>
          <button className="rounded-t-lg px-6 py-2.5 text-sm text-gray-400 hover:text-white cursor-pointer">
            Holdings
          </button>
          <button className="rounded-t-lg px-6 py-2.5 text-sm text-gray-400 hover:text-white cursor-pointer">
            Recent Transactions
          </button>
        </div>

        {/* ── Outlet ── */}
        <div className="mt-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

