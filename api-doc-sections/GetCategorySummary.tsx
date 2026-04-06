"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function GetCategorySummary() {
  return (
    <ApiSection
      title="Get Category Summary"
      description="Use this endpoint to fetch the summary of transactions grouped by category for the authenticated user."
      endpoint="/summary/get-categories-summary"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjNWJlZjc0ODlkOTNkYzVkNDFkOSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzc1Mjk0MjE0LCJleHAiOjE3NzU4OTkwMTR9.XCbe4AiBSAVqspSWYaq8Y7h7mv3TE62AE4LEQwToFGw"
    />
  );
}