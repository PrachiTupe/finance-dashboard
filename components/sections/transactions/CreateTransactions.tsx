"use client";

import { useState } from "react";
import { createTransaction, TransactionType, TransactionCategory } from "@/services/transaction";

export default function CreateTransaction() {
  const [amount, setAmount] = useState("");
  const [type, setType] = useState<TransactionType>("EXPENSE");
  const [category, setCategory] = useState<TransactionCategory>("FOOD");
  const [note, setNote] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!amount || !type || !category) {
      alert("Please fill required fields");
      return;
    }

    try {
      setLoading(true);

      await createTransaction({
        amount: Number(amount),
        type,
        category,
        note,
        date,
      });

      // Reset form
      setAmount("");
      setNote("");
      setDate("");

      alert("Transaction created ✅");
    } catch (err) {
      console.error("Failed to create transaction", err);
      alert("Error creating transaction");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-bold mb-4">Add Transaction</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Amount */}
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border p-3 rounded-lg"
        />

        {/* Type */}
        <select
          value={type}
          onChange={(e) => setType(e.target.value as TransactionType)}
          className="border p-3 rounded-lg"
        >
          <option value="INCOME">Income</option>
          <option value="EXPENSE">Expense</option>
        </select>

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as TransactionCategory)}
          className="border p-3 rounded-lg"
        >
          <option value="FOOD">Food</option>
          <option value="TRANSPORT">Transport</option>
          <option value="SHOPPING">Shopping</option>
          <option value="ENTERTAINMENT">Entertainment</option>
          <option value="HEALTH">Health</option>
          <option value="TRAVEL">Travel</option>
          <option value="FINANCE">Finance</option>
          <option value="LIVING">Living</option>
          <option value="INCOME">Income</option>
        </select>

        {/* Date */}
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-3 rounded-lg"
        />
      </div>

      {/* Note */}
      <textarea
        placeholder="Note (optional)"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="border p-3 rounded-lg w-full mt-4"
      />

      {/* Button */}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="mt-4 bg-black text-white px-6 py-3 rounded-lg hover:opacity-90 transition"
      >
        {loading ? "Creating..." : "Add Transaction"}
      </button>
    </div>
  );
}