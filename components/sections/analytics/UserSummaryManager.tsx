"use client";

import { useEffect, useState } from "react";
import { getSummaryByUser, UserSummary } from "@/services/summary";

export default function UserSummaryManager() {
  const [data, setData] = useState<UserSummary[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSummaryByUser();
        setData(Array.isArray(res) ? res : [res]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">User Summary</h2>
      {data.map((user, idx) => (
        <div key={idx} className="mb-3 p-3 bg-gray-50 rounded-lg">
          <h3 className="font-semibold">{user.user.name} ({user.user.email})</h3>
          <div className="flex justify-between mt-2">
            <span>Total Income:</span>
            <span className="font-semibold">₹{user.totalIncome}</span>
          </div>
          <div className="flex justify-between">
            <span>Total Expense:</span>
            <span className="font-semibold">₹{user.totalExpense}</span>
          </div>
          <div className="flex justify-between">
            <span>Net Balance:</span>
            <span className="font-semibold">₹{user.netBalance}</span>
          </div>
        </div>
      ))}
    </div>
  );
}