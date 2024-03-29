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
            <div className={description}>{article.description}</div>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default ArticleItem;

const title = css`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 600;
  color: #ddd;
`;

const description = css`
  font-size: 14px;
  color: #aaa;
  text-align: justify;

  @media (max-width: 600px) {
    display: none;
  }
`;

const text = css`
  padding: 15px;
`;

const container = css`
  display: block;
  height: 100%;
  border-radius: 8px;
  background-color: #23252c;
  text-decoration: none;
  box-shadow: 10px 10px 15px -10px black;
`;

const imageContainer = css`
  display: flex;
  justify-content: center;
`;

const image = css`
  width: 100%;
  height: 150px;
  border-radius: 10px;
  background-size: cover;
`;
