// components/Sidebar.tsx
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Sidebar() {
  const path = usePathname();
  const [isTracking, setIsTracking] = useState(false);

  const menu = [
  { name: "Dashboard", href: "/", icon: "/icons/finance.svg" },
  { name: "App Classification", href: "/apps", icon: "/icons/settings_applications.svg" },
  { name: "Activity", href: "/activity", icon: "/icons/browse_activity.svg" },
  { name: "Report", href: "/report", icon: "/icons/assignment.svg" },
];

  return (
    <div className="w-64 h-screen bg-white flex flex-col justify-between">

      
      {/* TOP */}
      <div>
        {/* LOGO */}
        <div className="p-6 flex items-center gap-2">
          <img src="/icons/logo.svg" className="w-6 h-6" />

          <h1 className="text-xl font-bold">
            FocusInsight
          </h1>
        </div>

        {/* SIMULASI PELACAK */}
        <div className="px-4 mb-6">
          <p className="text-xs text-gray-400 mb-2">
            SIMULASI PELACAK
          </p>

          {/* tombol start */}
          <button
            onClick={() => setIsTracking(!isTracking)}
            className={`group w-full py-3 rounded-xl flex items-center justify-between px-4 transition-all duration-200
              ${isTracking
                ? "bg-red-100 text-red-600 hover:bg-red-200"
                : "bg-gray-100 hover:bg-gray-200"}
              hover:-translate-y-0.5 hover:shadow-md
            `}>

            <span className="font-medium">
              {isTracking ? "Stop" : "Start"}
            </span>

            <div
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200
                ${isTracking ? "bg-red-500" : "bg-green-500"}
                group-hover:scale-110
              `}>

              <img
                src={isTracking ? "/icons/stop.svg" : "/icons/play_arrow.svg"}
                className="w-5 h-5 transition-transform duration-200 group-hover:rotate-120"
              />
            </div>
          </button>
        </div>

        {/* MENU */}
        <nav className="flex flex-col gap-2">
          {menu.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className={`flex items-center gap-3 p-2 rounded ${
              path === item.href
                ? "bg-blue-100 text-blue-600"
                : "hover:bg-gray-100"
            }`}
              >
              <img src={item.icon} width={20} height={20} />

                {/* TEXT */}
              {item.name}
            </Link>
          ))}
        </nav>
      </div>


      {/* USER */}
      {/* BAWAH (PROFILE + LOGOUT DIGABUNG) */}
      <div className="p-4 border-t border-black/10">
        <div className="flex items-center gap-3 mb-3">
          
          {/* AVATAR */}
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-600">
            Br
          </div>

          {/* INFO */}
          <div>
            <p className="font-semibold text-sm">Brian</p>
            <p className="text-xs text-gray-500 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Pengguna Aktif
            </p>
          </div>
        </div>

        {/* BUTTON */}
        <button className="w-full bg-red-100 text-red-600 py-2 rounded-lg hover:bg-red-200 transition text-sm">
          Keluar
        </button>
      </div>
    </div>
  );
}