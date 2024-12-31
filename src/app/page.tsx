import Footer from "@/components/Footer";
import styles from "@/css/app.module.css";
import BooksAndArticles from "../components/BooksAndArticles";
import Header from "../components/Header";
import IndexWork from "../components/IndexWork";
import Profile from "../components/Profile";
import { getArticleItems } from "../components/getArticleItems";

export default function Home() {
  const { items, articleItems } = getArticleItems();

  return (
    <>
      <Header />
      <div className={styles.container}>
        <section>
          <h2 className={styles.title}>グラフィックス関連</h2>
          <IndexWork items={items} />
        </section>
        <section>
          <h2 className={styles.title}>書いた記事</h2>
          <BooksAndArticles articleItems={articleItems} />
        </section>
        <section>
          <h2 className={styles.title}>プロフィール</h2>
          <Profile />
        </section>
      </div>
      <Footer />
    </>
  );
}
