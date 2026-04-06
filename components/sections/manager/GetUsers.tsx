"use client";

import { useEffect, useState } from "react";
import { getMyUsers, ManagedUser } from "@/services/manager";

export default function GetUsers() {
  const [users, setUsers] = useState<ManagedUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const data = await getMyUsers();
        setUsers(data);
        setError("");
      } catch (err: any) {
        setError(err.message || "Failed to fetch users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="p-4 bg-white shadow rounded-md">
      <h2 className="text-xl font-bold mb-4">My Users</h2>
      {users.length === 0 ? (
        <p>No users assigned to you yet.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user._id} className="p-2 border rounded flex justify-between">
              <div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded">{user.role}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}