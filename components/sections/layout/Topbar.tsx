"use client";

import React, { useEffect, useState } from "react";
import { Bell, User, ChevronDown, Shield, Eye, Briefcase } from "lucide-react";

type Role = "admin" | "manager" | "viewer" | "user";

type UserInfo = {
  name: string;
  email: string;
  role: string;
};

const Topbar = () => {
  const [user, setUser] = useState<UserInfo | null>(null);

  useEffect(() => {
    const userStr = localStorage.getItem("userInfo");
    if (userStr) {
      try {
        const parsed = JSON.parse(userStr);
        setUser(parsed);
      } catch (err) {
        console.error("Invalid userInfo");
      }
    }
  }, []);

  // Role styles
  const roleStyles = {
    admin: {
      label: "Admin",
      icon: Shield,
      bg: "bg-[#DBEAFE]",
      text: "text-[#1E40AF]",
    },
    manager: {
      label: "Manager",
      icon: Briefcase,
      bg: "bg-[#FFEDD5]",
      text: "text-[#9A3412]",
    },
    viewer: {
      label: "Viewer",
      icon: Eye,
      bg: "bg-[#DCFCE7]",
      text: "text-[#166534]",
    },
    user: {
      label: "User",
      icon: User,
      bg: "bg-[#E0E7FF]",
      text: "text-[#3730A3]",
    },
  };

  const roleKey = (user?.role?.toLowerCase() as Role) || "viewer";
  const currentRole = roleStyles[roleKey];

  return (
    <header className="h-20 bg-[#F4F4F4] flex items-center justify-end px-10 gap-4">
      <button className="p-2.5 bg-white rounded-full shadow-sm hover:shadow-md transition-all">
        <Bell size={20} className="text-gray-500" />
      </button>

      {/* Role Badge */}
      <div className={`flex items-center gap-2 px-4 py-2 rounded-full ${currentRole.bg}`}>
        <currentRole.icon size={16} className={currentRole.text} />
        <span className={`text-sm font-bold ${currentRole.text}`}>
          {currentRole.label}
        </span>
      </div>

      {/* User Info */}
      <div className="flex items-center gap-3 bg-white p-1.5 pr-4 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
          <User size={20} className="text-gray-400" />
        </div>

        <div className="hidden sm:block">
          <p className="text-sm font-bold text-gray-800 leading-none">
            {user?.name || "Loading..."}
          </p>
          <p className="text-[10px] text-gray-400 mt-1 leading-none">
            {user?.email || ""}
          </p>
        </div>

        <ChevronDown size={14} className="text-gray-400 ml-1" />
      </div>
    </header>
  );
};

export default Topbar;