"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function GetCategorySummary2() {
  return (
    <ApiSection
      title="Get Category Summary of all assigned users"
      description="Use this endpoint to fetch the summary of transactions grouped by category for all users assigned to the Manager."
      endpoint="/summary/get-categories-summary"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDEyZmY2ODA2ZjcwZTUwOTQyOGZmMyIsInJvbGUiOiJNQU5BR0VSIiwiaWF0IjoxNzc1NDg3MDkzLCJleHAiOjE3NzYwOTE4OTN9.mqRQmORjcLwNgl36IWVqOPXrn68GR3rm182UzMX3Z-A"
    />
  );
}