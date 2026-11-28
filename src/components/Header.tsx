import {
  Home,
  BarChart3,
  SlidersHorizontal,
  Wallet,
  Settings,
  type LucideIcon,
} from "lucide-react";
import { NavLink } from "react-router";

interface NavLinkData {
  lable: string;
  to: string;
  icon: LucideIcon;
  end?: boolean,
}

const navLinks: NavLinkData[] = [
  { lable: "Dashboard", to: "/", icon: Home, end: true },
  { lable: "Market", to: "/market", icon: BarChart3, end: false },
  { lable: "Trading", to: "/trade?network=eth", icon: SlidersHorizontal, end: false },
  { lable: "Portfolio", to: "/portfolio", icon: Wallet, end: false },

]

export function Header() {
  return (
    <header className="font-body sticky top-0 z-50 w-full bg-canvas px-4 py-3 sm:px-6">
      <div className="mx-auto flex max-w-350 items-center justify-between rounded-2xl border border-card bg-card px-4 py-2 sm:px-5">
        {/* Left: Brand + Navigation */}
        <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide sm:gap-5">
          {/* Logo */}
          <div className="flex shrink-0 items-center gap-2.5 cursor-pointer">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                viewBox="0 0 64 64">
                <defs>
                  <linearGradient id="cryptora-gradient"
                    x1="15" y1="0" x2="48" y2="64"
                    gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#E9A5FF" />
                    <stop offset="50%" stopColor="#C34BFA" />
                    <stop offset="100%" stopColor="#8B00E8" />
                  </linearGradient>
                </defs>

                <path
                  fill="url(#cryptora-gradient)"
                  d="
                  M32 2
                  L61 19
                  L47 27
                  L32 18
                  L15 28
                  L15 36
                  L32 46
                  L47 37
                  L61 45
                  L32 62    
                  L2 45
                  L2 19
                  Z
                "
                />
              </svg>
            </div>
            <span className="text-base font-bold tracking-tight text-white sm:text-lg">
              Cryptora
            </span>
          </div>

          {/* Divider */}
          <div className="h-5 w-px shrink-0 bg-card-border" />

          {/* Nav Links */}
          <nav className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((navLink) => {
              return (
                <NavLink
                  key={navLink.lable}
                  to={navLink.to}
                  end={navLink.end}
                  className={({ isActive }) =>
                    `hover-card flex shrink-0 items-center gap-2 rounded-xl px-3.5 py-1.5 text-xs font-medium transition-colors sm:text-sm ${isActive ? "bg-card-hover text-white" : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <navLink.icon className={`h-4 w-4 ${isActive ? "text-accent" : "text-gray-400"}`} />
                      <span>{navLink.lable}</span>
                    </>
                  )}
                </NavLink>
              )
            })}
          </nav>
        </div>

        {/* Right: Divider + Settings */}
        <div className="flex shrink-0 items-center gap-3 pl-3 sm:gap-4 sm:pl-4">
          <div className="h-5 w-px bg-card-border" />
          <button
            type="button"
            aria-label="Settings"
            className="hover-card flex h-9 w-9 items-center justify-center rounded-xl border border-card bg-card text-gray-400 transition-colors hover:text-white cursor-pointer"
          >
            <Settings className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
