import BooksAndArticles from "@/components/BooksAndArticles";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import IndexPlay from "@/components/IndexPlay";
import IndexWork from "@/components/IndexWork";
import Profile from "@/components/Profile";
import { getArticleItems } from "@/components/getArticleItems";
import styles from "@/css/app.module.css";

export default function Home() {
  const { items, articleItems, playItems } = getArticleItems();

  return (
    <>
      <Header />
      <div className={styles.container}>
        <section>
          <h2 className={styles.title}>グラフィックス関連（動画・画像）</h2>
          <IndexWork items={items} />
        </section>
        <section>
          <h2 className={styles.title}>グラフィックス関連</h2>
          <IndexPlay items={playItems} />
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
