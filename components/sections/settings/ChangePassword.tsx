"use client";

import { useState } from "react";
import { changePassword } from "@/services/auth";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async () => {
    setMessage("");

    // 🔒 Basic validations
    if (!oldPassword || !newPassword || !confirmPassword) {
      return setMessage("All fields are required");
    }

    if (newPassword.length < 6) {
      return setMessage("New password must be at least 6 characters");
    }

    if (newPassword !== confirmPassword) {
      return setMessage("New passwords do not match");
    }

    try {
      setLoading(true);

      const res = await changePassword(oldPassword, newPassword);

      setMessage(res.message || "Password updated successfully");

      // 🔄 Clear fields after success
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md p-6 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>

      <div className="space-y-4">
        {/* Old Password */}
        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* New Password */}
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Confirm Password */}
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full p-3 border rounded-xl outline-none focus:ring-2 focus:ring-blue-400"
        />

        {/* Message */}
        {message && (
          <p className="text-sm text-center text-red-500">{message}</p>
        )}

        {/* Button */}
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="w-full bg-blue-500 text-white py-3 rounded-xl font-semibold hover:bg-blue-600 transition"
        >
          {loading ? "Updating..." : "Update Password"}
        </button>
      </div>
    </div>
  );
}