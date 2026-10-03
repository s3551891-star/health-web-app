import { Link, useParams } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";

const articles = [
  {
    id: 1,
    category: "Healthy Lifestyle",
    title: "Simple habits for a healthier lifestyle",
    date: "October 1, 2026",
    icon: HeartPulse,
    content: [
      "A healthy lifestyle is built through small and consistent daily habits. Simple choices around movement, sleep, nutrition and routine can support overall wellbeing.",
      "Regular physical activity can be included through walking, stretching, sports or other activities that fit comfortably into your routine. The goal is to maintain a balanced and sustainable routine.",
      "Sleep is another important part of everyday wellbeing. Maintaining a consistent sleep schedule and creating a comfortable sleep environment can support healthy daily routines.",
      "Healthy habits should be realistic and appropriate for each person. If you have specific health concerns, consult a qualified healthcare professional.",
    ],
  },
  {
    id: 2,
    category: "Nutrition",
    title: "Understanding balanced nutrition",
    date: "September 28, 2026",
    icon: BookOpen,
    content: [
      "Balanced nutrition means getting a variety of nutrients from different types of foods. A varied diet can help support normal body functions and overall wellbeing.",
      "Fruits, vegetables, whole grains, protein sources and appropriate amounts of healthy fats can all be part of a balanced eating pattern.",
      "Hydration is also an important part of everyday health. Water needs can vary depending on activity, environment and individual circumstances.",
      "Nutrition needs are different for different people. For personalized dietary guidance, speak with a qualified healthcare professional or registered dietitian.",
    ],
  },
  {
    id: 3,
    category: "Preventive Care",
    title: "Why preventive healthcare matters",
    date: "September 24, 2026",
    icon: ShieldCheck,
    content: [
      "Preventive healthcare focuses on maintaining health and identifying potential health concerns early through appropriate care and regular checkups.",
      "Depending on age, medical history and individual circumstances, healthcare professionals may recommend different screenings, vaccinations or routine assessments.",
      "Keeping personal health information organized can also make it easier to discuss changes and questions with healthcare professionals during appointments.",
      "Preventive care recommendations should always be based on individual circumstances and guidance from qualified healthcare professionals.",
    ],
  },
  {
    id: 4,
    category: "Heart Health",
    title: "Everyday habits that support heart health",
    date: "September 20, 2026",
    icon: HeartPulse,
    content: [
      "Heart health is influenced by many factors, including physical activity, nutrition, sleep, stress management and other individual health factors.",
      "Regular movement and a balanced lifestyle can support general cardiovascular wellbeing. Activities should be appropriate for your individual circumstances.",
      "Monitoring health information such as blood pressure when recommended by a healthcare professional can help keep an organized health history.",
      "Health information on this page is for general educational purposes and does not replace professional medical advice.",
    ],
  },
];

function ArticleDetails() {
  const { id } = useParams();

  const article = articles.find(
    (item) => item.id === Number(id)
  );

  // INVALID ARTICLE
  if (!article) {
    return (
      <div className="article-not-found">

        <BookOpen
          size={45}
          aria-hidden="true"
        />

        <h1>Article Not Found</h1>

        <p>
          The health article you are looking for
          does not exist.
        </p>

        <Link
          to="/articles"
          className="primary-btn"
        >
          <ArrowLeft
            size={18}
            aria-hidden="true"
          />
          Back to Articles
        </Link>

      </div>
    );
  }

  const ArticleIcon = article.icon;

  return (
    <div className="article-details-page">

      {/* HEADER */}
      <section className="article-details-header">

        <div className="article-details-container">

          <Link
            to="/articles"
            className="back-articles-link"
          >
            <ArrowLeft
              size={17}
              aria-hidden="true"
            />
            Back to Articles
          </Link>

          <div className="article-details-category">

            <ArticleIcon
              size={17}
              aria-hidden="true"
            />

            {article.category}

          </div>

          <h1>
            {article.title}
          </h1>

          <div className="article-details-meta">

            <span>
              <CalendarDays
                size={16}
                aria-hidden="true"
              />
              {article.date}
            </span>

            <span>
              <BookOpen
                size={16}
                aria-hidden="true"
              />
              Health Information
            </span>

          </div>

        </div>

      </section>

      {/* ARTICLE CONTENT */}
      <main className="article-details-container article-content">

        <article className="article-content-card">

          <div
            className="article-content-icon"
            aria-hidden="true"
          >
            <ArticleIcon size={30} />
          </div>

          <div className="article-body">

            <p className="article-intro">
              This article provides general educational
              information about{" "}
              {article.category.toLowerCase()}.
            </p>

            {article.content.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}

          </div>

          {/* DISCLAIMER */}
          <div className="article-disclaimer">

            <ShieldCheck
              size={20}
              aria-hidden="true"
            />

            <div>

              <strong>
                Health Information Notice
              </strong>

              <p>
                This content is provided for general
                educational purposes only. It is not a
                diagnosis or a substitute for professional
                medical advice.
              </p>

            </div>

          </div>

        </article>

        {/* BOTTOM CTA */}
        <section className="article-details-cta">

          <div>

            <span>
              EXPLORE MORE
            </span>

            <h2>
              Continue exploring health information.
            </h2>

            <p>
              Discover more educational articles and
              healthcare resources.
            </p>

          </div>

          <Link
            to="/articles"
            className="primary-btn"
          >
            View All Articles

            <ArrowRight
              size={18}
              aria-hidden="true"
            />
          </Link>

        </section>

      </main>

    </div>
  );
}

export default ArticleDetails;