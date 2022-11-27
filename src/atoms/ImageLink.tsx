import { css } from "@emotion/css";

type Props = {
  url: string;
  src: string;
};

const ImageLink = ({ url, src }: Props) => {
  return (
    <a className={link} href={url} target="_blank">
      <img src={src} />
    </a>
  );
};

export default ImageLink;

const link = css`
  transition: opacity 0.25s;

  :hover {
    opacity: 0.5;
  }
`;
