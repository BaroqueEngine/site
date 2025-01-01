import json from "../../public/p/play.json";

export function getPlayItems(): PlayItem[] {
  return json as PlayItem[];
}
