"use client";

import ApiSection from "./ApiSection";

export default function DeleteTransaction() {
  return (
    <ApiSection
      title="Delete Transaction - User can only delete their own transaction"
      description="Soft delete your own transaction. Only the owner can delete a transaction. Provide the transaction ID in the endpoint."
      endpoint="/transactions/69d4ccecd0a649bf5cb59c44" 
      method="DELETE"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjNWJlZjc0ODlkOTNkYzVkNDFkOSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzc1NTQ0MzgwLCJleHAiOjE3NzYxNDkxODB9.eNHvZsp9PzWdn2ZJxaL4eKMimsmqj2WxXcepC-7LCP8"    />
  );
}