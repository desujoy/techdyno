const ShopItems = import("@/app/api/items/route").then(
  (module) => module.ShopItems
);

export function searchItems(query: string) {
  return ShopItems.then((items) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    )
  );
}
