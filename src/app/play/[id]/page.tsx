import PlayPage from "@/components/PlayPage";
import { getPlayItems } from "@/components/getPlayItems";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return getPlayItems().map((item) => ({
    id: item.id,
  }));
}

export default async function Play({ params }: Props) {
  const { id } = await params;

  return <PlayPage playId={id} />;
}
