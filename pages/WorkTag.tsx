import { useState } from "react";
import { shortTagNames, tagColors, tagNames } from "../src/Utils";
import { css } from "@emotion/css";

export default function WorkTag({ tag }: { tag: string }) {
  const [hover, setHover] = useState(false);
  const opacity = hover ? "ff" : "00";
  const tagColor = tagColors[tag];
  const tagName = tagNames[tag];
  const shortTagName = shortTagNames[tag];

  return (
    <a
      key={tag}
      className={workTag}
      style={{ borderColor: tagColor, backgroundColor: tagColor + opacity }}
      onMouseEnter={() => {
        setHover(true);
      }}
      onMouseLeave={() => {
        setHover(false);
      }}
      href={`/tags/${tag}`}
    >
      <span className={box} style={{ backgroundColor: tagColor }}></span>
      <span>
        <span className={normalTag}>{tagName}</span>
        <span className={shortTag}>{shortTagName}</span>
      </span>
    </a>
  );
}

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

const box = css`
  width: 8px;
  height: 8px;
  margin-right: 8px;
`;

const workTag = css`
  display: flex;
  align-items: center;
  padding: 0.4rem min(2vw, 12px);
  text-decoration: none;
  font-size: 12px;
  font-family: "Mono";
  transition: all 0.2s;
  letter-spacing: 1px;

  :hover {
    background-color: aquamarine;
  }
`;
