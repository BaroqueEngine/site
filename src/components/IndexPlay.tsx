import HoverLinkImage from "@/atoms/HoverLinkImage";
import styles from "@/css/IndexWork.module.css";

type Props = {
  items: PlayItem[];
};

export default function IndexPlay({ items }: Props) {
  const itemsPerPage = 16;

  if (items) {
    return (
      <div className={styles.container}>
        <div className={styles.workItems}>
          {items.slice(0, itemsPerPage).map((o) => (
            <div key={`${o.id}`} className={styles.workItem}>
              <HoverLinkImage href={`/play/${o.id}`} src={`/p/${o.id}/t.png`} alt={`作品 ${o.id}`} width={600} height={450} isBlank={false} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return <></>;
}
