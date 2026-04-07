"use client";

import ApiSection from "./ApiSection";

export default function UpdateTransaction() {
  return (
    <ApiSection
      title="Update Transaction - Authorized cases"
      description="Update your own transaction. Only the owner can update it. You can change amount, type, category, note, or date."
      endpoint="/transactions/69d4ad026619648116a37f49" 
      method="PUT"
      defaultBody={JSON.stringify(
        {
          amount: 1000,
          type: "EXPENSE",   // "INCOME" or "EXPENSE"
          category: "FOOD",  // example category
          note: "Updated transaction note",
          date: "2026-04-07" // YYYY-MM-DD format
        },
        null,
        2
      )}
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjNWJlZjc0ODlkOTNkYzVkNDFkOSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzc1NTQ0MzgwLCJleHAiOjE3NzYxNDkxODB9.eNHvZsp9PzWdn2ZJxaL4eKMimsmqj2WxXcepC-7LCP8"
    />
  );
}