import React, { useEffect, useState } from "react";

interface Article {
  url: string;
  urlToImage: string;
  title: string;
  author: string;
  description: string;
  publishedAt: string;
}

interface NewsData {
  articles: Article[];
}

function News() {
  const [newsData, setNewsData] = useState<NewsData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const articlesPerPage = 20;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          "http://localhost:3002/api/news/getdailynews"
        );
        if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
        const data: NewsData = await response.json();
        setNewsData(data);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!newsData || !newsData.articles) {
    return <div>No articles found.</div>;
  }

  // Pagination
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = newsData.articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {currentArticles.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
      <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={newsData.articles.length}
        paginate={paginate}
      />
    </div>
  );
}

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-b-4 border-gray-900"></div>
    </div>
  );
}

interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        <div className="relative">
          <img
            src={article.urlToImage}
            alt={article.title}
            className="w-full h-56 object-cover"
          />
          <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2">{article.title}</h3>
          <p className="text-sm text-gray-600 mb-4">By {article.author}</p>
          <p className="text-sm text-gray-700">{article.description}</p>
        </div>
        <div className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <p className="text-xs text-gray-500">Published: {new Date(article.publishedAt).toLocaleDateString()}</p>
          <p className="text-xs text-gray-500">Reading time: 3 minutes</p>
        </div>
      </a>
    </div>
  );
}

interface PaginationProps {
  articlesPerPage: number;
  totalArticles: number;
  paginate: (pageNumber: number) => void;
}

function Pagination({ articlesPerPage, totalArticles, paginate }: PaginationProps) {
  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-8">
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <li key={number}>
            <a
              onClick={() => paginate(number)}
              href="#"
              className="px-4 py-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default News;
