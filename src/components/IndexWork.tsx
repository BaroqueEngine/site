import Link from "next/link";
import WorkTag from "./WorkTag";
import { css } from "@emotion/css";

type Props = {
  items: WorkItem[];
};

const IndexWork = ({ items }: Props) => {
  const itemsPerPage = 9;

  if (items) {
    return (
      <section className={work}>
        <div className={workContainer}>
          <div className={workTitle}>
            <span className={workTitleEn}>EXPERIMENTS</span>
          </div>
          <div className={workItems}>
            {items.slice(0, itemsPerPage).map((o) => (
              <div key={`${o.id}`} className={workItem}>
                <Link className={workItemImageLink} href={`/works/${o.id}`}>
                  <img src={`/data/${o.id}/t.png`} alt="作品" width="600" height="450" />
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
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default IndexWork;

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

const work = css`
  padding-bottom: 60px;
`;

const workContainer = css`
  max-width: 1056px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  padding-left: 2%;
  padding-right: 2%;
`;

const workTitle = css`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  text-align: center;
`;

const workTitleEn = css`
  font-family: "Tungsten";
  font-size: min(20vw, 100px);
  font-weight: 500;
  color: #f7383f;
`;

const pagerContainer = css`
  display: flex;
  justify-content: center;
  margin-top: 30px;
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

  box-shadow: 10px 10px 15px -10px #444;
`;

const workTags = css`
  display: flex;
`;
