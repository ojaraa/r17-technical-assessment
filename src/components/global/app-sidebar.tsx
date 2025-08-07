"use client";
import Image from "next/image";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "../ui/sidebar";
import { Timmana } from "next/font/google";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

export const timmana = Timmana({
  variable: "--font-timmana",
  subsets: ["latin"],
  weight: ["400"],
});

export function AppSidebar() {
  const pathName = usePathname();

  return (
    <Sidebar collapsible="icon" className="py-3 px-6 ">
      <SidebarHeader className="flex flex-row !items-center gap-x-2">
        <SidebarTrigger />
        <div className="flex gap-x-2 ">
          <Image
            src="/assets/images/logomark.png"
            alt="Logo"
            width={32}
            height={32}
            className="w-6 h-6 sm:h-8 sm:w-8 object-cover r"
          />
          <h1
            className={`${timmana.className} text-2xl sm:text-[32px] text-[#437D8E] font-bold  m-0`}
          >
            FinTrack
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navLinks.map((link) => (
            <SidebarMenuItem key={link.id}>
              <SidebarMenuButton
                asChild
                className="hover:bg-[#38677616] hover:text-[#3A6C7B] rounded-[16px] transition-all duration-200"
              >
                <Link
                  href={link.href}
                  className={cn(
                    "text-base font-medium leading-6",
                    pathName === link.href
                      ? "bg-[#38677616]  text-[#3A6C7B] rounded-[16px]"
                      : "text-[#1B2528]"
                  )}
                >
                  {link.title}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
