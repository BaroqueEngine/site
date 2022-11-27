import Header from "../../components/Header";
import { css } from "@emotion/css";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";
import json from "../../../public/data/work.json";
import ItemTag from "organisms/ItemTag";
import GapContainer from "molecules/GapContainer";
import { useEffect, useState } from "react";

export async function getStaticPaths() {
  const items: WorkItem[] = json as WorkItem[];
  items.sort((a, b) => b.id - a.id);
  const paths = [];
  for (const item of items) {
    paths.push({ params: { id: item.id.toString() } });
  }

  return {
    paths: paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const items: WorkItem[] = json as WorkItem[];

  return {
    props: { items },
  };
};

type Props = {
  items: WorkItem[];
};

const Works: NextPage<Props> = ({ items }) => {
  const router = useRouter();
  const id = Number(router.query.id);
  let data: WorkItem = items[0];
  const [loadedDOM, setLoadedDOM] = useState(false);

  useEffect(() => {
    setLoadedDOM(true);
  }, []);

  for (const item of items) {
    if (item.id === id) {
      data = item;
    }
  }

  function getTags(item: WorkItem) {
    return item.tags.map((tag: string) => {
      return <ItemTag key={tag} tag={tag} />;
    });
  }

  function getLink(item: WorkItem) {
    const { id, type, videoId } = item;
    if (type === "video") {
      return <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&origin=https://baroqueengine.net/`}></iframe>;
    } else {
      return <img src={`/data/${id}/0.png`} alt="作品" />;
    }
  }

  if (data === undefined || !loadedDOM) {
    return <></>;
  }

  return (
    <>
      <Header />
      <div className={item}>
        <div className={workItem}>{getLink(data)}</div>
        <div>{process.env.DOMAIN}</div>
        <div className={workTags}>
          <GapContainer gap={15}>{getTags(data)}</GapContainer>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Works;

const item = css`
  display: flex;
  flex-flow: column;
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  padding-left: 15px;
  padding-right: 15px;

  iframe {
    width: 100%;
    height: 500px;
  }
`;

const workTags = css`
  display: flex;
  margin-bottom: 120px;
`;

const workItem = css`
  max-width: 1000px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
