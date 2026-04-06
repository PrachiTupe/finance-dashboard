"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function AssignedUsersForViewer() {
  return (
    <ApiSection
      title="Assigned Users - Viewer"
      description="Use this endpoint to fetch all users who have granted access to the logged-in viewer."
      endpoint="/users/assigned-users"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjNWJlZjc0ODlkOTNkYzVkNDFkOSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzc1NDg4MjY2LCJleHAiOjE3NzYwOTMwNjZ9.0JZo0U0WHAAQI9aNh01QkO0aPxyQzFotZkOBBLZ2gYw"
    />
  );
}