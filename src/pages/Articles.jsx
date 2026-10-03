import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  HeartPulse,
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
    icon: Activity,
    readTime: "5 min read",
  },
  {
    id: 2,
    category: "Nutrition",
    title: "Understanding balanced nutrition",
    description:
      "Explore the basic principles of balanced eating and why a variety of nutritious foods matters.",
    icon: Utensils,
    readTime: "6 min read",
  },
  {
    id: 3,
    category: "Preventive Care",
    title: "Why preventive healthcare matters",
    description:
      "Understand the role of regular checkups, healthy habits and early attention to health concerns.",
    icon: ShieldCheck,
    readTime: "5 min read",
  },
  {
    id: 4,
    category: "Heart Health",
    title: "Understanding everyday heart health",
    description:
      "Learn general information about activity, lifestyle habits and factors commonly associated with heart health.",
    icon: HeartPulse,
    readTime: "7 min read",
  },
];

function Articles() {
  return (
    <div className="articles-page">

      {/* HEADER */}
      <section className="articles-header">
        <div className="articles-container">

          <span className="page-eyebrow">
            <HeartPulse
              size={16}
              aria-hidden="true"
            />
            HEALTH ARTICLES
          </span>

          <h1>
            Learn more about
            <span> your health.</span>
          </h1>

          <p>
            Explore simple, educational health information
            covering wellness, nutrition, preventive care
            and healthy lifestyle habits.
          </p>

        </div>
      </section>

      {/* ARTICLES */}
      <section className="articles-section">

        <div className="articles-container">

          <div className="articles-heading">

            <div>
              <span>
                HEALTH & WELLNESS
              </span>

              <h2>
                Explore our latest articles
              </h2>
            </div>

            <p>
              Educational content for general
              health awareness.
            </p>

          </div>

          <div className="articles-grid">

            {articles.map((article) => {
              const Icon = article.icon;

              return (
                <article
                  className="article-card"
                  key={article.id}
                >

                  <div className="article-card-top">

                    <div
                      className="article-icon"
                      aria-hidden="true"
                    >
                      <Icon size={23} />
                    </div>

                    <span>
                      {article.category}
                    </span>

                  </div>

                  <h3>
                    {article.title}
                  </h3>

                  <p>
                    {article.description}
                  </p>

                  <div className="article-card-bottom">

                    <small>
                      {article.readTime}
                    </small>

                    <Link
                      to={`/articles/${article.id}`}
                      aria-label={`Read article: ${article.title}`}
                    >
                      Read Article
                      <ArrowRight
                        size={16}
                        aria-hidden="true"
                      />
                    </Link>

                  </div>

                </article>
              );
            })}

          </div>

        </div>

      </section>

      {/* DISCLAIMER */}
      <section className="articles-note">

        <div className="articles-container">

          <div className="articles-note-card">

            <ShieldCheck
              size={22}
              aria-hidden="true"
            />

            <div>

              <h3>
                General health information
              </h3>

              <p>
                These articles are intended for general
                educational purposes and are not a substitute
                for professional medical advice, diagnosis
                or treatment.
              </p>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Articles;