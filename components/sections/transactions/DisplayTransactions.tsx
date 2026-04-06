"use client";

import { useEffect, useState } from "react";
import { getTransactions, Transaction } from "@/services/transaction";

export default function DisplayTransactions() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const data = await getTransactions();
        setTransactions(data);
      } catch (err) {
        console.error("Failed to fetch transactions", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  // 🔄 Loading state
  if (loading) {
    return <p className="text-gray-500">Loading transactions...</p>;
  }

  // ❌ Empty state
  if (transactions.length === 0) {
    return <p className="text-gray-500">No transactions found.</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-bold mb-4">Transactions</h2>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-500 text-sm border-b">
              <th className="py-3">Amount</th>
              <th>Type</th>
              <th>Category</th>
              <th>Note</th>
              <th>Date</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((txn) => (
              <tr
                key={txn._id}
                className="border-b hover:bg-gray-50 transition"
              >
                <td className="py-3 font-semibold">
                  ₹{txn.amount}
                </td>

                <td
                  className={`font-medium ${
                    txn.type === "INCOME"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {txn.type}
                </td>

                <td>{txn.category}</td>

                <td>{txn.note || "-"}</td>

                <td className="text-sm text-gray-500">
                  {txn.date
                    ? new Date(txn.date).toLocaleDateString()
                    : "-"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}