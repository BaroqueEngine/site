import { css } from "@emotion/css";
import { tagNames } from "../../others/Utils";
import Header from "../../components/Header";
import { useRouter } from "next/router";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import json from "../../../public/data/work.json";
import ItemTag from "organisms/ItemTag";
import { ItemTagList } from "organisms/ItemTagList";
import { useState } from "react";
import HoverLinkImage from "atoms/HoverLinkImage";

export const getStaticPaths: GetStaticPaths = async () => {
  const tags: string[] = ["all"];
  const workItems: WorkItem[] = json as WorkItem[];
  for (const item of workItems) {
    for (const tag of item.tags) {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    }
  }
  let paths = [];
  for (const tag of tags) {
    paths.push({ params: { tag: tag } });
  }

  return {
    paths: paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async () => {
  const items: WorkItem[] = json as WorkItem[];
  items.sort((a, b) => b.priority - a.priority);

  return {
    props: { items },
  };
};

type Props = {
  items: WorkItem[];
};

const Tags: NextPage<Props> = ({ items }) => {
  const [selectTags, setSelectTags] = useState<string[]>([]);
  const router = useRouter();
  const tag = String(router.query.tag);
  if (tag === undefined) {
    return <></>;
  }

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
      <div className={container}>
        <div className={tagsCategoryTitle}>
          <span>Category - {tagName}</span>
        </div>
        {tag === "all" ? <ItemTagList selectTags={selectTags} setSelectTags={setSelectTags} /> : <></>}
        <div className={workItems}>
          {newWorkItems.map((o: any) => (
            <div key={`${o.id}`} className={workItem}>
              <HoverLinkImage href={`/works/${o.id}`} src={`/data/${o.id}/t.png`} alt={`作品 ${o.id}`} isBlank={false} />
              <div className={workItemTags}>
                {o.tags.map((tag: string) => {
                  return <ItemTag key={tag} tag={tag} />;
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Tags;

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
  font-size: 60px;
  font-weight: 500;

  span {
    background: linear-gradient(90deg, rgba(247, 56, 63, 1), rgba(252, 134, 65, 1));
    background-clip: text;
    text-align: center;
    color: transparent;
  }
`;

const workItems = css`
  display: grid;
  margin-bottom: 80px;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 740px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
`;

const workItem = css`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 45px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 10px;
`;

const workItemTags = css`
  display: flex;
  column-gap: 10px;
`;
