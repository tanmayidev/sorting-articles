import React, { useState } from "react";
import "./App.css";
import Articles from "./components/Articles";

const title = "Sorting Articles";

function App({ articles }) {
  const [sortType, setSortType] = useState("upvotes"); // Default sort type is upvotes

  const handleSortTypeChange = (type) => {
    setSortType(type);
  };

  const sortArticles = (articles, type) => {
    const sortedArticles = [...articles]; // Make a copy of the articles array

    // Sort the articles based on the sort type
    if (type === "upvotes") {
      sortedArticles.sort((a, b) => b.upvotes - a.upvotes); // Sort by upvotes in descending order
    } else if (type === "date") {
      sortedArticles.sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date in descending order
    }

    return sortedArticles;
  };

  const sortedArticles = sortArticles(articles, sortType);

  return (
    <div className="App">
      <h1>{title}</h1>
      <div className="navigation">
        <label className="form">Sort By </label>
        <button
          data-testid="most-upvoted-link"
          className="small"
          onClick={() => handleSortTypeChange("upvotes")}
        >
          Most Upvoted
        </button>
        <button
          data-testid="most-recent-link"
          className="small"
          onClick={() => handleSortTypeChange("date")}
        >
          Most Recent
        </button>
      </div>
      <Articles articles={sortedArticles} />
    </div>
  );
}

export default App;
