import { useEffect, useState } from "react";

const useArticleApi = (category) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const data = await fetch(
          `https://saurav.tech/NewsAPI/top-headlines/category/${category}/in.json`
        );
        const res = await data.json();
        setArticles(res.articles);
      } catch (err) {
        console.error("Error fetching in data", err);
        setArticles([]);
      }
    };
    fetchApi();
  }, [category]);

  return { articles };
};

export default useArticleApi;
