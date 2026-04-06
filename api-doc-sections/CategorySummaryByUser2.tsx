"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function CategorySummaryByUser2() {
  return (
    <ApiSection
      title="Category Summary By User - Viewer"
      description="Use this endpoint to fetch  the summary of transactions grouped by category for a specific viewer user. This endpoint is accessible to manager users and provides insights into the spending habits of individual viewers."
      endpoint="/summary/get-categories-summary-by-user"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDEyZmY2ODA2ZjcwZTUwOTQyOGZmMyIsInJvbGUiOiJNQU5BR0VSIiwiaWF0IjoxNzc1NDg3NDExLCJleHAiOjE3NzYwOTIyMTF9.yrTKkLHCdgVXsaIWwFimNvtpFOh3jzBLVknodBXQymA"
    />
  );
}