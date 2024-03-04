import { EventItem } from "@/components/definitions/event-items";
import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json(EventItems);
}

export const EventItems: EventItem[] = [
  {
    id: 1,
    name: "Wine - Two Oceans Cabernet",
    club: 37,
    description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
    leaderboard: [
      {
        id: 1,
        name: "Toughjoyfax",
        score: 1,
      },
      {
        id: 2,
        name: "Tin",
        score: 2,
      },
      {
        id: 3,
        name: "Tresom",
        score: 3,
      },
      {
        id: 4,
        name: "Tresom",
        score: 4,
      },
      {
        id: 5,
        name: "Tresom",
        score: 5,
      },
    ],
  },
];
