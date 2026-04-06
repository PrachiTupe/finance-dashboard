"use client";

import { useEffect, useState } from "react";
import { getSummary, Summary } from "@/services/summary";

export default function OverallSummaryManager() {
  const [summary, setSummary] = useState<Summary | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSummary();
        setSummary(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  if (!summary) return <p>Loading summary...</p>;

  return (
    <div className="p-4 bg-white rounded-2xl shadow-md mt-6 space-y-2">
      <h2 className="text-xl font-semibold mb-4">Overall Summary</h2>
      <div className="flex justify-between">
        <span>Total Income:</span>
        <span className="font-semibold">₹{summary.totalIncome}</span>
      </div>
      <div className="flex justify-between">
        <span>Total Expense:</span>
        <span className="font-semibold">₹{summary.totalExpense}</span>
      </div>
      <div className="flex justify-between">
        <span>Net Balance:</span>
        <span className="font-semibold">₹{summary.netBalance}</span>
      </div>
    </div>
  );
}