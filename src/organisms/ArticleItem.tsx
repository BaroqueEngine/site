import styles from "@/css/ArticleItem.module.css";
import Link from "next/link";

type Props = {
  article: Article;
};

export default function ArticleItem({ article }: Props) {
  return (
    <li>
      <Link className={styles.container} target="_blank" href={article.url}>
        <div>
          <div className={styles.imageContainer}>
            <div
              style={{
                backgroundImage: `url(${article.image_url})`,
              }}
              className={styles.image}
            />
          </div>
          <div className={styles.text}>
            <div className={styles.title}>{article.title}</div>
          </div>
        </div>
      </Link>
    </li>
  );
}
