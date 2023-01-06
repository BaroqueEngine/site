import { css } from "@emotion/css";
import Link from "next/link";

type Props = {
  href: string;
  src: string;
  alt: string;
  isBlank: boolean;
  width?: number;
  height?: number;
};

const HoverLinkImage = ({ href, src, alt, isBlank, width, height }: Props) => {
  return (
    <Link className={link} href={href} target={isBlank ? "_blank" : ""} rel={isBlank ? "noreferrer noopener" : ""}>
      <img src={src} alt={alt} width={width} height={height} />
    </Link>
  );
};

export default HoverLinkImage;

const link = css`
  overflow: hidden;
  transition: opacity 0.25s;

  img {
    transition: transform 1.5s;
  }

  :hover {
    img {
      transform: scale(1.25);
    }
  }
`;
