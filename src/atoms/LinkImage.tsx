import styles from "@/css/LinkImage.module.css";
import Link from "next/link";

type Props = {
  href: string;
  src: string;
  alt: string;
  isBlank: boolean;
  width?: number;
  height?: number;
  className?: string;
};

export default function LinkImage({ href, src, alt, isBlank, width, height, className }: Props) {
  return (
    <Link className={`${styles.link} ${className}`} href={href} target={isBlank ? "_blank" : ""} rel={isBlank ? "noreferrer noopener" : ""}>
      <img src={src} alt={alt} width={width} height={height} />
    </Link>
  );
}
