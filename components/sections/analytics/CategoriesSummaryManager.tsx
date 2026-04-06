"use client";

import { useEffect, useState } from "react";
import { getCategoriesSummary, Category } from "@/services/summary";

export default function CategoriesSummaryManager() {
  const [data, setData] = useState<Category[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCategoriesSummary();
        setData(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">Categories Summary</h2>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between p-3 bg-gray-100 rounded-xl"
          >
            <span>{item.category}</span>
            <span className="font-semibold">₹{item.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}