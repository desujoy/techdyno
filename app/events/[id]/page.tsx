import { ShopItem } from "@/components/definitions/event-items";
import ItemDetails from "@/components/ui/ItemDetails";
import { useRouter } from "next/navigation";

const ShopItems = import("@/app/api/items/route").then(
  (module) => module.ShopItems
);

export default async function ItemPage({
  params: { id },
}: {
  params: { id: number };
}) {
  // console.log(id);
  const items: ShopItem[] = await ShopItems;
  // console.log(items);
  const item = items.find((item) => item.id === Number(id));
  // console.log(item);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ItemDetails item={item!} />
      {/* <h1>{id}</h1> */}
    </main>
  );
}
