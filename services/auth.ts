import api from "./api";

export type UserInfo = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export const login = async (email: string, password: string) => {
  const res = await api.post("/auth/login", { email, password });
  return res.data; // assume it returns { token }
};

export const register = async (name: string, email: string, password: string) => {
  const res = await api.post("/auth/register", { name, email, password });
  return res.data; // { message: "User created successfully" } or error message
};

export const getRole = async () => {
  const res = await api.get("/auth/getrole");
  return res.data.role; // { role: "USER" }
};

export const getMyInfo = async (): Promise<UserInfo> => {
  const res = await api.get("/auth/getmyinfo");
  return res.data; // { id, name, email, role }
};

export const changePassword = async (oldPassword: string,newPassword: string) => {
  const res = await api.put("/auth/change-password", { oldPassword, newPassword });
  return res.data; // { message: "Password updated successfully" }
};