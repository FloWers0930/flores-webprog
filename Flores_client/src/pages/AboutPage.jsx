// src/pages/AboutPage.jsx
import { Link } from "react-router-dom";
import Button from "../Components/Button";

function AboutPage() {
  return (
    <div className="w-full">
      <section className="px-12 lg:px-24 py-16 border-b-[1.5px] border-[#c5d0c5]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] tracking-[0.12em] uppercase text-[#8a9a8a] mb-4">
            About This Project
          </p>
          <h1 className="text-[28px] lg:text-[36px] font-light text-[#2a3a2a] leading-[1.2] mb-6 max-w-2xl">
            Lab Activity 3:{" "}
            <span className="italic">Component Architecture</span>
          </h1>
          <p className="text-[15px] leading-relaxed text-[#6a7a6a] max-w-2xl mb-8">
            This project demonstrates React fundamentals including component
            composition, props drilling, state management, and routing
            implementation.
          </p>
          <Link to="/articles">
            <Button variant="primary">View All Articles</Button>
          </Link>
        </div>
      </section>

      <section className="px-12 lg:px-24 py-16">
        <div className="max-w-[1400px] mx-auto grid sm:grid-cols-2 gap-8">
          <div className="p-8 rounded-2xl bg-white border-[1.5px] border-[#c5d0c5]">
            <h3 className="text-[14px] font-medium text-[#2a3a2a] mb-3 uppercase tracking-[0.06em]">
              Technologies
            </h3>
            <ul className="space-y-2 text-[13px] text-[#6a7a6a]">
              <li>React 18 with Hooks</li>
              <li>React Router v6</li>
              <li>Vite Build Tool</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-white border-[1.5px] border-[#c5d0c5]">
            <h3 className="text-[14px] font-medium text-[#2a3a2a] mb-3 uppercase tracking-[0.06em]">
              Features
            </h3>
            <ul className="space-y-2 text-[13px] text-[#6a7a6a]">
              <li>Reusable Component Pattern</li>
              <li>Dynamic Article Routing</li>
              <li>404 Error Handling</li>
              <li>Responsive Design</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;
