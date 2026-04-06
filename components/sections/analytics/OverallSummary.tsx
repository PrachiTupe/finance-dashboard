"use client";

import { useEffect, useState } from "react";
import { getSummary, Summary } from "@/services/summary";

export default function OverallSummary() {
  const [data, setData] = useState<Summary | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSummary = async () => {
      try {
        const res = await getSummary();
        setData(res);
      } catch (error) {
        console.error("Error fetching summary:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, []);

  if (loading) return <p>Loading summary...</p>;

  return (
    <div className="p-4 rounded-2xl shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">Overall Summary</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="p-3 bg-green-100 rounded-xl text-center">
          <p className="text-sm text-gray-600">Income</p>
          <p className="text-lg font-bold text-green-700">
            ₹{data?.totalIncome}
          </p>
        </div>

        <div className="p-3 bg-red-100 rounded-xl text-center">
          <p className="text-sm text-gray-600">Expense</p>
          <p className="text-lg font-bold text-red-700">
            ₹{data?.totalExpense}
          </p>
        </div>

        <div className="p-3 bg-blue-100 rounded-xl text-center">
          <p className="text-sm text-gray-600">Balance</p>
          <p className="text-lg font-bold text-blue-700">
            ₹{data?.netBalance}
          </p>
        </div>
      </div>
    </div>
  );
}