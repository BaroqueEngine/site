import styles from "@/css/HoverLinkImage.module.css";
import Link from "next/link";

type Props = {
  href: string;
  src: string;
  alt: string;
  isBlank: boolean;
  width?: number;
  height?: number;
};

export default function HoverLinkImage({ href, src, alt, isBlank, width, height }: Props) {
  return (
    <Link className={styles.link} href={href} target={isBlank ? "_blank" : ""} rel={isBlank ? "noreferrer noopener" : ""}>
      <img src={src} alt={alt} width={width} height={height} />
    </Link>
  );
}
