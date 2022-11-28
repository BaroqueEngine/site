import { css } from "@emotion/css";

type Props = {
  href: string;
  src: string;
  alt: string;
  isBlank: boolean;
  width?: number;
  height?: number;
};

const ContactLink = ({ href, src, alt, isBlank, width, height }: Props) => {
  return (
    <a className={link} href={href} target={isBlank ? "_blank" : ""}>
      <img src={src} alt={alt} width={width} height={height} />
    </a>
  );
};

export default ContactLink;

const link = css`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  width: 100px;
  height: 100px;
  border-radius: 9999px;
  background-color: #000;
  transition: opacity 0.25s;

  :hover {
    opacity: 0.5;
  }
`;
