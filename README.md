# NewsApp

# Overview

- NewsApp is a modern, responsive web application built with React.js and styled with Tailwind CSS. It fetches news articles from a news API and displays them in a user-friendly interface. The application features pagination, category-specific news, and individual article views. Users can navigate seamlessly using React Router, and a loading shimmer is displayed while data is being fetched.

# Features

- Responsive Design: The application is fully responsive, ensuring a great user experience on both mobile and desktop devices.
- News Categories: Users can filter news by categories such as Sports, Technology, and Science.
- Pagination: The app supports pagination, allowing users to browse through different pages of news articles.
- Article View: Clicking on a news article card navigates the user to a detailed view of the article.
- Loading Shimmer: A loading shimmer is displayed while fetching data from the news API.
- Custom Hook: A custom hook is used to fetch news data from the API.

# Technologies Used

- React.js: For building the user interface.
- Vite: For fast and efficient development.
- React Router: For handling navigation and routing.
- Tailwind CSS: For styling the application.
- News API: To fetch news data.
- Vercel: For deployment.

# Getting Started

- Prerequisites
- Make sure you have the following installed on your local machine:

- Node.js
- npm or yarn

# Installation

- Clone the repository:
- git clone https://github.com/your-username/newsapp.git

# Navigate to the project directory:

- cd newsapp

# Install dependencies:

- npm install

# Running the Application

- To start the development server, run:
- npm run dev
- Open http://localhost:3000 to view it in the browser.

# Project Structure

newsapp/
├── node_modules/
├── public/
│ ├── index.html
│ └── ...
├── src/
│ ├── assets/
│ ├── components/
│ │ ├── ArticleCard.jsx
│ │ ├── ArticlePage.jsx
│ │ ├── Header.jsx
│ │ ├── Loading.jsx
│ │ ├── Shimmer.jsx
│ │ ├── SingleArticle.jsx
│ │ └── SingleArticleCard.jsx
│ ├── utils/
│ │ ├── constant.js
│ │ ├── useArticleList.js
│ │ └── useArticleApi.js
│ ├── App.jsx
│ ├── index.css
│ ├── main.jsx
├── .eslintrc.cjs
├── .gitignore
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
├── vite.config.js

# Deployment

- The application is deployed on Vercel. You can view the live site [https://news-app-lime-delta.vercel.app/].

# Contributing

- Contributions are welcome! Please fork the repository and create a pull request with your changes.

# License

- This project is licensed under the MIT License.

# Contact

- If you have any questions or suggestions, feel free to reach out to me at [priyanshuchaudhary1000@gmail.com].
