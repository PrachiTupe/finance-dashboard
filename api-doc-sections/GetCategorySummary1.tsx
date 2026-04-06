"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function GetCategorySummary1() {
  return (
    <ApiSection
      title="Get Category Summary of all assigned users"
      description="Use this endpoint to fetch the summary of transactions grouped by category for all users assigned to the Viewer."
      endpoint="/summary/get-categories-summary"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjNWJlZjc0ODlkOTNkYzVkNDFkOSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzc1NDg2OTgxLCJleHAiOjE3NzYwOTE3ODF9.2SQAWB_MpJJImqIBjGzeXydwZUjRTDokaFOz8AgxcnQ"
    />
  );
}