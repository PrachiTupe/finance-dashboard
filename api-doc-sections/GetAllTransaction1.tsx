"use client"; // Needed for client-side interactivity in Next.js app dir

import ApiSection from "./ApiSection";

export default function GetAllTransaction1() {
  return (
    <ApiSection
      title="Get All Transactions - VIEWER"
      description="Viewer sees all transactions of the user it is added to"
      endpoint="http://localhost:5000/api/transactions"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBkMzkyOTcxMmEwNzI1ODI4YjYxNCIsInJvbGUiOiJWSUVXRVIiLCJpYXQiOjE3NzU0NzIzODQsImV4cCI6MTc3NjA3NzE4NH0.HwxA3gH6noIHK0pWrqXG6QkGRBTkT05WOIxfKVUGHNI"    />
  );
}