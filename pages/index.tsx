import Header from "../components/Header";
import Footer from "../components/Footer";
import IndexVideo from "../components/IndexVideo";
import IndexWork from "../components/IndexWork";
import BooksAndArticles from "../components/BooksAndArticles";
import Profile from "../components/Profile";
import Contact from "../components/Contact";
import { GetStaticProps, NextPage } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const url = process.env.NODE_ENV === "development" ? "http://localhost:3000/" : "https://baroqueengine.net/";
  const response = await fetch(`${url}data/work.json`);
  const items = await response.json();
  items.reverse();

  const articlesResponse = await fetch(`${url}data/articles.json`);
  const articleItems = await articlesResponse.json();

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
      <IndexVideo />
      <div>
        <IndexWork items={items} />
        <BooksAndArticles articleItems={articleItems} />
        <Profile />
        <Contact />
      </div>
      <Footer />
    </>
  );
};

export default Home;
