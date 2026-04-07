"use client";

import ApiSection from "./ApiSection";

export default function PaginatedTransaction() {
  return (
    <ApiSection
      title="Get Paginated Transactions"
      description="Fetch transactions with pagination. Provide page number and limit as query parameters. Example: /transactions/paginated?page=1&limit=10"
      endpoint="/transactions/paginated?page=1&limit=10"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjNWJlZjc0ODlkOTNkYzVkNDFkOSIsInJvbGUiOiJVU0VSIiwiaWF0IjoxNzc1NTQ0MzgwLCJleHAiOjE3NzYxNDkxODB9.eNHvZsp9PzWdn2ZJxaL4eKMimsmqj2WxXcepC-7LCP8"    />
    
  );
}