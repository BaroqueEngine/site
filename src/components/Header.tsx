"use client";

import styles from "@/css/Header.module.css";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";

export default function Header() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta lang="ja" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BAROQUE ENGINE</title>
      </Head>
      <Script src="https://www.youtube.com/iframe_api" />
      <header className={styles.headerContainer}>
        <h1 className={styles.headerSiteTitle}>
          <Link className={styles.siteTitleLink} href="/">
            BAROQUE ENGINE
          </Link>
        </h1>
      </header>
    </>
  );
}
