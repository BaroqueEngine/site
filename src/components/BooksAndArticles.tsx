import { css } from "@emotion/css";
import Link from "next/link";
import { InView } from "react-intersection-observer";

type Props = {
  articleItems: Article[];
};

const BooksAndArticles = ({ articleItems }: Props) => {
  if (articleItems) {
    return (
      <section className={container}>
        <div className={clip}></div>
        <div className={booksContainer}>
          <div className={booksTitle}>
            <span className={worksTitleEn}>BOOKS & ARTICLES</span>
          </div>
          <ul className={booksList}>
            {articleItems.map((d, i) => {
              return (
                <InView key={i}>
                  {({ inView, ref }) => {
                    return (
                      <li ref={ref}>
                        <Link className={booksListLink} target="_blank" href={d.url}>
                          <div className={linkContainer}>
                            <div className={linkImageContainer}>
                              <div
                                style={{
                                  backgroundImage: `url(${d.image_url})`,
                                }}
                                className={`${linkImage} ${inView ? linkImageVisible : ""}`}
                              ></div>
                            </div>
                            <div className={linkText}>
                              <div className={title}>{d.title}</div>
                              <div className={description}>{d.description}</div>
                            </div>
                          </div>
                        </Link>
                      </li>
                    );
                  }}
                </InView>
              );
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
  background-color: #31b8c0;
  padding-bottom: min(10vw, 140px);
`;

const clip = css`
  width: 100%;
  height: 80px;
  background-color: #161616;
  clip-path: polygon(0% 0%, 100% 0%, 0% 100%, 0% 0%);
  transform: translate(0, -1px);
`;

const title = css`
  margin-bottom: 15px;
  font-size: 24px;
  font-weight: 600;
  color: #ddd;
`;

const linkText = css`
  padding: 15px;
`;

const description = css`
  font-size: 14px;
  color: #aaa;
  text-align: justify;

  @media (max-width: 600px) {
    display: none;
  }
`;

const linkContainer = css``;

const linkImageContainer = css`
  display: flex;
  justify-content: center;
`;

const linkImage = css`
  width: 100%;
  height: 150px;
  opacity: 0.5;
  border-radius: 10px;
  background-size: cover;
  transition: all 0.75s;
`;

const linkImageVisible = css`
  opacity: 1;
`;

const booksListLink = css`
  display: block;
  height: 100%;
  border-radius: 8px;
  background-color: #195f63;
  text-decoration: none;
  box-shadow: 10px 10px 15px -10px black;
`;

const worksTitleEn = css`
  color: #000;
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
