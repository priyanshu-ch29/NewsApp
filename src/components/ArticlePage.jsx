import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { Link } from "react-router-dom";
import useArticleApi from "../utils/useArticleApi";
import Shimmer from "./Shimmer";

const ArticlePage = ({ category }) => {
  const { articles } = useArticleApi(category);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(6);
  const [currentPost, setCurrentPost] = useState([]);

  useEffect(() => {
    if (articles && articles.length > 0) {
      const lastPostIndex = currentPage * postPerPage;
      const firstPostIndex = lastPostIndex - postPerPage;
      setCurrentPost(articles.slice(firstPostIndex, lastPostIndex));
    }
  }, [articles, currentPage, postPerPage]);

  const totalPages = Math.ceil((articles?.length || 0) / postPerPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return articles?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <div className="grid grid-cols-3 gap-10 m-5 w-[85%] justify-center justify-items-center mx-auto max-md:grid-cols-1 max-xl:grid-cols-2">
          {currentPost.map((item, index) => (
            <Link key={index} to={`/article/${item?.source?.name}`}>
              <ArticleCard data={item} />
            </Link>
          ))}
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 my-8 border shadow-lg text-white bg-black rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 my-8 border shadow-lg text-white bg-black rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ArticlePage;
