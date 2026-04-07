"use client";

import ApiSection from "./ApiSection";

export default function GetDeletedTransactionsManager() {
  return (
    <ApiSection
      title="Get Deleted Transactions - Manager"
      description="Manager can fetch deleted transactions of assigned users only."
      endpoint="/transactions/deleted"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDEyZmY2ODA2ZjcwZTUwOTQyOGZmMyIsInJvbGUiOiJNQU5BR0VSIiwiaWF0IjoxNzc1NTU0OTU3LCJleHAiOjE3NzYxNTk3NTd9.D4-JSgkF7x7CfJl8yW6tOg57yk8ql9JVVob694R44wk"
    />
  );
}