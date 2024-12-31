import articlesJson from "../../public/data/articles.json";
import workJson from "../../public/data/work.json";

export function getArticleItems() {
  const items: WorkItem[] = workJson as WorkItem[];
  items.sort((a, b) => b.priority - a.priority);
  const articleItems: Article[] = articlesJson as Article[];

  return {
    items,
    articleItems,
  };
}
