import { NavLink } from "react-router-dom";
import Logo from "../Components/Logo";

function Navbar() {
  const linkBaseClasses =
    "font-['DM_Sans'] text-[11px] font-medium tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-full transition-all duration-200";

  return (
    <nav className="w-full bg-white border-b-[1.5px] border-[#1a1a18] sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-12 lg:px-24 h-16 flex items-center justify-between">
        <NavLink to="/" className="no-underline">
          <Logo />
        </NavLink>

        <div className="flex items-center gap-2">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${linkBaseClasses} ${isActive ? "bg-[#1a1a18] text-white" : "text-[#6b6860] hover:text-[#1a1a18]"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${linkBaseClasses} ${isActive ? "bg-[#1a1a18] text-white" : "text-[#6b6860] hover:text-[#1a1a18]"}`
            }
          >
            About
          </NavLink>
          <NavLink
            to="/articles"
            className={({ isActive }) =>
              `${linkBaseClasses} ${isActive ? "bg-[#1a1a18] text-white" : "text-[#6b6860] hover:text-[#1a1a18]"}`
            }
          >
            Articles
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
