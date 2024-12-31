import styles from "@/css/ItemTag.module.css";
import { shortTagNames, tagColors, tagNames } from "@/others/Utils";
import Link from "next/link";

type Props = {
  tag: string;
};

export default function ItemTag({ tag }: Props) {
  const tagColor = tagColors[tag];
  const tagName = tagNames[tag];
  const shortTagName = shortTagNames[tag];

  return (
    <Link key={tag} className={styles.link} href={`/tags/${tag}`}>
      <span className={styles.container} style={{ backgroundColor: tagColor }}>
        <span className={styles.normal}>{tagName}</span>
        <span className={styles.short}>{shortTagName}</span>
      </span>
    </Link>
  );
}
