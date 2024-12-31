import WorkPage from "@/components/WorkPage";
import { getWorkItems } from "@/components/getWorkItems";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return getWorkItems().map((item) => ({
    id: String(item.id),
  }));
}

export default async function Works({ params }: Props) {
  const { id } = await params;

  return <WorkPage wordId={Number(id)} />;
}
