import { useState } from "react";

const articles = [
  {
    id: 1,
    tag: "Design Systems",
    date: "Mar 10, 2025",
    title: "Why Every Project Needs a Design System from Day One",
    excerpt:
      "Starting with a design system seems like overhead — until your team is six months in and every button looks slightly different on every page.",
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&h=500&fit=crop",
  },
  {
    id: 2,
    tag: "Wireframing",
    date: "Feb 22, 2025",
    title: "Wireframes Are Not Just Sketches — They're Decisions",
    excerpt:
      "Every box you place in a wireframe is a decision about priority. Here's how to make those decisions faster and more deliberately.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=500&fit=crop",
  },
  {
    id: 3,
    tag: "React",
    date: "Jan 14, 2025",
    title: "Component-Based Thinking: From Figma to React",
    excerpt:
      "The mental model shift from designing screens to designing components — and why it makes your codebase radically easier to maintain.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop",
  },
  {
    id: 4,
    tag: "Typography",
    date: "Dec 5, 2024",
    title: "The Only Typographic Scale You'll Ever Need",
    excerpt:
      "Stop picking font sizes at random. A proper modular type scale solves readability, hierarchy, and responsiveness in one move.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=500&fit=crop",
  },
];

function ArticleCard({ tag, date, title, excerpt, image }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group border-[1.5px] border-[#1a1a18] rounded-md bg-white overflow-hidden flex flex-col cursor-pointer hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(26,26,24,1)] transition-all duration-200"
    >
      <div className="h-[240px] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 ${isHovered ? "scale-105" : "scale-100"}`}
        />
        <div
          className={`absolute inset-0 bg-[#1a1a18] transition-opacity duration-200 ${isHovered ? "opacity-5" : "opacity-0"}`}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex justify-between items-center mb-3">
          <span className="text-[9px] font-semibold tracking-[0.16em] uppercase text-[#9b9890]">
            {tag}
          </span>
          <span className="text-[10px] text-[#9b9890]">{date}</span>
        </div>
        <h3 className="font-[Syne] text-[19px] font-bold mb-3 leading-tight text-[#1a1a18] group-hover:text-[#6b6860] transition-colors">
          {title}
        </h3>
        <p className="text-[14px] leading-relaxed text-[#6b6860] flex-1 mb-4">
          {excerpt}
        </p>
        <span
          className={`text-[10px] font-semibold tracking-[0.12em] uppercase flex items-center gap-1.5 transition-colors duration-200 ${isHovered ? "text-[#1a1a18]" : "text-[#9b9890]"}`}
        >
          Read Article
          <span
            className={`transition-transform duration-200 ${isHovered ? "translate-x-1" : ""}`}
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
    <main className="w-full">
      {/* Header - Full Width */}
      <section className="border-b-[1.5px] border-[#1a1a18] py-16 px-12 lg:px-24">
        <div className="max-w-[1400px] mx-auto flex justify-between items-end">
          <div>
            <h1 className="font-[Syne] text-[48px] lg:text-[56px] font-extrabold tracking-tight leading-[1.1]">
              From the <span className="text-[#6b6860]">studio</span>
            </h1>
          </div>
          <span className="text-[10px] text-[#9b9890] tracking-[0.1em] uppercase">
            4 articles
          </span>
        </div>
      </section>

      {/* Articles Grid - Full Width */}
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
