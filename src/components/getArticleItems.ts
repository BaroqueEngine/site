import articlesJson from "../../public/data/articles.json";
import workJson from "../../public/data/work.json";
import playJson from "../../public/p/play.json";

export function getArticleItems() {
  const items: WorkItem[] = workJson as WorkItem[];
  items.sort((a, b) => b.priority - a.priority);
  const articleItems: Article[] = articlesJson as Article[];
  const playItems = playJson as PlayItem[];

  return {
    items,
    articleItems,
    playItems,
  };
}
