import { EventItem } from "@/components/definitions/event-items";
import Image from "next/image";

export default function eventDetails({ event }: { event: EventItem }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">{event.name}</h1>
      <Image src={event.image} alt={event.name} height={500} width={500} />
      <p>{event.description}</p>
      <p>${event.club}</p>
    </div>
  );
}
