import { ShopItem } from "@/components/definitions/shop-items";
import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json(ShopItems);
}

export const ShopItems: ShopItem[] = [
  {
    id: 1,
    name: "Wine - Two Oceans Cabernet",
    price: 37,
    description: "Sed ante. Vivamus tortor. Duis mattis egestas metus.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
  },
  {
    id: 2,
    name: "Tart - Lemon",
    price: 5,
    description:
      "Sed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
  },
  {
    id: 3,
    name: "Sherry - Dry",
    price: 79,
    description:
      "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
  },
  {
    id: 4,
    name: "Chicken - Base, Ultimate",
    price: 82,
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  },
  {
    id: 5,
    name: "Sobe - Tropical Energy",
    price: 13,
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
  },
  {
    id: 6,
    name: "Horseradish Root",
    price: 70,
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  },
  {
    id: 7,
    name: "Squid Ink",
    price: 91,
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  },
  {
    id: 8,
    name: "Alize Gold Passion",
    price: 66,
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  },
  {
    id: 9,
    name: "Sauce - Bernaise, Mix",
    price: 73,
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
  },
  {
    id: 10,
    name: "Vanilla Beans",
    price: 46,
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
  },
  {
    id: 11,
    name: "Ice Cream - Strawberry",
    price: 36,
    description:
      "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  },
  {
    id: 12,
    name: "Wine - Barolo Fontanafredda",
    price: 34,
    description:
      "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  },
  {
    id: 13,
    name: "Langers - Cranberry Cocktail",
    price: 51,
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  },
  {
    id: 14,
    name: "Bread - Italian Sesame Poly",
    price: 54,
    description:
      "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  },
  {
    id: 15,
    name: "Coffee - 10oz Cup 92961",
    price: 26,
    description:
      "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  },
  {
    id: 16,
    name: "Lettuce - Arugula",
    price: 48,
    description:
      "Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
  },
  {
    id: 17,
    name: "Wine - Red Oakridge Merlot",
    price: 1,
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  },
  {
    id: 18,
    name: "Water, Tap",
    price: 46,
    description:
      "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  },
  {
    id: 19,
    name: "Strawberries - California",
    price: 91,
    description:
      "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  },
  {
    id: 20,
    name: "Baking Powder",
    price: 25,
    description:
      "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
  },
  {
    id: 21,
    name: "Sultanas",
    price: 89,
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  },
  {
    id: 22,
    name: "Tomatoes - Vine Ripe, Red",
    price: 15,
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  },
  {
    id: 23,
    name: "Pasta - Orecchiette",
    price: 53,
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  },
  {
    id: 24,
    name: "Wine - Hardys Bankside Shiraz",
    price: 82,
    description:
      "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  },
  {
    id: 25,
    name: "Tomatoes - Vine Ripe, Yellow",
    price: 77,
    description:
      "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    image: "http://dummyimage.com/100x100.png/dddddd/000000",
  },
  {
    id: 26,
    name: "Bar Mix - Pina Colada, 355 Ml",
    price: 5,
    description:
      "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  },
  {
    id: 27,
    name: "Cheese - Perron Cheddar",
    price: 59,
    description:
      "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  },
  {
    id: 28,
    name: "Sobe - Tropical Energy",
    price: 85,
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    image: "http://dummyimage.com/100x100.png/ff4444/ffffff",
  },
  {
    id: 29,
    name: "Pastry - French Mini Assorted",
    price: 24,
    description:
      "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
    image: "http://dummyimage.com/100x100.png/cc0000/ffffff",
  },
  {
    id: 30,
    name: "Compound - Rum",
    price: 18,
    description:
      "Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    image: "http://dummyimage.com/100x100.png/5fa2dd/ffffff",
  },
];
