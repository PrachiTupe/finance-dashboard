"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function AddViewer2() {
  return (
    <ApiSection
      title="Add Viewer - Cannot add Manager, USER & Admin as Viewer"
      description="Manager, USER & Admin cannot be added as Viewer for any user."
      endpoint="/users/add-viewer"
      method="POST"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjNWJlZjc0ODlkOTNkYzVkNDFkOSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzc1MzkwNTE5LCJleHAiOjE3NzU5OTUzMTl9.5tdMUPrGQmtkaWGNSXzviGVZvdxS5i_5p9lCRo2uXpc"
      defaultBody={JSON.stringify(
        {
          email: "riya@gmail.com",
        },
        null,
        2
      )}
    />
  );
}