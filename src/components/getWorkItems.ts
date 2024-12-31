import json from "../../public/data/work.json";

export function getWorkItems(): WorkItem[] {
  return json as WorkItem[];
}
