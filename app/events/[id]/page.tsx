import { ShopItem } from "@/components/definitions/shop-items";
import ItemDetails from "@/components/ui/ItemDetails";

const ShopItems = import("@/app/api/items/route").then(
  (module) => module.ShopItems
);

export default async function ItemPage({ id }: { id: number }) {
  console.log(id);
  const items: ShopItem[] = await ShopItems;
  const item = items.find((item) => item.id === id);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ItemDetails item={item!} />
    </main>
  );
}
