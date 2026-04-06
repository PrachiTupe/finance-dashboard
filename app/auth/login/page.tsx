"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login, getMyInfo } from "@/services/auth";
import { saveToken } from "@/utils/auth";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      // 1️⃣ Login → get token
      const { token } = await login(email, password);
      saveToken(token);

      // 2️⃣ Fetch full user info
      const user = await getMyInfo();

      // 3️⃣ Save user info in localStorage
      localStorage.setItem("userInfo", JSON.stringify(user));

      // 4️⃣ Redirect based on role
      switch (user.role) {
        case "USER":
          router.push("/dashboard/user");
          break;
        case "ADMIN":
          router.push("/dashboard/admin");
          break;
        case "MANAGER":
          router.push("/dashboard/manager");
          break;
        case "VIEWER":
          router.push("/dashboard/viewer");
          break;
        default:
          router.push("/auth/login");
      }
    } catch (err: any) {
      if (err.response?.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl mb-4">Login</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 m-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 m-2"
      />

      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white p-2 rounded mt-2"
      >
        Login
      </button>

      {error && <p className="text-red-500 mt-2">{error}</p>}

      <p className="mt-4">
        Don't have an account?{" "}
        <Link href="/auth/register" className="text-blue-500 underline">
          Register here
        </Link>
      </p>
    </div>
  );
}