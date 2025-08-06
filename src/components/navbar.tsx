import React from "react";
import SearchInput from "./global/search-input";

import Image from "next/image";
import { CustomAvatar } from "./global/custom-avatar";
import { SidebarTrigger } from "./ui/sidebar";
import { timmana } from "./global/app-sidebar";

export default function Navbar() {
  return (
    <div className="flex justify-between sm:justify-end items-center gap-x-2 sm:gap-x-4 px-0 py-4 sm:px-4">
      <div className="flex sm:hidden items-center gap-x-2">
        <SidebarTrigger />
        <Image
          src="/assets/images/logomark.png"
          alt="Logo"
          width={32}
          height={32}
          className="h-6 w-6 sm:h-8 sm:w-8 object-cover "
        />
        <h1
          className={`${timmana.className} text-xl sm:text-2xl text-[#437D8E] font-bold m-0`}
        >
          FinTrack
        </h1>
      </div>

      <div className="flex items-center gap-x-2 sm:gap-x-4">
        <SearchInput />
        <Image
          src={"/assets/images/app-grid.png"}
          alt="App Grid"
          width={24}
          height={24}
          className=" cursor-pointer h-5 w-5 object-cover sm:h-6 sm:w-6"
        />

        <CustomAvatar
          src="/assets/images/avatar.png"
          fallback="A"
          className="w-8 h-8 rounded-full cursor-pointer font-extrabold"
        />
      </div>
    </div>
  );
}
