"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function CategorySummaryByUser() {
  return (
    <ApiSection
      title="Category Summary By User - Admin"
      description="Use this endpoint to fetch the summary of transactions grouped by category for a specific viewer user. This endpoint is accessible to admin users and provides insights into the spending habits of individual viewers."
      endpoint="/summary/get-categories-summary-by-user"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjOWQzZjc0ODlkOTNkYzVkNDFkYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3NTQ4Mzg1MiwiZXhwIjoxNzc2MDg4NjUyfQ.EERgF7-Phq18Jfah4kX8PaMWlqvAdUVzW2g6oQ17WK0"
    />
  );
}