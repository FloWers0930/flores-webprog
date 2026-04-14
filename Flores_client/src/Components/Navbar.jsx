// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => {
    if (path === "/articles" && location.pathname.startsWith("/articles")) {
      return "text-[#2a3a2a] font-medium";
    }
    return location.pathname === path
      ? "text-[#2a3a2a] font-medium"
      : "text-[#6a7a6a] hover:text-[#2a3a2a]";
  };

  return (
    <nav className="w-full px-12 lg:px-24 py-6 border-b-[1.5px] border-[#c5d0c5] bg-[#f8f9f5]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-full bg-[#c5d0c5] flex items-center justify-center group-hover:bg-[#8a9a8a] transition-colors">
            <div className="w-3 h-3 bg-[#f8f9f5] rounded-sm" />
          </div>
          <span className="text-[13px] font-medium tracking-[0.08em] text-[#2a3a2a] uppercase">
            Flores Studio
          </span>
        </Link>

        <div className="flex items-center gap-8">
          <Link
            to="/"
            className={`text-[12px] tracking-[0.06em] uppercase transition-colors ${isActive("/")}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`text-[12px] tracking-[0.06em] uppercase transition-colors ${isActive("/about")}`}
          >
            About
          </Link>
          <Link
            to="/articles"
            className={`text-[12px] tracking-[0.06em] uppercase transition-colors ${isActive("/articles")}`}
          >
            Articles
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
