"use client";

import ApiSection from "./ApiSection";

export default function DeleteTransaction1() {
  return (
    <ApiSection
      title="Delete Transaction - Unauthorized cases"
      description="ADMIN, MANAGER, VIEWER can not delete any transaction. USER can only delete their own transaction."
      endpoint="/transactions/69d4ccecd0a649bf5cb59c44" 
      method="DELETE"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjOWQzZjc0ODlkOTNkYzVkNDFkYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3NTUwMDAzNywiZXhwIjoxNzc2MTA0ODM3fQ.MNvjHw5QfZkgseGQqpFfUTsNsVJtA_3o6wg3FIN1fDM"
    />

  );
}