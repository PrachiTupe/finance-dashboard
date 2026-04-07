"use client";

import ApiSection from "./ApiSection";

export default function UpdateTransaction1() {
  return (
    <ApiSection
      title="Update Transaction - Unauthorized cases"
      description="ADMIN, MANAGER, VIEWER can not update any transaction. USER can only update their own transaction."
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
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjOWQzZjc0ODlkOTNkYzVkNDFkYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3NTUwMDAzNywiZXhwIjoxNzc2MTA0ODM3fQ.MNvjHw5QfZkgseGQqpFfUTsNsVJtA_3o6wg3FIN1fDM"
    />
  );
}