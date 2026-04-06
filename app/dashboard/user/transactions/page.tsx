import CreateTransaction from "@/components/sections/transactions/CreateTransactions";
import DisplayTransactions from "@/components/sections/transactions/DisplayTransactions";

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      {/* 🔥 Transactions Section */}
      <DisplayTransactions />
      <CreateTransaction />
    </div>
  );
}