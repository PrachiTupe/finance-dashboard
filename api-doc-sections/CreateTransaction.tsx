"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function CreateTransaction() {
  return (
    <ApiSection
      title="Create Transaction - ONLY USER CAN"
      description="Use this endpoint to create a new transaction for the authenticated user."
      endpoint="http://localhost:5000/api/transactions"
      method="POST"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjNWJlZjc0ODlkOTNkYzVkNDFkOSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzc1MzkwNTE5LCJleHAiOjE3NzU5OTUzMTl9.5tdMUPrGQmtkaWGNSXzviGVZvdxS5i_5p9lCRo2uXpc"
      defaultBody={JSON.stringify(
        {
          amount: 1000,
          type: "EXPENSE",
          category: "SHOPPING",
          note: "Dress and all Stuff",
          date: "2026-02-13",
        },
        null,
        2
      )}
    />
  );
}