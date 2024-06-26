import { css, cx } from "@emotion/css";
import LinkImage from "atoms/LinkImage";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

const Header = () => {
  const [visibleDrawer, updateVisibleDrawer] = useState<boolean>(false);
  const onDrawerClick = () => {
    updateVisibleDrawer(!visibleDrawer);
  };

  const getDrawerOpenCss = (): string => {
    const ret = [drawer];
    if (visibleDrawer) {
      ret.push(openDrawer);
    }

    return cx(ret);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta lang="ja" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BAROQUE ENGINE</title>
      </Head>
      <Script src="https://www.youtube.com/iframe_api" />
      <header className={headerContainer}>
        <h1 className={headerSiteTitle}>
          <Link className={headerSiteTitleLink} href="/">
            BAROQUE ENGINE
          </Link>
        </h1>
        <div className={headerSocialLinks}>
          <LinkImage href="https://twitter.com/baroqueengine" src="/image/social/twitter.png" alt="Twitter" isBlank={true} />
          <LinkImage href="https://github.com/BaroqueEngine" src="/image/social/github.png" alt="GitHub" isBlank={true} />
          <LinkImage href="https://zenn.dev/baroqueengine" src="/image/social/zenn.png" alt="Zenn" isBlank={true} />
        </div>
        <div className={getDrawerOpenCss()}>
          <label htmlFor="drawer-check" className={drawerOpenLabel} onClick={onDrawerClick}>
            <span></span>
          </label>
          <nav className={drawerContent}>
            <ul>
              <li>
                <Link href="/">TOP</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

const headerSocialLinks = css`
  position: fixed;
  right: 0;
  top: 0;
  padding: 18px 15px;
  display: flex;
  column-gap: 15px;

  @media (max-width: 600px) {
    display: none;
  }
`;

const drawer = css`
  display: none;
`;

const openDrawer = css`
  nav {
    display: block;
  }

  label span:before {
    transform: rotate(45deg);
    bottom: 0;
  }
  label span {
    background: rgba(0, 0, 0, 0);
  }
  label span:after {
    transform: rotate(-45deg);
    top: 0;
  }
`;

const drawerContent = css`
  display: none;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  left: 0;
  top: 0;

  ul {
    max-width: 1000px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    flex-flow: column;
    font-size: 40px;
    font-weight: 500;
  }
`;

const drawerOpenLabel = css`
  display: flex;
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
  cursor: pointer;
  margin-right: 20px;
  padding-top: 4px;
  padding-bottom: 5px;

  span:before {
    bottom: 10px;
  }

  span:after {
    top: 10px;
  }

  span,
  span:before,
  span:after {
    content: "";
    display: block;
    width: 35px;
    height: 2px;
    background: #f7383f;
    transition: 0.5s;
    position: absolute;
    border: none;
  }
`;

const headerContainer = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;
`;
const headerSiteTitle = css`
  padding: 15px;
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0.05rem;
`;
const headerSiteTitleLink = css`
  font-family: "Tungsten";
  font-size: min(calc(24 / var(--unit)), 24px);
  text-decoration: none;

  @media (max-width: 767px) {
    font-size: calc(18 / var(--unitSp));
  }
`;
