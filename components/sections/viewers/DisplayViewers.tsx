"use client";

import { useEffect, useState } from "react";
import {
  getViewers,
  deleteViewer,
  ViewersResponse,
  ViewerUser,
} from "@/services/users";

import { Trash2, Loader2 } from "lucide-react";

export default function DisplayViewers() {
  const [viewers, setViewers] = useState<ViewersResponse>({});
  const [loading, setLoading] = useState(true);

  // 🔥 Track deleting state per viewer
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchViewers = async () => {
      try {
        const data = await getViewers();
        setViewers(data);
      } catch (err) {
        console.error("Failed to fetch viewers", err);
      } finally {
        setLoading(false);
      }
    };

    fetchViewers();
  }, []);

  // ❌ Delete handler
  const handleDelete = async (viewerId: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to remove this viewer?"
    );

    if (!confirmDelete) return;

    try {
      setDeletingId(viewerId);

      await deleteViewer(viewerId);

      // ⚡ Optimistic UI update
      setViewers((prev) => {
        const updated = { ...prev };

        Object.keys(updated).forEach((userId) => {
          updated[userId] = updated[userId].filter(
            (v) => v._id !== viewerId
          );
        });

        return updated;
      });
    } catch (err: any) {
      console.error(
        err.response?.data?.message || "Failed to delete viewer"
      );
    } finally {
      setDeletingId(null);
    }
  };

  // 🔄 Loading
  if (loading) {
    return <p className="text-gray-500">Loading viewers...</p>;
  }

  // ❌ Empty
  const allViewers = Object.values(viewers).flat();

  if (allViewers.length === 0) {
    return <p className="text-gray-500">No viewers found.</p>;
  }

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-lg font-bold mb-4">Viewers</h2>

      <div className="space-y-6">
        {Object.entries(viewers).map(([userId, viewerList]) => (
          <div key={userId}>
            <h3 className="text-sm font-semibold text-gray-500 mb-2">
              User ID: {userId}
            </h3>

            <div className="space-y-2">
              {viewerList.map((viewer: ViewerUser) => (
                <div
                  key={viewer._id}
                  className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50"
                >
                  {/* 👤 Info */}
                  <div>
                    <p className="font-medium text-gray-800">
                      {viewer.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {viewer.email}
                    </p>
                  </div>

                  {/* 🎯 Actions */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs px-3 py-1 rounded-full bg-gray-100 text-gray-600">
                      {viewer.role}
                    </span>

                    {/* ❌ Delete Button */}
                    <button
                      onClick={() => handleDelete(viewer._id)}
                      disabled={deletingId === viewer._id}
                      className="text-red-500 hover:text-red-700 transition disabled:opacity-50"
                      title="Remove viewer"
                    >
                      {deletingId === viewer._id ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : (
                        <Trash2 size={18} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}