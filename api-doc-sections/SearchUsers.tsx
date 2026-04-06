"use client";

import ApiSection from "./ApiSection";

export default function SearchUsers() {
  return (
    <ApiSection
      title="Search Users"
      description="Search users by name or email (partial match, admin only)"
      endpoint="/admin/search-users?query=pr"
      method="GET"
      token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY5ZDBjOWQzZjc0ODlkOTNkYzVkNDFkYiIsInJvbGUiOiJBRE1JTiIsImlhdCI6MTc3NTUwMDAzNywiZXhwIjoxNzc2MTA0ODM3fQ.MNvjHw5QfZkgseGQqpFfUTsNsVJtA_3o6wg3FIN1fDM"

    />
  );
}