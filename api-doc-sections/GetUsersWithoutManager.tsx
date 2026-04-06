"use client";

import ApiSection from "./ApiSection";

export default function GetUsersWithoutManager() {
  return (
    <ApiSection
      title="Get Users Without Manager"
      description="Fetch users who are not assigned to any manager"
      endpoint="/admin/get-users-without-manager"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjOWQzZjc0ODlkOTNkYzVkNDFkYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3NTUwMDAzNywiZXhwIjoxNzc2MTA0ODM3fQ.MNvjHw5QfZkgseGQqpFfUTsNsVJtA_3o6wg3FIN1fDM"

    />
  );
}