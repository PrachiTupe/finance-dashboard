// middleware/auth.ts
import { getToken } from "@/utils/auth";

export const requireAuth = (expectedRole?: string) => {
  const token = getToken();

  // ❌ No token → redirect to login
  if (!token) {
    return { redirect: "/auth/login" };
  }

  // ✅ Get userInfo from localStorage
  const userStr = localStorage.getItem("userInfo");

  if (!userStr) {
    return { redirect: "/auth/login" };
  }

  let user;
  try {
    user = JSON.parse(userStr);
  } catch (err) {
    console.error("Invalid userInfo in localStorage");
    return { redirect: "/auth/login" };
  }

  // ❌ No role → invalid session
  if (!user?.role) {
    return { redirect: "/auth/login" };
  }

  // 🔥 Role mismatch → redirect to correct dashboard
  if (expectedRole && user.role.toLowerCase() !== expectedRole.toLowerCase()) {
    return { redirect: `/dashboard/${user.role.toLowerCase()}` };
  }

  return { ok: true };
};