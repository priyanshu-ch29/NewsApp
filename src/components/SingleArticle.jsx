import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useArticleList from "../utils/useAriticleList";
import SingleArticleCard from "./SingleArticleCard";
import Loading from "./Loading";

const SingleArticle = () => {
  const { name } = useParams();
  const { articlesList } = useArticleList();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const foundArticle = articlesList.find(
      (item) => item?.source?.name === name
    );
    setArticle(foundArticle);
  }, [name, articlesList]);

  if (article === undefined) {
    return <Loading />;
  }

  return article ? (
    <SingleArticleCard data={article} />
  ) : (
    <h1>Article not found</h1>
  );
};

export default SingleArticle;
