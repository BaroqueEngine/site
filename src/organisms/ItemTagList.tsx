import { css, cx } from "@emotion/css";
import { tagNames } from "others/Utils";
import React, { useState } from "react";

type Props = {
  selectTags: string[];
  setSelectTags: React.Dispatch<React.SetStateAction<string[]>>;
};

export const ItemTagList = ({ selectTags, setSelectTags }: Props) => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const element = event.currentTarget;
    const tag = element.value;
    if (element.checked) {
      if (!selectTags.includes(tag)) {
        setSelectTags([...selectTags, tag]);
      }
    } else {
      setSelectTags(selectTags.filter((selectTag) => selectTag !== tag));
    }
  };

  return (
    <div className={container}>
      {Object.keys(tagNames).map((tag) => {
        const boxCss = [box];
        if (selectTags.includes(tag)) {
          boxCss.push(selected);
        }
        if (tag === "all") {
          return <></>;
        }
        return (
          <div className={cx(boxCss)} key={tag}>
            <input className={checkbox} type="checkbox" id={tag} value={tag} onChange={onChangeHandler} />
            <label className={label} htmlFor={tag}>
              {tagNames[tag]}
            </label>
          </div>
        );
      })}
    </div>
  );
};

const selected = css`
  border-color: #f7383f;
`;

const label = css`
  cursor: pointer;
  padding: 15px;
`;

const box = css`
  display: flex;
  gap: 5px;
  margin: 5px;
  border-radius: 5px;
  min-width: 60px;
  justify-content: center;
  background-color: #000;
  border: 1px solid #000;
  user-select: none;
`;

const checkbox = css`
  display: none;
`;

const container = css`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.05rem;
  cursor: pointer;
`;
