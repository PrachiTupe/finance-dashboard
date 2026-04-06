"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function GetAllTransaction3() {
  return (
    <ApiSection
      title="Get All Transactions - ADMIN"
      description="Admin sees all transactions of all users"
      endpoint="http://localhost:5000/api/transactions"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjOWQzZjc0ODlkOTNkYzVkNDFkYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3NTQ3MjYyNiwiZXhwIjoxNzc2MDc3NDI2fQ.2-qxu6DrjEdrPDvBxhmT7yQTRRXUh7_zB7qPoRX8nqs"    />
  );
}