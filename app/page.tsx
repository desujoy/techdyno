import { EventItem } from "@/components/definitions/event-items";
import ItemList from "@/components/ui/ItemList";

export default async function Home() {
  const items: EventItem[] = await import("./api/items/route").then(
    (module) => module.EventItems
  );
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ItemList items={items} />
    </main>
  );
}
