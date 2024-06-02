import { css } from "@emotion/css";
import Link from "next/link";

type Props = {
  article: Article;
};

const ArticleItem = ({ article }: Props) => {
  return (
    <li>
      <Link className={container} target="_blank" href={article.url}>
        <div>
          <div className={imageContainer}>
            <div
              style={{
                backgroundImage: `url(${article.image_url})`,
              }}
              className={image}
            ></div>
          </div>
          <div className={text}>
            <div className={title}>{article.title}</div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ArticleItem;

const title = css`
  font-size: min(calc(18 / var(--unit)), 18px);
  font-weight: 600;
  color: #ddd;

  @media (max-width: 767px) {
    font-size: calc(14 / var(--unitSp));
  }
`;

const text = css`
  padding: min(calc(15 / var(--unit)), 15px);
`;

const container = css`
  display: block;
  height: 100%;
  text-decoration: none;
`;

const imageContainer = css`
  display: flex;
  justify-content: center;
`;

const image = css`
  width: 100%;
  height: 150px;
  border-radius: 5px;
  background-size: cover;

  @media (max-width: 767px) {
    height: calc(150 / var(--unitSp));
  }
`;
