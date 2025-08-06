"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { CustomAvatar } from "@/components/global/custom-avatar";
import StatusBadge from "@/components/global/status-badge";
import { Button } from "@/components/ui/button";
import { users } from "@/lib/data";
import Image from "next/image";
import Overview from "@/components/overview";

const tabs = [
  { id: 1, key: "overview", label: "Overview" },
  { id: 2, key: "transactions", label: "Transactions" },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabs[0].key);
  return (
    <div className="grid gap-y-8 sm:gap-y-6">
      <div className="flex flex-col sm:flex-row sm:justify-between gap-4 ">
        <div className="flex items-center gap-x-3">
          <h1 className="text-xl sm:text-[34px] text-[#1B2528] font-bold ">
            Wallet Ledger
          </h1>
          <Image
            src="/assets/images/Icon.png"
            alt="Icon"
            width={12}
            height={6}
            className=" cursor-pointer"
          />

          <StatusBadge activeStatus title="Active" />
        </div>

        <div className="flex items-center gap-x-2">
          <Button>Share</Button>
          <Button variant="outline" className="!px-3">
            <Image
              src={"/assets/images/dots-horizontal.png"}
              alt="Actions button"
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-x-2">
        <div className="flex ">
          {users?.slice(0, 4).map((user) => (
            <CustomAvatar
              src={user.avatar}
              key={user.id}
              fallback={user.firstName.charAt(0)}
              className=" ml-[-10] w-8 h-8 rounded-full cursor-pointer object-cover font-extrabold"
            />
          ))}
        </div>

         {users?.length > 0 && (
          <p className="text-sm text-[#1b252863] font-medium">
            {users.length <= 3
              ? users.map((user) => user.firstName).join(", ")
              : `${users
                  .slice(0, 3)
                  .map((user) => user.firstName)
                  .join(", ")} +${users.length - 3} others`}
          </p>
        )}
      </div>

      <div className="flex overflow-x-auto items-center border-b">
        {tabs.map((tab) => (
          <div key={tab.id} className="text-sm text-nowrap text-center ">
            <button
              className={`${
                activeTab === tab.key ? "" : "!text-[#667185]"
              } relative p-4 rounded-xl text-[#4B8B9F] !outline-none focus:!outline-none text-sm leading-[20.3px] font-medium transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
              {activeTab === tab.key && (
                <motion.span
                  layoutId="bubble"
                  className="absolute h-0.5 rounded-full top-[96%] inset-0 z-10 bg-[#4B8B9F]"
                  transition={{
                    duration: 0.2,
                  }}
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {activeTab === "overview" && <Overview />}
    </div>
  );
}
