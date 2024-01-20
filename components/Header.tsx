import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemToggler } from "./ThemeToggler";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";
import { Button } from "./ui/button";
import image from "@/public/favicon.png";
import SignIn from "./SignIn";
const Header = () => {
  return (
    <header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 ">
      <Link href="/">
        <Image
          src={image}
          width={120}
          height={70}
          alt="Netflix logo"
          className={"cursor-pointer inver-0 "}
        />
      </Link>

      <div className="flex space-x-2">
        <GenreDropdown />
        <SearchInput />
        <ThemToggler />

        <SignIn />
      </div>
    </header>
  );
};

export default Header;
