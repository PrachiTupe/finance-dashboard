import api from "./api";

// ================= TYPES =================

export type Summary = {
  totalIncome: number;
  totalExpense: number;
  netBalance: number;
};

export type UserSummary = {
  user: {
    name: string;
    email: string;
  };
  totalIncome: number;
  totalExpense: number;
  netBalance: number;
};

export type Category = {
  category: string;
  total: number;
};

export type CategorySummaryByUser = {
  user: {
    name: string;
    email: string;
  };
  categories: Category[];
};

// ================= API CALLS =================

// 🔥 1. Get overall summary
export const getSummary = async (): Promise<Summary> => {
  const res = await api.get("/summary/getsummary");
  return res.data;
};

// 🔥 2. Get summary by user
export const getSummaryByUser = async (): Promise<UserSummary[] | UserSummary> => {
  const res = await api.get("/summary/get-summary-by-user");
  return res.data;
};

// 🔥 3. Get category summary (global)
export const getCategoriesSummary = async (): Promise<Category[]> => {
  const res = await api.get("/summary/get-categories-summary");
  return res.data;
};

// 🔥 4. Get category summary by user
export const getCategoriesSummaryByUser = async (): Promise<
  CategorySummaryByUser[] | CategorySummaryByUser
> => {
  const res = await api.get("/summary/get-categories-summary-by-user");
  return res.data;
};