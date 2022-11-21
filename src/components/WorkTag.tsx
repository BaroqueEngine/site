import { useState } from "react";
import { shortTagNames, tagColors, tagNames } from "../others/Utils";
import { css } from "@emotion/css";
import Link from "next/link";

type Props = {
  tag: string;
};

const WorkTag = ({ tag }: Props) => {
  const [hover, setHover] = useState(false);
  const tagColor = tagColors[tag];
  const tagName = tagNames[tag];
  const shortTagName = shortTagNames[tag];

  return (
    <Link
      key={tag}
      className={workTag}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      href={`/tags/${tag}`}
    >
      <span className={workTagContainer} style={{ backgroundColor: tagColor }}>
        <span className={normalTag}>{tagName}</span>
        <span className={shortTag}>{shortTagName}</span>
      </span>
    </Link>
  );
};

export default WorkTag;

const workTagContainer = css`
  padding: 3px 10px;
  border-radius: 5px;
`;

const normalTag = css`
  @media (max-width: 1200px) {
    display: none;
  }
`;

const shortTag = css`
  display: none;

  @media (max-width: 1200px) {
    display: block;
  }
`;

const workTag = css`
  display: flex;
  align-items: center;
  padding: 1rem min(2vw, 8px);
  text-decoration: none;
  font-size: 12px;
  font-family: "Mono";
  transition: all 0.2s;
  letter-spacing: 1px;
`;
