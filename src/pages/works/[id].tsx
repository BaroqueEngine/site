import Header from "../../components/Header";
import { css } from "@emotion/css";
import { useRouter } from "next/router";
import { GetStaticProps, NextPage } from "next";
import json from "../../../public/data/work.json";
import ItemTag from "organisms/ItemTag";
import YouTube from "react-youtube";

export async function getStaticPaths() {
  const items: WorkItem[] = json as WorkItem[];
  items.sort((a, b) => b.priority - a.priority);
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
      const videoOptions = {
        playerVars: {
          autoplay: 0,
          controls: 1,
          rel: 0,
          showinfo: 0,
          mute: 1,
          loop: 1,
          origin: process.env.DOMAIN,
          playlist: videoId,
          host: "https://www.youtube.com",
        },
      };
      return (
        <>
          <YouTube videoId={videoId} opts={videoOptions} />
          <div className={videoAnnounce}>&#x1f4e2; Please reload page if you can&apos;t watch the video.</div>
        </>
      );
    } else {
      return <img src={`/data/${id}/0.png`} alt="作品" />;
    }
  }

  if (data === undefined) {
    return <></>;
  }

  return (
    <>
      <Header />
      <div className={item}>
        <div className={workItem}>{getLink(data)}</div>
        <div className={workTags}>
          {getTags(data)}
        </div>
        <div className={workComment}>
          {data.comment.split("<br>").map((c, i) => (
            <div key={i}>{c}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Works;

const videoAnnounce = css`
  margin-top: 10px;
  font-size: 12px;
`;

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
  column-gap: 15px;
`;

const workComment = css`
  margin-top: 30px;
  margin-bottom: 120px;
`;

const workItem = css`
  max-width: 1000px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
