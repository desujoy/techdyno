import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import Image from "next/image";
import { ShopItem } from "../definitions/shop-items";

export default function ItemList({ items }: { items: ShopItem[] }) {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {!items && <p>No items found</p>}
      {items &&
        items.map((item) => (
          <Card
            key={item.id}
            className="flex flex-col w-full sm:w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/5 m-4"
          >
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
              <CardDescription className="text-sm overflow-ellipsis overflow-hidden h-10">
                {item.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center items-center">
              <Image
                src={item.image}
                alt={item.name}
                width={300}
                height={300}
              />
            </CardContent>
            <CardFooter className="flex justify-between items-center">
              <p>${item.price}</p>
              <button className="bg-primary text-primary-foreground rounded-lg p-2">
                Add to cart
              </button>
            </CardFooter>
          </Card>
        ))}
    </div>
  );
}
