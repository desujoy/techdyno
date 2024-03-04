import { ShopItem } from "@/components/definitions/shop-items";
import Image from "next/image";

export default function ItemDetails({ item }: { item: ShopItem }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">{item.name}</h1>
      <Image src={item.image} alt={item.name} height={400} width={400}/>
      <p>{item.description}</p>
      <p>${item.price}</p>
    </div>
  );
}
