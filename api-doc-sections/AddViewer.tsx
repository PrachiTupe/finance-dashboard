"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function AddViewer() {
  return (
    <ApiSection
      title="Add Viewer"
      description="Use this endpoint to add a new viewer by email for the authenticated user."
      endpoint="http://localhost:5000/api/users/add-viewer"
      method="POST"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjNWJlZjc0ODlkOTNkYzVkNDFkOSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzc1MzkwNTE5LCJleHAiOjE3NzU5OTUzMTl9.5tdMUPrGQmtkaWGNSXzviGVZvdxS5i_5p9lCRo2uXpc"
      defaultBody={JSON.stringify(
        {
          email: "soham@gmail.com",
        },
        null,
        2
      )}
    />
  );
}