import Header from "../components/Header";
import Footer from "../components/Footer";
import IndexVideo from "../components/IndexVideo";
import { css } from "@emotion/css";
import IndexWork from "../components/IndexWork";
import BooksAndArticles from "../components/BooksAndArticles";
import Profile from "../components/Profile";
import Contact from "../components/Contact";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://baroqueengine.net/";
  const response = await fetch(`${url}data/work.json`);
  const items = await response.json();
  items.reverse();

  const articlesResponse = await fetch(`${url}data/articles.json`);
  const articleItems = await articlesResponse.json();

  return {
    props: { items, articleItems },
  };
};

export default function Home({
  items,
  articleItems,
}: {
  items: WorkItem[];
  articleItems: Article[];
}) {
  return (
    <>
      <Header />
      <IndexVideo />
      <div className={container}>
        <section className={work}>
          <div className={workContainer}>
            <div className={workTitle}>
              <span className={workTitleEn}>EXPERIMENTS</span>
            </div>
            <IndexWork items={items} />
          </div>
        </section>
        <BooksAndArticles articleItems={articleItems} />
        <Profile />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

const work = css`
  padding-bottom: 60px;
`;

const container = css``;

const workContainer = css`
  max-width: 1056px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  padding-left: 2%;
  padding-right: 2%;
`;

const workTitle = css`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  text-align: center;
`;

const workTitleEn = css`
  font-family: "Tungsten";
  font-size: min(20vw, 100px);
  font-weight: 500;
  color: #f7383f;
`;
