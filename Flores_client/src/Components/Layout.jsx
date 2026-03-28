import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f5f4f0]">
      <Navbar />

      <main className="flex-1 w-full">
        <Outlet />
      </main>

      <footer
        className="max-w-[1200px] w-full mx-auto px-10 py-7 flex justify-between items-center
       border-t-[1.5px] border-[#d8d5ce]"
      >
        <span className="text-[11px] text-[#9b9890] tracking-[0.04em]">
          © 2025 Flores Studio. All rights reserved.
        </span>
        <span className="text-[11px] text-[#9b9890] tracking-[0.04em]">
          Built with React + Vite + Tailwind
        </span>
      </footer>
    </div>
  );
}

export default Layout;
