import HoverLinkImage from "@/atoms/HoverLinkImage";
import styles from "@/css/IndexWork.module.css";
import MoreButton from "@/organisms/MoreButton";

type Props = {
  items: WorkItem[];
};

const IndexWork = ({ items }: Props) => {
  const itemsPerPage = 16;

  if (items) {
    return (
      <div className={styles.container}>
        <div className={styles.workItems}>
          {items.slice(0, itemsPerPage).map((o) => (
            <div key={`${o.id}`} className={styles.workItem}>
              <HoverLinkImage href={`/works/${o.id}`} src={`/data/${o.id}/t.png`} alt={`作品 ${o.id}`} width={600} height={450} isBlank={false} />
            </div>
          ))}
        </div>
        <MoreButton />
      </div>
    );
  }

  return <></>;
};

export default IndexWork;
