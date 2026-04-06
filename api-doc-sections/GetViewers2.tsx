"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function GetViewer2() {
  return (
    <ApiSection
      title="Get Viewers - Manager"
      description="Use this endpoint to fetch all viewers of the manager's users."
      endpoint="/users/viewers"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDEyZmY2ODA2ZjcwZTUwOTQyOGZmMyIsInJvbGUiOiJNQU5BR0VSIiwiaWF0IjoxNzc1NDgzOTY5LCJleHAiOjE3NzYwODg3Njl9.Nlcby4TX6OQnDAc4X8BCKSgtuiHvJ2XhFtQy-c27MtA"    />
  );
}