import React, { useState } from "react";
import Header from "./components/Header";
import ArticlePage from "./components/ArticlePage";
import { createBrowserRouter } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";

const App = () => {
  const [category, setCategory] = useState("general");

  return (
    <>
      <div className=" bg-gradient-to-t from-black">
        <Header setCategory={setCategory} />
        <ArticlePage category={category} />
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/article/:name",
    element: <SingleArticle />,
  },
]);

export default App;
