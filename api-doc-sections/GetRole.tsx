"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function GetRole() {
  return (
    <ApiSection
      title="Get Role"
      description="Use this endpoint to get the role of the currently authenticated user."
      endpoint="http://localhost:5000/api/auth/getrole"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjNWJlZjc0ODlkOTNkYzVkNDFkOSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzc1MzkwNTE5LCJleHAiOjE3NzU5OTUzMTl9.5tdMUPrGQmtkaWGNSXzviGVZvdxS5i_5p9lCRo2uXpc"
    />
  );
}