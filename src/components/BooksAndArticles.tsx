import styles from "@/css/BooksAndArticles.module.css";
import ArticleItem from "@/organisms/ArticleItem";

type Props = {
  articleItems: Article[];
};

export default function BooksAndArticles({ articleItems }: Props) {
  if (articleItems) {
    return (
      <div className={styles.booksContainer}>
        <ul className={styles.booksList}>
          {articleItems.map((article) => {
            return <ArticleItem key={article.url} article={article} />;
          })}
        </ul>
      </div>
    );
  }

  return <></>;
}
