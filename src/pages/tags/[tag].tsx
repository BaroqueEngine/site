import { css } from "@emotion/css";
import { tagNames } from "../../others/Utils";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useRouter } from "next/router";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import json from "../../../public/data/work.json";

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
  items.sort((a, b) => b.id - a.id);

  return {
    props: { items },
  };
};

type Props = {
  items: WorkItem[];
};

const Tags: NextPage<Props> = ({ items }) => {
  const router = useRouter();
  const tag = String(router.query.tag);
  if (tag === undefined) {
    return <></>;
  }
  const tagName = tagNames[tag];

  const newWorkItems = tag === "all" ? items : items.filter((d) => d.tags.includes(tag));

  function getLink(id: number) {
    return <img src={`/data/${id}/t.png`} alt="作品" />;
  }

  return (
    <>
      <Header />
      <div className={container}>
        <div className={tagsCategoryTitle}>Category - {tagName}</div>
        <div className={workItems}>
          {newWorkItems.map((o: any) => (
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
