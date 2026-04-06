"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function GetCategorySummary3() {
  return (
    <ApiSection
      title="Get Category Summary of all assigned users"
      description="Use this endpoint to fetch the summary of transactions grouped by category for all users assigned to the Manager."
      endpoint="/summary/get-categories-summary"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjOWQzZjc0ODlkOTNkYzVkNDFkYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3NTQ4Mzg1MiwiZXhwIjoxNzc2MDg4NjUyfQ.EERgF7-Phq18Jfah4kX8PaMWlqvAdUVzW2g6oQ17WK0"
    />
  );
}