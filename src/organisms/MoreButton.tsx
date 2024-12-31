import styles from "@/css/MoreButton.module.css";
import Link from "next/link";

const MoreButton = () => {
  return (
    <Link href="/tags/all" className={styles.container}>
      <span>もっと見る</span>
    </Link>
  );
};

export default MoreButton;
