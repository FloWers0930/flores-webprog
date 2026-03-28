import { useState } from "react";

const articles = [
  {
    id: 1,
    tag: "Design Systems",
    date: "Mar 10, 2025",
    title: "Building Scalable Design Systems for Growing Products",
    excerpt:
      "Well-structured design systems enable teams to maintain consistency, accelerate development, and scale efficiently as products evolve.",
    image:
      "https://images.unsplash.com/photo-1662947852092-417aa4cd699b?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    tag: "Wireframing",
    date: "Feb 22, 2025",
    title: "Wireframing as a Strategic Foundation for Product Design",
    excerpt:
      "Wireframes create a clear blueprint for aligning teams, validating ideas, and establishing product direction early in the design process.",
    image:
      "https://images.unsplash.com/photo-1600132806608-231446b2e7af?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Ds",
  },
  {
    id: 3,
    tag: "React",
    date: "Jan 14, 2025",
    title: "Scaling Applications with Component-Driven Architecture",
    excerpt:
      "A component-based architecture improves maintainability, reusability, and long-term scalability for modern web applications.",
    image:
      "https://images.unsplash.com/photo-1653387300291-bfa1eeb90e16?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    tag: "Typography",
    date: "Dec 5, 2024",
    title: "Creating Consistent Typography Across Digital Products",
    excerpt:
      "A standardized typographic system enhances readability, reinforces brand identity, and ensures a cohesive user experience.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLtD8dc5Hxoi5ZHzLmAtCTh-QMbkZ-z2Khkw&s",
  },
];

function ArticleCard({ tag, date, title, excerpt, image }) {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group border-[1.5px] border-[#4a5c4a] rounded-md bg-white overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(74,92,74,1)] transition-all duration-300"
    >
      <div className="h-[240px] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />
        <div
          className={`absolute inset-0 bg-[#4a5c4a] transition-opacity duration-200 ${
            hovered ? "opacity-5" : "opacity-0"
          }`}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[9px] font-semibold tracking-[0.16em] uppercase text-[#8a9a8a]">
            {tag}
          </span>
          <span className="text-[10px] text-[#8a9a8a]">{date}</span>
        </div>
        <h3 className="font-[Syne] text-[19px] font-bold mb-3 leading-tight text-[#4a5c4a] group-hover:text-[#6b7b6b] transition-colors">
          {title}
        </h3>
        <p className="text-[14px] leading-relaxed text-[#6b7b6b] flex-1 mb-4">
          {excerpt}
        </p>
        <span
          className={`text-[10px] font-semibold tracking-[0.12em] flex items-center gap-1.5 transition-colors duration-200 ${
            hovered ? "text-[#4a5c4a]" : "text-[#8a9a8a]"
          }`}
        >
          Read Full Article
          <span
            className={`transition-transform duration-200 ${
              hovered ? "translate-x-1" : ""
            }`}
          >
            →
          </span>
        </span>
      </div>
    </article>
  );
}

function ArticlePage() {
  return (
    <main className="w-full bg-[#f8f9f5]">
      {/* Page Header */}
      <section className="border-b-[1.5px] border-[#4a5c4a] py-16 px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex justify-between items-end">
          <div>
            <p className="text-[10px] font-medium tracking-[0.16em] uppercase text-[#8a9a8a] mb-2">
              Insights & Knowledge
            </p>
            <h1 className="font-[Syne] text-[48px] lg:text-[56px] font-extrabold tracking-tight leading-[1.1] text-[#4a5c4a]">
              Company <span className="text-[#8a9a8a]">Articles</span>
            </h1>
          </div>
          <span className="text-[10px] text-[#8a9a8a] tracking-[0.1em] uppercase">
            {articles.length} Articles Published
          </span>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article) => (
              <ArticleCard key={article.id} {...article} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ArticlePage;