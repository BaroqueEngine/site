import { css } from "@emotion/css";

type Props = {
  href: string;
  src: string;
  alt: string;
  isBlank: boolean;
  width?: number;
  height?: number;
};

const LinkImage = ({ href, src, alt, isBlank, width, height }: Props) => {
  return (
    <a className={link} href={href} target={isBlank ? "_blank" : ""}>
      <img src={src} alt={alt} width={width} height={height} />
    </a>
  );
};

export default LinkImage;

const link = css`
  transition: opacity 0.25s;

  :hover {
    opacity: 0.5;
  }
`;