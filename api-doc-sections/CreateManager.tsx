"use client";

import ApiSection from "./ApiSection";

export default function CreateManager() {
  return (
    <ApiSection
      title="Create Manager"
      description="Create a new manager account (Admin only)"
      endpoint="/admin/create-manager"
      method="POST"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjOWQzZjc0ODlkOTNkYzVkNDFkYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3NTUwMDAzNywiZXhwIjoxNzc2MTA0ODM3fQ.MNvjHw5QfZkgseGQqpFfUTsNsVJtA_3o6wg3FIN1fDM"

      defaultBody={JSON.stringify(
        {
          name: "Manager Name",
          email: "manager@gmail.com",
          password: "123456"
        },
        null,
        2
      )}
    />
  );
}