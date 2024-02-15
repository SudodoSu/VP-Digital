"use client";
import { icons } from "@/lib/icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";


const IconsData = [
    {text: "Dashboard", icon: icons[0].icon, label: icons[0].label, path: "/dashboard"},
    {text: "Calendar", icon: icons[0].icon, label: icons[0].label, path: "/dashboard/calendar"},
    {text: "Bookings", icon: icons[0].icon, label: icons[0].label, path: "/dashboard/bookings"},
    {text: "Messages", icon: icons[0].icon, label: icons[0].label, path: "/dashboard/messages"},
    {text: "Contacts", icon: icons[0].icon, label: icons[0].label, path: "/dashboard/contacts"},
    {text: "Statistics", icon: icons[0].icon, label: icons[0].label, path: "/dashboard/statistics"},
    {text: "Settings", icon: icons[0].icon, label: icons[0].label, path: "/dashboard/settings"},
]

function SideNav() {
    const pathname =usePathname();
  return (
    <section className="fixed left-0 w-[200px] h-screen border-r-[2px]">
      <div className="px-2 py-3">
        <div className="mb-4">
          <Image
            src="/assets/images/vpdigital.png"
            alt="VP Digital logo"
            width={500}
            height={500}
            className="w-1/2 m-auto"
          />
        </div>
        <div>
          <ul className="flex flex-col gap-2">
            {IconsData.map((icon, index) =>
            (
              <Link
              key={index}
                href={icon.path}
                className="text-xl"
                aria-label={icon.label}
              >
                <div className={`flex gap-2 items-center py-2 px-1 rounded-xl ${pathname == icon.path ? "border-solid border-2" : ""}`}>
                  {icon.icon}
                  <span>{icon.text}</span>
                </div>
              </Link>))} 
          </ul>
        </div>
      </div>
    </section>
  );
}

export default SideNav;
