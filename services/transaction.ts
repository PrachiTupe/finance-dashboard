import api from "./api";

// 🔥 Enums (match backend exactly)
export type TransactionType = "INCOME" | "EXPENSE";

export type TransactionCategory =
  | "LIVING"
  | "TRANSPORT"
  | "FOOD"
  | "SHOPPING"
  | "ENTERTAINMENT"
  | "HEALTH"
  | "TRAVEL"
  | "FINANCE"
  | "INCOME";

// 🔥 Transaction Type
export type Transaction = {
  _id: string;
  userId: string;
  amount: number;
  type: TransactionType;
  category: TransactionCategory;
  note?: string;
  date?: string;
  createdAt?: string;
  updatedAt?: string;
};

// ✅ Get all transactions
export const getTransactions = async (): Promise<Transaction[]> => {
  const res = await api.get("/transactions");
  return res.data;
};

// ✅ Create transaction
export const createTransaction = async (
  data: {
    amount: number;
    type: TransactionType;
    category: TransactionCategory;
    note?: string;
    date?: string;
  }
): Promise<Transaction> => {
  const res = await api.post("/transactions", data);
  return res.data;
};