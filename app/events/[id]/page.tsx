import { EventItem } from "@/components/definitions/event-items";
import ItemDetails from "@/components/ui/ItemDetails";
import { useRouter } from "next/navigation";

const EventItems = import("@/app/api/items/route").then(
  (module) => module.EventItems
);

export default async function ItemPage({
  params: { id },
}: {
  params: { id: number };
}) {
  // console.log(id);
  const events: EventItem[] = await EventItems;
  // console.log(items);
  const event = events.find((event) => event.id === Number(id));
  // console.log(item);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ItemDetails event={event!} />
      {/* <h1>{id}</h1> */}
    </main>
  );
}
