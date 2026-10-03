import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Bookmark,
  CalendarDays,
  HeartPulse,
  Search,
  ShieldCheck,
  Utensils,
} from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Healthy Lifestyle",
    title: "Simple habits for a healthier daily routine",
    description:
      "Learn practical ways to build healthy routines around sleep, activity, hydration and everyday wellbeing.",
    date: "October 1, 2026",
    readTime: "5 min read",
    icon: HeartPulse,
    saved: true,
  },
  {
    id: 2,
    category: "Nutrition",
    title: "Understanding balanced nutrition",
    description:
      "Explore the basic principles of balanced eating and why a variety of nutritious foods matters.",
    date: "September 28, 2026",
    readTime: "6 min read",
    icon: Utensils,
    saved: true,
  },
  {
    id: 3,
    category: "Preventive Care",
    title: "Why preventive healthcare matters",
    description:
      "Understand the role of regular checkups, healthy habits and early attention to health concerns.",
    date: "September 24, 2026",
    readTime: "5 min read",
    icon: ShieldCheck,
    saved: false,
  },
  {
    id: 4,
    category: "Heart Health",
    title: "Understanding everyday heart health",
    description:
      "Learn general information about activity, lifestyle habits and factors commonly associated with heart health.",
    date: "September 20, 2026",
    readTime: "7 min read",
    icon: HeartPulse,
    saved: false,
  },
];

function DashboardArticles() {
  const [search, setSearch] = useState("");

  const [savedArticles, setSavedArticles] =
    useState(
      articles.reduce((result, article) => {
        result[article.id] = article.saved;
        return result;
      }, {})
    );

  const filteredArticles = articles.filter((article) => {
    const searchValue = search.trim().toLowerCase();

    if (!searchValue) {
      return true;
    }

    return (
      article.title.toLowerCase().includes(searchValue) ||
      article.category.toLowerCase().includes(searchValue) ||
      article.description.toLowerCase().includes(searchValue)
    );
  });

  const savedCount = Object.values(savedArticles).filter(
    Boolean
  ).length;

  const toggleSaved = (id) => {
    setSavedArticles((previous) => ({
      ...previous,
      [id]: !previous[id],
    }));
  };

  return (
    <div className="dashboard-articles-page">

      {/* HEADER */}
      <section className="dashboard-articles-header">

        <div className="dashboard-articles-container">

          <Link
            to="/dashboard"
            className="back-dashboard-link"
          >
            <ArrowLeft
              size={17}
              aria-hidden="true"
            />
            Back to Dashboard
          </Link>

          <div className="dashboard-articles-heading">

            <span className="page-eyebrow">
              <BookOpen
                size={16}
                aria-hidden="true"
              />
              MY ARTICLES
            </span>

            <h1>
              Health articles
            </h1>

            <p>
              Explore educational health information
              and keep useful articles saved for later.
            </p>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <main className="dashboard-articles-container dashboard-articles-content">

        {/* TOP BAR */}
        <div className="dashboard-articles-topbar">

          <div>
            <h2>
              Explore Health Information
            </h2>

            <p>
              General educational content for health awareness.
            </p>
          </div>

          <Link
            to="/articles"
            className="secondary-btn"
          >
            View All Articles
            <ArrowRight
              size={17}
              aria-hidden="true"
            />
          </Link>

        </div>

        {/* SUMMARY */}
        <section className="dashboard-article-summary">

          <div className="dashboard-article-summary-card">

            <div
              className="dashboard-article-summary-icon"
              aria-hidden="true"
            >
              <BookOpen size={21} />
            </div>

            <div>
              <span>Available Articles</span>
              <strong>{articles.length}</strong>
            </div>

          </div>

          <div className="dashboard-article-summary-card">

            <div
              className="dashboard-article-summary-icon"
              aria-hidden="true"
            >
              <Bookmark size={21} />
            </div>

            <div>
              <span>Saved Articles</span>
              <strong>{savedCount}</strong>
            </div>

          </div>

          <div className="dashboard-article-summary-card">

            <div
              className="dashboard-article-summary-icon"
              aria-hidden="true"
            >
              <HeartPulse size={21} />
            </div>

            <div>
              <span>Health Topics</span>
              <strong>4</strong>
            </div>

          </div>

        </section>

        {/* SEARCH */}
        <section className="dashboard-articles-search-section">

          <div className="dashboard-articles-search">

            <Search
              size={19}
              aria-hidden="true"
            />

            <input
              type="search"
              placeholder="Search health articles..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
              aria-label="Search health articles"
            />

          </div>

        </section>

        {/* ARTICLES */}
        <section className="dashboard-articles-list-section">

          <div className="dashboard-articles-section-heading">

            <div>
              <span>HEALTH & WELLNESS</span>

              <h2>
                Articles for you
              </h2>
            </div>

            <span>
              {filteredArticles.length}{" "}
              {filteredArticles.length === 1
                ? "Article"
                : "Articles"}
            </span>

          </div>

          {filteredArticles.length > 0 ? (
            <div className="dashboard-articles-grid">

              {filteredArticles.map((article) => {
                const ArticleIcon = article.icon;

                return (
                  <article
                    className="dashboard-article-card"
                    key={article.id}
                  >

                    <div className="dashboard-article-card-top">

                      <div
                        className="dashboard-article-icon"
                        aria-hidden="true"
                      >
                        <ArticleIcon size={23} />
                      </div>

                      <span>
                        {article.category}
                      </span>

                      <button
                        type="button"
                        className={`dashboard-article-save ${
                          savedArticles[article.id]
                            ? "saved"
                            : ""
                        }`}
                        onClick={() =>
                          toggleSaved(article.id)
                        }
                        aria-label={
                          savedArticles[article.id]
                            ? `Remove ${article.title} from saved articles`
                            : `Save ${article.title}`
                        }
                        aria-pressed={
                          savedArticles[article.id]
                        }
                      >
                        <Bookmark
                          size={17}
                          fill={
                            savedArticles[article.id]
                              ? "currentColor"
                              : "none"
                          }
                          aria-hidden="true"
                        />
                      </button>

                    </div>

                    <h3>
                      {article.title}
                    </h3>

                    <p>
                      {article.description}
                    </p>

                    <div className="dashboard-article-meta">

                      <span>
                        <CalendarDays
                          size={14}
                          aria-hidden="true"
                        />
                        {article.date}
                      </span>

                      <span>
                        <BookOpen
                          size={14}
                          aria-hidden="true"
                        />
                        {article.readTime}
                      </span>

                    </div>

                    <Link
                      to={`/articles/${article.id}`}
                      className="dashboard-article-read-link"
                    >
                      Read Article
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                      />
                    </Link>

                  </article>
                );
              })}

            </div>
          ) : (
            <div className="dashboard-articles-empty">

              <Search
                size={40}
                aria-hidden="true"
              />

              <h3>
                No articles found
              </h3>

              <p>
                Try searching with another keyword.
              </p>

              <button
                type="button"
                className="secondary-btn"
                onClick={() => setSearch("")}
              >
                Clear Search
              </button>

            </div>
          )}

        </section>

        {/* INFORMATION */}
        <section className="dashboard-articles-info">

          <ShieldCheck
            size={22}
            aria-hidden="true"
          />

          <div>

            <h3>
              Health information notice
            </h3>

            <p>
              Articles are provided for general educational
              purposes only. They are not a diagnosis or a
              substitute for professional medical advice.
            </p>

          </div>

        </section>

      </main>

    </div>
  );
}

export default DashboardArticles;