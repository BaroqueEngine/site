import { css } from "@emotion/css";
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
        if (tag === "all") {
          return <></>;
        }
        return (
          <div>
            <input type="checkbox" id={tag} value={tag} onChange={onChangeHandler} />
            <label htmlFor={tag}>{tagNames[tag]}</label>
          </div>
        );
      })}
    </div>
  );
};

const container = css`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 60px;
  font-family: "Tungsten";
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.05rem;

  div {
    display: flex;
    gap: 5px;
    padding: 15px;
  }
`;
