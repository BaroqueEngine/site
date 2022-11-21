import { css, cx } from "@emotion/css";
import Head from "next/head";
import Link from "next/link";
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BAROQUE ENGINE</title>
      </Head>
      <header className={headerContainer}>
        <h1 className={headerSiteTitle}>
          <Link className={headerSiteTitleLink} href="/">
            BAROQUE ENGINE
          </Link>
        </h1>
        <div className={headerSocialLinks}>
          <a className={twitter} href="https://twitter.com/baroqueengine" target="_blank">
            <img src="/image/social/twitter.png" />
          </a>
          <a className={github} href="https://github.com/BaroqueEngine" target="_blank">
            <img src="/image/social/github.png" />
          </a>
          <a className={zenn} href="https://zenn.dev/baroqueengine" target="_blank">
            <img src="/image/social/zenn.png" />
          </a>
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

const twitter = css`
  img {
    height: 24px;
  }

  :hover {
    opacity: 0.75;
  }
`;

const github = css`
  padding-left: 15px;

  img {
    height: 24px;
  }

  :hover {
    opacity: 0.75;
  }
`;

const zenn = css`
  padding-left: 15px;

  img {
    height: 24px;
  }

  :hover {
    opacity: 0.75;
  }
`;

const headerSocialLinks = css`
  position: fixed;
  right: 0;
  top: 0;
  padding: 18px 15px;

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
    font-family: "Tungsten";
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
  font-family: "Tungsten";
  font-size: 28px;
  font-weight: 500;
  letter-spacing: 0.05rem;
`;
const headerSiteTitleLink = css`
  text-decoration: none;
`;
