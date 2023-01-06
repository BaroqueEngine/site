import { css } from "@emotion/css";
import ItemTag from "organisms/ItemTag";
import GapContainer from "molecules/GapContainer";
import VGapContainer from "molecules/VGapContainer";
import MoreButton from "organisms/MoreButton";
import HoverLinkImage from "atoms/HoverLinkImage";

type Props = {
  items: WorkItem[];
};

const IndexWork = ({ items }: Props) => {
  const itemsPerPage = 9;

  if (items) {
    return (
      <section className={work} id="experiments">
        <div className={workContainer}>
          <div className={workTitle}>
            <span className={workTitleEn}>EXPERIMENTS</span>
          </div>
          <div className={workItems}>
            {items.slice(0, itemsPerPage).map((o) => (
              <div key={`${o.id}`} className={workItem}>
                <VGapContainer gap={10}>
                  <HoverLinkImage href={`/works/${o.id}`} src={`/data/${o.id}/t.png`} alt={`作品 ${o.id}`} width={600} height={450} isBlank={false} />
                  <GapContainer gap={10}>
                    {o.tags.map((tag: string) => {
                      return <ItemTag key={tag} tag={tag} />;
                    })}
                  </GapContainer>
                </VGapContainer>
              </div>
            ))}
          </div>
          <MoreButton />
        </div>
      </section>
    );
  } else {
    return <></>;
  }
};

export default IndexWork;

const work = css`
  padding-bottom: 60px;
  scroll-margin-top: 80px;
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
`;
