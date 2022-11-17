import { css } from "@emotion/css";
import { useEffect, useState } from "react";
import { tagNames } from "../../src/Utils";
import Header from "../Header";
import Footer from "../Footer";
import { useRouter } from "next/router";
import Link from "next/link";
import { GetStaticProps } from "next";

export async function getStaticPaths() {
  const tags = [
    "blender",
    "p5js",
    "js",
    "wfc",
    "td",
    "cs",
    "mj",
    "rust",
    "pixi",
    "ae",
    "ai",
    "all",
  ];
  let paths = [];
  for (const tag of tags) {
    paths.push({ params: { tag: tag } });
  }

  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000/"
      : "https://baroqueengine.net/";
  const response = await fetch(`${url}/data/work.json`);
  const items = await response.json();
  items.reverse();

  return {
    props: { items },
  };
};

export default function Tags({ items }: { items: WorkItem[] }) {
  const router = useRouter();
  const tag = String(router.query.tag);
  if (tag === undefined) {
    return <></>;
  }
  const tagName = tagNames[tag];

  const newJson =
    tag === "all" ? items : items.filter((d) => d.tags.includes(tag));
  newJson.reverse();

  function getLink(id: number) {
    return <img src={`/data/${id}/t.png`} alt="作品" />;
  }

  return (
    <>
      <Header />
      <div className={container}>
        <div className={tagsCategoryTitle}>Category - {tagName}</div>
        <div className={workItems}>
          {items.map((o: any) => (
            <div key={`${o.id}`} className={workItem}>
              <Link className={workItemImageLink} href={`/works/${o.id}`}>
                {getLink(o.id)}
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

const container = css`
  max-width: 1056px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
`;

const tagsCategoryTitle = css`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 60px;
  font-family: "Tungsten";
  font-size: 60px;
  font-weight: 500;
`;

const workItems = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const workItem = css`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 45px;
`;

const workItemImageLink = css`
  transition: all 0.2s;
  :hover {
    opacity: 0.75;
  }
`;
