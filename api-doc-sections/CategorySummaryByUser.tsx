"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function CategorySummaryByUser() {
  return (
    <ApiSection
      title="Category Summary By User"
      description="Use this endpoint to fetch the summary of transactions grouped by category for a specific viewer user."
      endpoint="http://localhost:5000/api/summary/get-categories-summary-by-user"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBkMzkyOTcxMmEwNzI1ODI4YjYxNCIsInJvbGUiOiJWSUVXRVIiLCJpYXQiOjE3NzUyOTU0NjksImV4cCI6MTc3NTkwMDI2OX0.DhSxUsk4LZN1mygfLmuEBjXViBAuCEKxseoKg6pJWAA"
    />
  );
}