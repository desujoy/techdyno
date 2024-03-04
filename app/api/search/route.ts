import { NextRequest, NextResponse } from "next/server";
import { searchQuery } from "@/components/definitions/search-query";

const EventItems = import("../items/route").then((module) => module.EventItems);
const ClubItems = import("../clubs/route").then((module)=>module.ClubItems);
export const dynamic = "force-dynamic";

// fetch(`/api/search?search=${searchValue}`) should resolve

export async function GET(req: NextRequest) {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
  const search = req.nextUrl.searchParams.get("search");
  if (!search) {
    return NextResponse.json([]);
  }
  const filteredEventItems = await EventItems.then((items) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  );
  const filteredClubItems = await ClubItems.then((items) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    )
  );
  return NextResponse.json({filteredClubItems,filteredEventItems});
}
