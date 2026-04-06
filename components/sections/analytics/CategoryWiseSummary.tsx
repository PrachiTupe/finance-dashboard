"use client";

import { useEffect, useState } from "react";
import { getCategoriesSummary, Category } from "@/services/summary";

export default function CategoryWiseSummary() {
  const [data, setData] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategoriesSummary();
        setData(res);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;

  return (
    <div className="p-4 rounded-2xl shadow-md bg-white mt-6">
      <h2 className="text-xl font-semibold mb-4">Category Wise Summary</h2>

      <div className="space-y-3">
        {data.length === 0 && <p>No data available</p>}

        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center p-3 bg-gray-100 rounded-xl"
          >
            <span className="font-medium">{item.category}</span>
            <span className="font-semibold">₹{item.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}