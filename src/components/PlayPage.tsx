"use client";

import Header from "@/components/Header";
import { getPlayItems } from "@/components/getPlayItems";
import styles from "@/css/PlayPage.module.css";

type Props = {
  playId: string;
};

export default function PlayPage({ playId }: Props) {
  const items = getPlayItems();
  const item = items.find((item) => item.id === playId)!;

  return (
    <>
      <Header />
      <div className={styles.iframeContainer}>
        <iframe src={`/p/${item.id}/index.html`} width={800} height={600} title="play" />
      </div>
    </>
  );
}
