// src/pages/ArticlePage.jsx
import { useParams, Link } from "react-router-dom";
import Button from "../components/Button";
import articles from "../assets/article-content.js";

function ArticlePage() {
  const { name } = useParams();
  const article = articles.find((article) => article.name === name);

  if (!article) {
    return (
      <div className="w-full px-12 lg:px-24 py-16">
        <div className="max-w-[1400px] mx-auto text-center">
          <h1 className="text-[24px] text-[#2a3a2a] mb-4">Article not found</h1>
          <Link to="/articles">
            <Button>Back to Articles</Button>
          </Link>
        </div>
      </div>
    );
  }

  const formattedName = article.name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="w-full">
      {/* Article Header */}
      <section className="px-12 lg:px-24 py-12 border-b-[1.5px] border-[#c5d0c5]">
        <div className="max-w-[800px] mx-auto">
          <Link to="/articles" className="inline-block mb-6">
            <Button variant="secondary" className="text-[10px]">
              ← Back to Articles
            </Button>
          </Link>

          <p className="text-[11px] tracking-[0.12em] uppercase text-[#8a9a8a] mb-3">
            {formattedName}
          </p>
          <h1 className="text-[28px] lg:text-[36px] font-light text-[#2a3a2a] leading-[1.2] mb-6">
            {article.title}
          </h1>
          <div className="flex items-center gap-4 text-[12px] text-[#8a9a8a]">
            <span>Flores Studio</span>
            <span>•</span>
            <span>{new Date().toLocaleDateString()}</span>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-12 lg:px-24 py-12">
        <div className="max-w-[800px] mx-auto">
          {/* Featured Image */}
          <div className="aspect-video rounded-2xl bg-[#e8ebe3] mb-8 flex items-center justify-center">
            <div className="w-16 h-16 rounded-xl bg-[#c5d0c5] flex items-center justify-center">
              <div className="w-6 h-6 bg-[#f8f9f5] rounded-sm" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            {article.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-[15px] leading-[1.8] text-[#4a5a4a] whitespace-pre-wrap"
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Footer */}
          <div className="mt-12 pt-8 border-t-[1.5px] border-[#c5d0c5]">
            <Link to="/articles">
              <Button variant="secondary">Back to Articles</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ArticlePage;
