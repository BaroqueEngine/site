import TagPage from "@/components/TagPage";
import { getWorkItems } from "@/components/getWorkItems";

type Props = {
  params: Promise<{
    tag: string;
  }>;
};

export async function generateStaticParams() {
  const tags: string[] = ["all"];
  for (const item of getWorkItems()) {
    for (const tag of item.tags) {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    }
  }

  return tags.map((tag) => {
    return { tag: tag };
  });
}

export default async function Tags({ params }: Props) {
  const { tag } = await params;
  if (tag === undefined) {
    return <></>;
  }

  return (
    <>
      <TagPage tag={tag} />
    </>
  );
}
