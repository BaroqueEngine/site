"use client";

import Header from "@/components/Header";
import { getWorkItems } from "@/components/getWorkItems";
import styles from "@/css/works.module.css";
import ItemTag from "@/organisms/ItemTag";
import YouTube from "react-youtube";

type Props = {
  workId: number;
};

export default function WorkPage({ workId }: Props) {
  const items: WorkItem[] = getWorkItems();
  let data: WorkItem = items[0];

  for (const item of items) {
    if (item.id === workId) {
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
          <div className={styles.videoAnnounce}>&#x1f4e2; Please reload page if you can&apos;t watch the video.</div>
        </>
      );
    }

    return <img src={`/data/${id}/0.png`} alt="作品" />;
  }

  if (data === undefined) {
    return <></>;
  }

  return (
    <>
      <Header />
      <div className={styles.item}>
        <div className={styles.workItem}>{getLink(data)}</div>
        <div className={styles.workTags}>{getTags(data)}</div>
        <div className={styles.workComment}>
          {data.comment.split("<br>").map((comment) => (
            <div key={comment}>{comment}</div>
          ))}
        </div>
      </div>
    </>
  );
}
