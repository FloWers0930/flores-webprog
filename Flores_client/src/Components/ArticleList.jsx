// src/components/ArticleList.jsx
import { Link } from "react-router-dom";
import Button from "./Button";
import articles from "../assets/article-content.js";

const ArticleList = () => {
  // Add Article 05 with broken link
  const allArticles = [
    ...articles,
    {
      name: "this-article-does-not-exist", // Broken link - not in articles array
      title: "Managing State in React",
      image: "https://picsum.photos/seed/statemgmt/800/600",
      content: [
        "State allows components to keep track of dynamic data.",
        "useState hook lets functional components manage state.",
        "Example:\nconst [count, setCount] = useState(0);",
        "Updating state triggers a re-render with the new value.",
        "For complex state logic, consider useReducer or state management libraries like Redux.",
      ],
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {allArticles.map((article, index) => {
        const isArticle05 = index === 4;

        return (
          <article
            key={article.name}
            className="group bg-white rounded-2xl border-[1.5px] border-[#c5d0c5] p-5 flex flex-col hover:border-[#8a9a8a] transition-colors duration-300"
          >
            {/* Article Image */}
            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-[#e8ebe3]">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML =
                    '<div class="w-full h-full flex items-center justify-center"><div class="w-10 h-10 rounded-lg bg-[#c5d0c5] flex items-center justify-center"><div class="w-4 h-4 bg-[#f8f9f5] rounded-sm"></div></div></div>';
                }}
              />
            </div>

            {/* Article Number */}
            <p className="text-[10px] tracking-[0.12em] uppercase text-[#8a9a8a] mb-2">
              Article {String(index + 1).padStart(2, "0")}
            </p>

            {/* Title */}
            <h3 className="text-[16px] font-medium text-[#2a3a2a] mb-3 leading-snug line-clamp-2">
              {article.title}
            </h3>

            {/* Excerpt */}
            <p className="text-[13px] leading-relaxed text-[#6a7a6a] line-clamp-3 flex-grow mb-4">
              {article.content[0].substring(0, 120)}...
            </p>

            {/* Read More Button - Article 05 goes to broken link */}
            <Link
              to={
                isArticle05
                  ? "/articles/broken-link-404"
                  : `/articles/${article.name}`
              }
              className="mt-auto"
            >
              <Button variant="secondary" className="w-full">
                Read More
              </Button>
            </Link>
          </article>
        );
      })}
    </div>
  );
};

export default ArticleList;
