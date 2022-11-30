type WorkItem = {
  id: number;
  tags: string[];
  type: "image" | "video";
  videoId?: string;
  priority: number;
};

type Article = {
  title: string;
  description: string;
  url: string;
  image_url: string;
};
