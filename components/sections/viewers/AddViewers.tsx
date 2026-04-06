"use client";

import { useState } from "react";
import { addViewer } from "@/services/users";

export default function AddViewers() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAddViewer = async () => {
    if (!email) {
      alert("Please enter email");
      return;
    }

    try {
      setLoading(true);

      const res = await addViewer(email);

      alert(res.message || "Viewer added successfully ✅");

      setEmail(""); // reset input
    } catch (err: any) {
      console.error("Error adding viewer", err);

      if (err.response?.data?.message) {
        alert(err.response.data.message);
      } else {
        alert("Something went wrong");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-bold mb-4">Add Viewer</h2>

      <div className="flex flex-col md:flex-row gap-4">
        {/* Email Input */}
        <input
          type="email"
          placeholder="Enter viewer email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 rounded-lg flex-1"
        />

        {/* Button */}
        <button
          onClick={handleAddViewer}
          disabled={loading}
          className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
        >
          {loading ? "Adding..." : "Add Viewer"}
        </button>
      </div>
    </div>
  );
}