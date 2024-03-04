import Link from "next/link";
import Image from "next/image";
import { SearchBar } from "./SearchBar";

export default function NavMenu() {
  return (
    <nav className="flex justify-between align-baseline items-center bg-foreground text-background">
      <Link href={"/"}>
        <Image
          src="/logo.png"
          alt="logo"
          width={70}
          height={70}
          className="ml-10 mr-20"
        />
      </Link>
      <SearchBar />
    </nav>
  );
}
