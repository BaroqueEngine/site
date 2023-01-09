import { css } from "@emotion/css";
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

const LinkImage = ({ href, src, alt, isBlank, width, height, className }: Props) => {
  return (
    <Link className={`${link} ${className}`} href={href} target={isBlank ? "_blank" : ""} rel={isBlank ? "noreferrer noopener" : ""}>
      <img src={src} alt={alt} width={width} height={height} />
    </Link>
  );
};

export default LinkImage;

const link = css`
  transition: opacity 0.25s;

  :hover {
    opacity: 0.5;
  }
`;
