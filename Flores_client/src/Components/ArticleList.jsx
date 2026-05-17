import { Link } from "react-router-dom";

const ArticleList = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {articles.map((article, index) => (
        <div
          key={index}
          className="group border border-[#c5d0c5] rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 bg-white"
        >
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <span className="text-4xl">📄</span>
          </div>

          <div className="p-6">
            <h3 className="text-xl font-semibold text-[#2a3a2a] mb-2 line-clamp-2">
              {article.title}
            </h3>

            <p className="text-[#6a7a6a] text-sm leading-relaxed line-clamp-3 mb-4">
              {article.content.substring(0, 120)}...
            </p>

            <Link
              to={`/articles/${article.slug || index}`}
              className="inline-block text-[#2a3a2a] font-medium hover:underline"
            >
              Read Article →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;
