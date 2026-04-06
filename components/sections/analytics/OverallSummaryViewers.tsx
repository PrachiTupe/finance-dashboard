"use client";

import { useEffect, useState } from "react";
import { getSummary, Summary } from "@/services/summary";

export default function OverallSummaryViewers() {
  const [data, setData] = useState<Summary | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getSummary();
      setData(res);
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4">Overall Summary</h2>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-green-100 p-3 rounded-xl text-center">
          <p>Income</p>
          <p className="font-bold text-green-700">₹{data?.totalIncome}</p>
        </div>

        <div className="bg-red-100 p-3 rounded-xl text-center">
          <p>Expense</p>
          <p className="font-bold text-red-700">₹{data?.totalExpense}</p>
        </div>

        <div className="bg-blue-100 p-3 rounded-xl text-center">
          <p>Balance</p>
          <p className="font-bold text-blue-700">₹{data?.netBalance}</p>
        </div>
      </div>
    </div>
  );
}