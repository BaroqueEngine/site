import Header from "../Header";
import { css } from "@emotion/css";
import WorkTag from "../WorkTag";
import { useEffect, useState } from "react";
import Footer from "../Footer";
import YouTube from "react-youtube";
import { useRouter } from "next/router";

export default function Works() {
  const router = useRouter();
  const id = Number(router.query.id);
  const [data, updateData] = useState<WorkItem>();

  useEffect(() => {
    (async () => {
      const response = await fetch("/data/work.json");
      const items: WorkItem[] = await response.json();
      for (const item of items) {
        if (item.id === id) {
          updateData(item);
        }
      }
    })();
  }, [id]);

  function getTags(item: WorkItem) {
    return item.tags.map((tag: string) => {
      return <WorkTag key={tag} tag={tag} />;
    });
  }

  function getLink(item: WorkItem) {
    const { id, type, url } = item;
    if (type === "video") {
      const videoOptions = {
        playerVars: {
          autoplay: 1,
          controls: 1,
          rel: 0,
          showinfo: 0,
          mute: 1,
          loop: 1,
        },
      };
      return <YouTube videoId={url} opts={videoOptions} />;
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
        <div className={workTags}>{getTags(data)}</div>
      </div>
      <Footer />
    </>
  );
}

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
