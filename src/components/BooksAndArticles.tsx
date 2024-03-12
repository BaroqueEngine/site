import { css } from "@emotion/css";
import ArticleItem from "organisms/ArticleItem";

type Props = {
  articleItems: Article[];
};

const BooksAndArticles = ({ articleItems }: Props) => {
  if (articleItems) {
    return (
      <section className={container} id="articles">
        <div className={clip}></div>
        <div className={booksContainer}>
          <div className={booksTitle}>
            <span className={worksTitleEn}>BOOKS & ARTICLES</span>
          </div>
          <ul className={booksList}>
            {articleItems.map((article, i) => {
              return <ArticleItem key={i} article={article} />;
            })}
          </ul>
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default BooksAndArticles;

const container = css`
  background-color: #262626;
  padding-bottom: min(10vw, 140px);
  scroll-margin-top: -110px;
`;

const clip = css`
  width: 100%;
  height: 80px;
  background-color: #161616;
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 0% 0%);
  transform: translate(0, -1px);
`;

const worksTitleEn = css`
  background: linear-gradient(90deg, rgba(247, 56, 63, 1), rgba(252, 134, 65, 1));
  background-clip: text;
  color: transparent;
  text-align: center;
`;

const booksContainer = css`
  max-width: 1056px;
  margin-left: auto;
  margin-right: auto;
  margin-top: min(10vw, 100px);
  padding-left: 2%;
  padding-right: 2%;
`;

const booksTitle = css`
  font-family: "Tungsten";
  font-size: min(20vw, 100px);
  font-weight: 500;
`;

const booksList = css`
  display: grid;
  grid-gap: 15px;
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 60px;
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
