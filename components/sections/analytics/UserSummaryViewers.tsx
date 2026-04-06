"use client";

import { useEffect, useState } from "react";
import { getSummaryByUser, UserSummary } from "@/services/summary";

export default function UserSummaryViewers() {
  const [data, setData] = useState<UserSummary[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getSummaryByUser();
      const users = Array.isArray(res) ? res : [res];
      setData(users);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">User Summary</h2>

      <div className="space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-gray-100 rounded-xl flex justify-between"
          >
            <div>
              <p className="font-semibold">{item.user?.name}</p>
              <p className="text-sm text-gray-500">{item.user?.email}</p>
            </div>

            <div className="text-right">
              <p className="text-green-600">+₹{item.totalIncome}</p>
              <p className="text-red-600">-₹{item.totalExpense}</p>
              <p className="font-bold">₹{item.netBalance}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}