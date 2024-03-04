import { ShopItem } from "@/components/definitions/shop-items";
import ItemList from "@/components/ui/ItemList";

export default async function Home() {
  const items: ShopItem[] = await import("./api/items/route").then(
    (module) => module.ShopItems
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ItemList items={items} />
    </main>
  );
}
