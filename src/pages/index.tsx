import Header from "../components/Header";
import Footer from "../components/Footer";
import IndexVideo from "../components/IndexVideo";
import IndexWork from "../components/IndexWork";
import BooksAndArticles from "../components/BooksAndArticles";
import Profile from "../components/Profile";
import { GetStaticProps, NextPage } from "next";
import workJson from "../../public/data/work.json";
import articlesJson from "../../public/data/articles.json";
import NavLinks from "../components/NavLinks";

export const getStaticProps: GetStaticProps = async () => {
  const items: WorkItem[] = workJson as WorkItem[];
  items.sort((a, b) => b.id - a.id);
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
      <NavLinks />
      <IndexVideo />
      <div>
        <IndexWork items={items} />
        <BooksAndArticles articleItems={articleItems} />
        <Profile />
      </div>
      <Footer />
    </>
  );
};

export default Home;
