import { shortTagNames, tagColors, tagNames } from "../others/Utils";
import { css } from "@emotion/css";
import Link from "next/link";

type Props = {
  tag: string;
};

const ItemTag = ({ tag }: Props) => {
  const tagColor = tagColors[tag];
  const tagName = tagNames[tag];
  const shortTagName = shortTagNames[tag];

  return (
    <Link key={tag} className={link} href={`/tags/${tag}`}>
      <span className={container} style={{ backgroundColor: tagColor }}>
        <span className={normal}>{tagName}</span>
        <span className={short}>{shortTagName}</span>
      </span>
    </Link>
  );
};

export default ItemTag;

const link = css`
  text-decoration: none;
`;

const container = css`
  display: flex;
  align-items: center;
  padding: 3px 10px;
  border-radius: 5px;
  font-size: 10px;
  font-family: "Mono";
  letter-spacing: 1px;
  transition: opacity 0.2s;

  :hover {
    opacity: 0.8;
  }
`;

const normal = css`
  @media (max-width: 1200px) {
    display: none;
  }
`;

const short = css`
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;
