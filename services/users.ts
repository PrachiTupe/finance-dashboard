import api from "./api";

// 🔥 Viewer User Type (from populate)
export type ViewerUser = {
  _id: string;
  name: string;
  email: string;
  role: string;
};

// 🔥 Response type → grouped by userId
export type ViewersResponse = {
  [userId: string]: ViewerUser[];
};

// ✅ Add viewer (by email)
export const addViewer = async (email: string): Promise<{
  message: string;
}> => {
  const res = await api.post("/users/add-viewer", { email });
  return res.data;
};

// ✅ Get viewers (role-based handled by backend)
export const getViewers = async (): Promise<ViewersResponse> => {
  const res = await api.get("/users/viewers");
  return res.data;
};




export const deleteViewer = async (
  viewerId: string
): Promise<{ message: string }> => {
  const res = await api.delete(`/users/delete-viewer/${viewerId}`);
  return res.data;
};