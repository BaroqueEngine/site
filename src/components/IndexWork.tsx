import { css } from "@emotion/css";
import MoreButton from "organisms/MoreButton";
import HoverLinkImage from "atoms/HoverLinkImage";

type Props = {
  items: WorkItem[];
};

const IndexWork = ({ items }: Props) => {
  const itemsPerPage = 16;

  if (items) {
    return (
      <div className={container}>
        <div className={workItems}>
          {items.slice(0, itemsPerPage).map((o) => (
            <div key={`${o.id}`} className={workItem}>
              <HoverLinkImage href={`/works/${o.id}`} src={`/data/${o.id}/t.png`} alt={`作品 ${o.id}`} width={600} height={450} isBlank={false} />
            </div>
          ))}
        </div>
        <MoreButton />
      </div>
    );
  } else {
    return <></>;
  }
};

export default IndexWork;

const container = css`
  margin-left: auto;
  margin-right: auto;
`;

const workItems = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media (max-width: 740px) {
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  }
`;

const workItem = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

