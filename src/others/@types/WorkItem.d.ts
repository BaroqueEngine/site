type WorkItem = {
  id: number;
  tags: string[];
  type: "image" | "video";
  videoId?: string;
};

type Article = {
  title: string;
  description: string;
  url: string;
  image_url: string;
};
