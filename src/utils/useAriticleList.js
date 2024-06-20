import { useEffect, useState } from "react";

const useArticleList = () => {
  const [articlesList, setArticlesList] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const data = await fetch(
          `https://saurav.tech/NewsAPI/top-headlines/category/general/in.json`
        );
        const res = await data.json();
        setArticlesList(res.articles);
      } catch (err) {
        console.error("Error fetching in data", err);
      }
    };
    fetchApi();
  }, []);

  return { articlesList };
};

export default useArticleList;
