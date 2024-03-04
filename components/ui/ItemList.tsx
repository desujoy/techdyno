import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import Image from "next/image";
import { EventItem } from "../definitions/event-items";
import classes from "./ItemList.module.css";
import Link from "next/link";

export default function ItemList({ items }: { items: EventItem[] }) {
  const upcoming = items.slice(0,3);
  const past = items.slice(3,);
  return (
    <>
      <h1 className="text-3xl text-secondary font-bold my-4">Upcoming Events</h1>
      <div className={`${classes["scrolling-wrapper-flexbox"]} w-full`}>
        {!items && <p>No items found</p>}
        {items &&
          upcoming.map((event) => (
            <Card key={event.id} className={`${classes["card"]}`}>
              <Link href={`/events/${event.id}`} key={event.id}>
                <CardHeader>
                  <CardTitle>{event.name}</CardTitle>
                  {/* <CardDescription className="text-sm overflow-ellipsis overflow-hidden h-10">
                  {event.description}
                </CardDescription> */}
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                  <Image
                    src={`/thumbnails${event.image}`}
                    alt={event.name}
                    width={300}
                    height={300}
                    layout="fixed"
                    objectFit="cover"
                  />
                </CardContent>
              </Link>
              <CardFooter className="flex justify-between items-center">
                <Link href={`/club/${event.club}`} key={event.club}>
                  <p>{event.club}</p>
                </Link>
                <Link target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfpdxjwx2JBiiuI2wd7Rxn8o-OJysHXyBTfmx7iaS2mBnlLqg/viewform?usp=sf_link">
                <button className="bg-primary text-primary-foreground rounded-lg p-2">
                  Register
                </button></Link>
              </CardFooter>
            </Card>
          ))}
      </div>
      <h1 className="text-3xl text-secondary font-bold my-4">Past Events</h1>
      <div className={`${classes["scrolling-wrapper-flexbox"]} w-full`}>
        {!items && <p>No items found</p>}
        {items &&
          past.map((item) => (
            <Card key={item.id} className={`${classes["card"]}`}>
              <Link href={`/events/${item.id}`} key={item.id}>
                <CardHeader>
                  <CardTitle>{item.name}</CardTitle>
                  {/* <CardDescription className="text-sm overflow-ellipsis overflow-hidden h-10">
                  {item.description}
                </CardDescription> */}
                </CardHeader>
                <CardContent className="flex justify-center items-center">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={300}
                    height={300}
                    objectFit="fill"
                  />
                </CardContent>
              </Link>
              <CardFooter className="flex justify-between items-center">
                <Link href={`/club/${item.club}`} key={item.club}>
                  <p>{item.club}</p>
                </Link>
                {/* <button className="bg-primary text-primary-foreground rounded-lg p-2">
                  Register
                </button> */}
              </CardFooter>
            </Card>
          ))}
      </div>
    </>
  );
}
