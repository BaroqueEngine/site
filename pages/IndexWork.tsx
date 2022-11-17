import Link from "next/link";
import WorkTag from "./WorkTag";
import { css } from "@emotion/css";

export default function IndexWork({ items }: { items: WorkItem[] }) {
  const itemsPerPage = 9;

  function getLink(id: number) {
    return (
      <img src={`/data/${id}/t.png`} alt="作品" width="600" height="450" />
    );
  }

  if (items) {
    return (
      <>
        <div className={workItems}>
          {items.slice(0, itemsPerPage).map((o) => (
            <div key={`${o.id}`} className={workItem}>
              <Link className={workItemImageLink} href={`/works/${o.id}`}>
                {getLink(o.id)}
              </Link>
              <div className={workTags}>
                {o.tags.map((tag: string) => {
                  return <WorkTag key={tag} tag={tag} />;
                })}
              </div>
            </div>
          ))}
        </div>
        <div className={pagerContainer}>
          <Link href="/tags/all">More...</Link>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}

/*
<div className={pagerContainer}>
  <ReactPaginate
    breakLabel="..."
    nextLabel="next"
    onPageChange={onPageChange}
    pageRangeDisplayed={5}
    pageCount={Math.ceil(items.length / itemsPerPage)}
    previousLabel="prev"
  />
</div>
*/

const pagerContainer = css`
  display: flex;
  justify-content: center;
  font-family: "Tungsten";
  font-size: 40px;
  font-weight: 500;

  a:hover {
    color: red;
    cursor: pointer;
  }

  .selected a {
    color: orange;
  }
`;

const workItems = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media (max-width: 740px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
`;

const workItem = css`
  margin-left: 8px;
  margin-right: 8px;
  margin-bottom: 45px;
  background-color: #111;
  border-radius: 8px;
  display: grid;
  grid-template-rows: 1fr auto;
  grid-template-columns: 100%;
`;

const workItemImageLink = css`
  transition: all 0.2s;
  :hover {
    opacity: 0.75;
  }
`;

const workTags = css`
  display: flex;
`;
