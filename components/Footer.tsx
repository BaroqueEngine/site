import { css } from "@emotion/css";
import Image from "next/image";
import Link from "next/link";
import ProfileImage from "../public/image/profile.jpg";

const Footer = () => {
  return (
    <>
      <footer className={footer}>
        <div className={footerLeft}>
          <Image src={ProfileImage} alt="Author - miku" />
        </div>
        <div className={footerRight}>
          <div className={footerContent}>
            <div className={footerTitle}>CATEGORY</div>
            <ul>
              <li>
                <a href="/tags/blender">Blender</a>
              </li>
              <li>
                <a href="/tags/p5js">p5.js</a>
              </li>
              <li>
                <a href="/tags/js">JavaScript</a>
              </li>
              <li>
                <a href="/tags/wfc">WaveFunctionCollapse</a>
              </li>
              <li>
                <a href="/tags/td">TouchDesigner</a>
              </li>
              <li>
                <a href="/tags/cs">C#</a>
              </li>
              <li>
                <a href="/tags/mj">MarkovJunior</a>
              </li>
              <li>
                <a href="/tags/rust">Rust</a>
              </li>
              <li>
                <a href="/tags/pixi">PixiJS</a>
              </li>
              <li>
                <a href="/tags/ae">AfterEffects</a>
              </li>
              <li>
                <a href="/tags/ai">AI</a>
              </li>
            </ul>
          </div>
          <div className={footerContent}>
            <div className={footerTitle}>SOCIAL</div>
            <ul>
              <li>
                <Link target="_blank" href="https://twitter.com/baroqueengine">
                  Twitter
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://github.com/BaroqueEngine/">
                  GitHub
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://zenn.dev/baroqueengine">
                  Zenn
                </Link>
              </li>
            </ul>
          </div>
          <div className={footerContent}>
            <div className={footerTitle}>SITE INFO</div>
            <ul>
              <li>GitHub Pages</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>React</li>
              <li>@emotion</li>
              <li>After Effects</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const footer = css`
  display: flex;
  border-top: 1px solid #444;
  border-bottom: 5px solid #f7383f;

  @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
  }
`;

const footerLeft = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33vw;
  border-right: 1px solid #444;

  @media (max-width: 700px) {
    order: 1;
    width: 100%;
    border-right: 0;
  }

  img {
    border: 10px solid #161616;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: grayscale(80%);
  }
`;

const footerRight = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  font-family: "Mono";
  font-size: 12px;

  li {
    margin-left: 0;
    margin-bottom: 0.6rem;
  }

  @media (max-width: 700px) {
    order: 0;
  }

  @media (max-width: 560px) {
    display: block;
    margin-top: 30px;
  }
`;

const footerContent = css`
  padding: 25px;

  @media (max-width: 560px) {
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
  }
`;

const footerTitle = css`
  margin-bottom: 100px;
  color: #888;

  @media (max-width: 560px) {
    min-width: 100px;
    margin-bottom: 0;
  }
`;
