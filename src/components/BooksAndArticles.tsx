import { css } from "@emotion/css";
import ArticleItem from "organisms/ArticleItem";

type Props = {
  articleItems: Article[];
};

const BooksAndArticles = ({ articleItems }: Props) => {
  if (articleItems) {
    return (
      <div className={booksContainer}>
        <ul className={booksList}>
          {articleItems.map((article, i) => {
            return <ArticleItem key={i} article={article} />;
          })}
        </ul>
      </div>
    );
  } else {
    return <></>;
  }
};

export default BooksAndArticles;

const booksContainer = css`
  max-width: 1056px;
  margin-left: auto;
  margin-right: auto;
`;

const booksList = css`
  display: grid;
  grid-gap: 15px;
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 40px;
  font-weight: 500;
  font-family: "Shippori Mincho", serif;

  @media (max-width: 1080px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    display: block;
  }

  li {
    margin: 0;

    @media (max-width: 700px) {
      margin-bottom: 15px;
    }
  }
`;
