import React from "react";
import SearchInput from "./global/search-input";

import Image from "next/image";
import { CustomAvatar } from "./global/custom-avatar";

export default function Navbar() {
  return (
    <div className="flex justify-end items-center gap-x-4 p-4">
      <SearchInput />
      <Image
        src={"/assets/images/app-grid.png"}
        alt="App Grid"
        width={24}
        height={24}
        className=" cursor-pointer"
      />

      <CustomAvatar
        src="/assets/images/avatar.png"
        fallback="A"
        className="w-8 h-8 rounded-full cursor-pointer font-extrabold"
      />
    </div>
  );
}
