import styles from "@/css/ItemTagList.module.css";
import { tagNames } from "@/others/Utils";
import type React from "react";

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
    <div className={styles.container}>
      {Object.keys(tagNames).map((tag) => {
        const css = selectTags.includes(tag) ? `${styles.box} ${styles.selected}` : `${styles.box}`;
        if (tag === "all") {
          return <div key={tag} />;
        }
        return (
          <div className={css} key={tag}>
            <input className={styles.checkbox} type="checkbox" id={tag} value={tag} onChange={onChangeHandler} />
            <label className={styles.label} htmlFor={tag}>
              {tagNames[tag]}
            </label>
          </div>
        );
      })}
    </div>
  );
};
