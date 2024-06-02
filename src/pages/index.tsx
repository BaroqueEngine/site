import Header from "../components/Header";
import IndexWork from "../components/IndexWork";
import BooksAndArticles from "../components/BooksAndArticles";
import Profile from "../components/Profile";
import { GetStaticProps, NextPage } from "next";
import workJson from "../../public/data/work.json";
import articlesJson from "../../public/data/articles.json";
import { css } from "@emotion/css";
import Footer from "components/Footer";

export const getStaticProps: GetStaticProps = async () => {
  const items: WorkItem[] = workJson as WorkItem[];
  items.sort((a, b) => b.priority - a.priority);
  const articleItems: Article[] = articlesJson as Article[];

  return {
    props: { items, articleItems },
  };
};

type Props = {
  items: WorkItem[];
  articleItems: Article[];
};

const Home: NextPage<Props> = ({ items, articleItems }) => {
  return (
    <>
      <Header />
      <div className={container}>
        <section>
          <h2 className={title}>グラフィックス関連</h2>
          <IndexWork items={items} />
        </section>
        <section>
          <h2 className={title}>書いた記事</h2>
          <BooksAndArticles articleItems={articleItems} />
        </section>
        <section>
          <h2 className={title}>プロフィール</h2>
          <Profile />
        </section>
      </div>
      <Footer />
    </>
  ); 
};

export default Home;

const container = css`
  display: flex;
  flex-direction: column;
  gap: min(calc(150 / var(--unit)), 150px);
  width: min(calc(1000 / var(--unit)), 1000px);
  margin-top: min(calc(150 / var(--unit)), 150px);
  margin-bottom: min(calc(150 / var(--unit)), 150px);
  padding: 0 min(calc(15 / var(--unit)), 15px);
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 767px) {
    margin-top: calc(100 / var(--unitSp));
    padding: 0 calc(15 / var(--unitSp));
  }
`;

const title = css`
  padding-bottom: min(calc(30 / var(--unit)), 30px);
  font-size: min(calc(30 / var(--unit)), 30px);

  @media (max-width: 767px) {
    font-size: calc(24 / var(--unitSp));
  }
`;
