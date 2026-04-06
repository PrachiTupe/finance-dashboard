"use client";

import { useEffect, useState } from "react";
import { getCategoriesSummaryByUser, CategorySummaryByUser } from "@/services/summary";

export default function CategoryWiseSummaryManager() {
  const [data, setData] = useState<CategorySummaryByUser[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCategoriesSummaryByUser();
        setData(Array.isArray(res) ? res : [res]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Category Wise Summary by Users</h2>
      {data.map((userData, idx) => (
        <div key={idx} className="mb-4">
          <h3 className="font-semibold">{userData.user.name} ({userData.user.email})</h3>
          <div className="space-y-2 mt-2">
            {userData.categories.map((cat, i) => (
              <div
                key={i}
                className="flex justify-between p-2 bg-gray-100 rounded-lg"
              >
                <span>{cat.category}</span>
                <span className="font-semibold">₹{cat.total}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}