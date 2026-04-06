"use client";

import { useEffect, useState } from "react";
import {
  getCategoriesSummaryByUser,
  CategorySummaryByUser,
} from "@/services/summary";

export default function UserCategoriesSummaryViewers() {
  const [data, setData] = useState<CategorySummaryByUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getCategoriesSummaryByUser();
      const users = Array.isArray(res) ? res : [res];
      setData(users);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">
        User Categories Summary
      </h2>

      <div className="space-y-6">
        {data.map((userData, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-xl">
            <p className="font-semibold">{userData.user?.name}</p>
            <p className="text-sm text-gray-500 mb-3">
              {userData.user?.email}
            </p>

            <div className="space-y-2">
              {userData.categories.map((cat, i) => (
                <div
                  key={i}
                  className="flex justify-between bg-white p-2 rounded-lg"
                >
                  <span>{cat.category}</span>
                  <span className="font-semibold">₹{cat.total}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}