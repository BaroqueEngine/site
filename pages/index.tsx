import Header from "./Header";
import Footer from "./Footer";
import IndexVideo from "./IndexVideo";
import { css } from "@emotion/css";
import IndexWork from "./IndexWork";
import BooksAndArticles from "./BooksAndArticles";
import Profile from "./Profile";
import Contact from "./Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Header />
      <IndexVideo />
      <div className={container}>
        <section className={work}>
          <div className={workContainer}>
            <div className={workTitle}>
              <span className={workTitleEn}>EXPERIMENTS</span>
            </div>
            <IndexWork />
          </div>
        </section>
        <BooksAndArticles />
        <Profile />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

const work = css`
  padding-bottom: 60px;
`;

const container = css``;

const workContainer = css`
  max-width: 1056px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  padding-left: 2%;
  padding-right: 2%;
`;

const workTitle = css`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  text-align: center;
`;

const workTitleEn = css`
  font-family: "Tungsten";
  font-size: min(20vw, 100px);
  font-weight: 500;
  color: #f7383f;
`;
