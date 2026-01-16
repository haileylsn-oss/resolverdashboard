import { useState } from "react";
import { Menu, X, User, Wallet } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between h-20">
            
            {/* LOGO (ONLY ONCE) */}
            <Link
              to="/wallet"
              className="text-2xl font-bold text-white"
            >
              DAPP
            </Link>

            {/* DESKTOP NAV */}
            <ul className="hidden lg:flex items-center gap-10 text-white font-medium">
              <li><Link to="/wallet">Home</Link></li>
              <li><Link to="/wallet">Feature</Link></li>
              <li><Link to="/wallet">RoadMap</Link></li>
              <li><Link to="/wallet">Blog</Link></li>
              <li><Link to="/wallet">Contact</Link></li>
            </ul>

            {/* RIGHT ACTIONS */}
            <div className="flex items-center gap-3">
              {/* CONNECT WALLET (VISIBLE ON ALL SCREENS) */}
              <Link
                to="/wallet"
                className="flex items-center gap-2 border border-white/30 px-4 py-2 rounded-full text-white text-sm hover:bg-white/10 transition"
              >
                <Wallet size={16} />
                <span className=" xs:inline">Connect Wallet </span>
              </Link>

              {/* MOBILE MENU */}
              <button
                className="lg:hidden text-white"
                onClick={() => setMobileOpen(true)}
              >
                <Menu size={26} />
              </button>
            </div>

          </nav>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <>
          {/* BACKDROP */}
          <div
            className="fixed inset-0 bg-black/60 z-40"
            onClick={() => setMobileOpen(false)}
          />

          {/* DRAWER */}
          <div className="fixed top-0 right-0 h-full w-72 bg-[#050814] z-50 p-6 flex flex-col">
            <button
              className="self-end text-white mb-10"
              onClick={() => setMobileOpen(false)}
            >
              <X size={26} />
            </button>

            {/* NAV LINKS */}
            <ul className="flex flex-col gap-6 text-white text-lg font-medium">
              <li><Link to="/wallet" onClick={() => setMobileOpen(false)}>Home</Link></li>
              <li><Link to="/wallet" onClick={() => setMobileOpen(false)}>Feature</Link></li>
              <li><Link to="/wallet" onClick={() => setMobileOpen(false)}>RoadMap</Link></li>
              <li><Link to="/wallet" onClick={() => setMobileOpen(false)}>Blog</Link></li>
              <li><Link to="/wallet" onClick={() => setMobileOpen(false)}>Contact</Link></li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
