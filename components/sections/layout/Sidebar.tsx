"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard, BarChart3, ArrowLeftRight,
  UserSquare2, Users, Settings, HelpCircle,
  LogOut, ShieldCheck, FileText, Eye
} from "lucide-react";

type Role = "admin" | "manager" | "viewer" | "user";

type UserInfo = {
  role: string;
};

const Sidebar = () => {
  const pathname = usePathname();
  const [role, setRole] = useState<Role>("viewer"); // default

  useEffect(() => {
  const userStr = localStorage.getItem("userInfo");
  if (userStr) {
    try {
      const user = JSON.parse(userStr);
      const roleFromStorage = user.role.toLowerCase();

      if (["admin", "manager", "viewer", "user"].includes(roleFromStorage)) {
        setRole(roleFromStorage as Role);
      } else {
        setRole("viewer");
      }
    } catch (err) {
      console.error("Invalid userInfo");
    }
  }
}, []);

  // 🔥 Role-based navigation
  const navigationMap = {
    admin: [
      { label: "Dashboard", href: "/dashboard/admin", icon: LayoutDashboard },
      { label: "Analytics", href: "/dashboard/admin/analytics", icon: BarChart3 },
      { label: "Managers", href: "/dashboard/admin/managers", icon: UserSquare2 },
      { label: "Users", href: "/dashboard/admin/users", icon: Users },
      { label: "Admins", href: "/dashboard/admin/admins", icon: ShieldCheck },
      { label: "Transactions", href: "/dashboard/admin/transactions", icon: ArrowLeftRight },
      { label: "Logs", href: "/dashboard/admin/logs", icon: FileText },
    ],
    manager: [
      { label: "Dashboard", href: "/dashboard/manager", icon: LayoutDashboard },
      { label: "Analytics", href: "/dashboard/manager/analytics", icon: BarChart3 },
      { label: "Transactions", href: "/dashboard/manager/transactions", icon: ArrowLeftRight },
      { label: "Users", href: "/dashboard/manager/users", icon: Users },
      { label: "Logs", href: "/dashboard/manager/logs", icon: FileText },
    ],
    viewer: [
      { label: "Dashboard", href: "/dashboard/viewer", icon: LayoutDashboard },
      { label: "Analytics", href: "/dashboard/viewer/analytics", icon: BarChart3 },
      { label: "Users", href: "/dashboard/viewer/users", icon: Users },
      { label: "Transactions", href: "/dashboard/viewer/transactions", icon: ArrowLeftRight },
      { label: "Settings", href: "/dashboard/viewer/settings", icon: Settings },
    ],
    user: [
      { label: "Dashboard", href: "/dashboard/user", icon: LayoutDashboard },
      { label: "Analytics", href: "/dashboard/user/analytics", icon: BarChart3 },
      { label: "Transactions", href: "/dashboard/user/transactions", icon: ArrowLeftRight },
      { label: "Manager", href: "/dashboard/user/manager", icon: UserSquare2 },
      { label: "Viewers", href: "/dashboard/user/viewers", icon: Eye },
      { label: "Settings", href: "/dashboard/user/settings", icon: Settings },
    ],
  };

  const mainNav = navigationMap[role] || navigationMap.viewer;

  const NavLink = ({ item }: { item: any }) => {
    const isActive = pathname === item.href;

    return (
      <Link
        href={item.href}
        className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
          isActive
            ? "text-white bg-white/10"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        <item.icon size={20} />
        <span className="text-sm font-medium">{item.label}</span>
      </Link>
    );
  };

  return (
    <aside className="w-64 bg-black text-white flex flex-col h-screen sticky top-0 border-r border-gray-900">
      {/* Logo */}
      <div className="p-6 mb-4 flex items-center gap-3">
        <div className="w-8 h-8 bg-[#22C55E] rounded-full flex items-center justify-center font-bold text-black italic">
          f
        </div>
        <div className="leading-tight">
          <p className="font-bold text-lg tracking-tight">Finance</p>
          <p className="text-xs text-gray-500 uppercase tracking-widest">
            Dashboard
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {mainNav.map((item) => (
          <NavLink key={item.href} item={item} />
        ))}

        <div className="my-6 border-t border-gray-800 mx-3" />

        <NavLink item={{ label: "Settings", href: "/settings", icon: Settings }} />
        <NavLink item={{ label: "Info & Help", href: "/help", icon: HelpCircle }} />
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-900">
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/auth/login";
          }}
          className="flex items-center gap-3 px-4 py-3 text-gray-400 hover:text-white transition-colors w-full"
        >
          <LogOut size={20} />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;