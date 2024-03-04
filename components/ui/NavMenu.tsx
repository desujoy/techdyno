import Link from "next/link";
import Image from "next/image";
import { SearchBar } from "./SearchBar";

export default function NavMenu() {
  return (
    <nav className="flex justify-between items-center bg-foreground text-background">
      <Link href={"/"}>
        <Image
          src="/logo.svg"
          alt="logo"
          width={40}
          height={40}
          className="ml-10 mr-20"
        />
      </Link>
      <SearchBar />
      <ul className="flex space-x-4 m-4">
        <li className="h-70 flex items-center">
          <Link href={"/login"}>Login</Link>
        </li>
        <li className="h-70 flex items-center">
          <Link href={"/register"}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
}
