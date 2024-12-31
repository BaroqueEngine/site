"use client";

import HoverLinkImage from "@/atoms/HoverLinkImage";
import Header from "@/components/Header";
import { getWorkItems } from "@/components/getWorkItems";
import styles from "@/css/tags.module.css";
import ItemTag from "@/organisms/ItemTag";
import { ItemTagList } from "@/organisms/ItemTagList";
import { tagNames } from "@/others/Utils";
import { useState } from "react";

type Props = {
  tag: string;
};

export default function TagPage({ tag }: Props) {
  const [selectTags, setSelectTags] = useState<string[]>([]);

  const items = getWorkItems();
  items.sort((a, b) => b.priority - a.priority);

  const tagName = tagNames[tag];
  let newWorkItems: WorkItem[] = [];
  if (tag === "all") {
    newWorkItems = [...items];
    if (selectTags.length > 0) {
      newWorkItems = newWorkItems.filter((item) => {
        return item.tags.some((tag) => selectTags.includes(tag));
      });
    }
  } else {
    newWorkItems = items.filter((d) => d.tags.includes(tag));
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.tagsCategoryTitle}>
          <span>Category - {tagName}</span>
        </div>
        {tag === "all" ? <ItemTagList selectTags={selectTags} setSelectTags={setSelectTags} /> : <></>}
        <div className={styles.workItems}>
          {newWorkItems.map((item) => (
            <div key={`${item.id}`} className={styles.workItem}>
              <HoverLinkImage href={`/works/${item.id}`} src={`/data/${item.id}/t.png`} alt={`作品 ${item.id}`} isBlank={false} />
              <div className={styles.workItemTags}>
                {item.tags.map((tag: string) => {
                  return <ItemTag key={tag} tag={tag} />;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
