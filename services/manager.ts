// services/manager.ts
import api from "./api";

export interface ManagedUser {
  _id: string;
  name: string;
  email: string;
  role: "USER" | "VIEWER" | "MANAGER" | "ADMIN";
  managerId?: string;
  createdAt: string;
  updatedAt: string;
}

export const getMyUsers = async (): Promise<ManagedUser[]> => {
  try {
    const response = await api.get<ManagedUser[]>("/manager/getmyusers");
    return response.data;
  } catch (error: any) {
    console.error("Error fetching users:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Failed to fetch users");
  }
};