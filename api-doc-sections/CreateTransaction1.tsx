"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function CreateTransaction1() {
  return (
    <ApiSection
      title="Create Transaction - ADMIN VIEWER, MANAGER cannot create transaction"
      description="Use this endpoint to create a new transaction for the authenticated user."
      endpoint="http://localhost:5000/api/transactions"
      method="POST"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjOWQzZjc0ODlkOTNkYzVkNDFkYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3NTQ3MjYyNiwiZXhwIjoxNzc2MDc3NDI2fQ.2-qxu6DrjEdrPDvBxhmT7yQTRRXUh7_zB7qPoRX8nqs"
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