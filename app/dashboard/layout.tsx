"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Sidebar from "@/components/sections/layout/Sidebar";
import Topbar from "@/components/sections/layout/Topbar";
import { requireAuth } from "@/middleware/auth";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const roleFromPath = pathname.split("/")[2];

    const result = requireAuth(roleFromPath);

    if (result?.redirect) {
      router.replace(result.redirect);
    }
  }, [pathname, router]);

  return (
    <div className="flex min-h-screen bg-[#F4F4F4]">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Topbar />

        <main className="flex-1 px-10 pt-10">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}