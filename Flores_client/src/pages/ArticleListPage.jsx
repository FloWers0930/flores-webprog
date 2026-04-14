// src/pages/ArticleListPage.jsx
import Button from "../Components/Button";
import ArticleList from "../Components/ArticleList";
import articles from "../assets/article-content.js";
import { Link } from "react-router-dom";

const ArticleListPage = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <section className="px-12 lg:px-24 py-12 border-b-[1.5px] border-[#c5d0c5]">
        <div className="max-w-[1400px] mx-auto">
          <p className="text-[11px] tracking-[0.12em] uppercase text-[#8a9a8a] mb-3">
            Featured Articles
          </p>
          <h1 className="text-[28px] lg:text-[32px] font-light text-[#2a3a2a] leading-[1.2] mb-4">
            Article Collection
          </h1>
          <p className="text-[14px] leading-relaxed text-[#6a7a6a] max-w-xl mb-6">
            Explore our curated selection of React development articles. Each
            piece focuses on essential concepts and practical implementation.
          </p>
          <Link to="/">
            <Button variant="secondary">Back Home</Button>
          </Link>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-12 lg:px-24 py-12">
        <div className="max-w-[1400px] mx-auto">
          <ArticleList articles={articles} />
        </div>
      </section>
    </div>
  );
};

export default ArticleListPage;     
