"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function GetAllTransaction2() {
  return (
    <ApiSection
      title="Get All Transactions - MANAGER"
      description="Manager sees all transactions of all users assigned"
      endpoint="http://localhost:5000/api/transactions"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDEyZmY2ODA2ZjcwZTUwOTQyOGZmMyIsInJvbGUiOiJNQU5BR0VSIiwiaWF0IjoxNzc1NDcyNTAyLCJleHAiOjE3NzYwNzczMDJ9.Gigf-refevUBXX3E6liJKwijqpHkw5MmABOa8L5jC4w"    />
  );
}